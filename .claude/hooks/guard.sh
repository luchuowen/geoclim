#!/usr/bin/env bash
# PreToolUse guard for Edit|Write. Reads the tool-call JSON on stdin.
# Exit 2 (with reason on stderr) blocks the call; exit 0 allows it.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
MANIFEST="$REPO_ROOT/.factory/manifest.json"
[ -f "$MANIFEST" ] || exit 0

INPUT="$(cat)"
TOOL_NAME="$(jq -r '.tool_name // empty' <<<"$INPUT")"
FILE_PATH="$(jq -r '.tool_input.file_path // empty' <<<"$INPUT")"
[ -n "$FILE_PATH" ] || exit 0

# Normalize to a repo-relative path for pattern matching.
REL_PATH="${FILE_PATH#"$REPO_ROOT"/}"

path_matches() {
  local candidate="$1" pattern="$2"
  case "$candidate" in
    $pattern) return 0 ;;
    *) return 1 ;;
  esac
}

# --- protected paths: blocked until the owner names the exact file ---
while IFS= read -r p; do
  [ -n "$p" ] || continue
  if path_matches "$REL_PATH" "$p"; then
    echo "BLOCKED: '$REL_PATH' is protected (.factory/manifest.json#protected). Port values exactly by reading it, but do not edit or delete it without the owner naming this exact file." >&2
    exit 2
  fi
done < <(jq -r '.protected[]? // empty' "$MANIFEST")

# --- append-only dirs: blocked if the file already exists in HEAD ---
while IFS= read -r d; do
  [ -n "$d" ] || continue
  case "$REL_PATH" in
    $d*)
      if git -C "$REPO_ROOT" cat-file -e "HEAD:$REL_PATH" 2>/dev/null; then
        echo "BLOCKED: '$REL_PATH' is under an append-only dir (.factory/manifest.json#append_only_dirs) and already exists in HEAD. Add a new file instead of editing history." >&2
        exit 2
      fi
      ;;
  esac
done < <(jq -r '.append_only_dirs[]? // empty' "$MANIFEST")

# --- whole-file rewrite check: Write re-emitting a >=150-line file while
#     changing <25% of its lines. Use Edit instead. ---
if [ "$TOOL_NAME" = "Write" ] && [ -f "$FILE_PATH" ]; then
  OLD_LINES=$(wc -l < "$FILE_PATH" || echo 0)
  if [ "$OLD_LINES" -ge 150 ]; then
    NEW_CONTENT="$(jq -r '.tool_input.content // empty' <<<"$INPUT")"
    NEW_LINES=$(printf '%s\n' "$NEW_CONTENT" | wc -l)
    CHANGED=$(diff <(cat "$FILE_PATH") <(printf '%s\n' "$NEW_CONTENT") | grep -c '^[<>]' || true)
    MAX_LINES=$OLD_LINES
    [ "$NEW_LINES" -gt "$MAX_LINES" ] && MAX_LINES=$NEW_LINES
    if [ "$MAX_LINES" -gt 0 ]; then
      PCT=$(( CHANGED * 100 / MAX_LINES ))
      if [ "$PCT" -lt 25 ]; then
        echo "BLOCKED: Write re-emits '$REL_PATH' ($OLD_LINES lines) but only ~${PCT}% changed. Use Edit for a targeted diff — same result, far fewer output tokens." >&2
        exit 2
      fi
    fi
  fi
fi

exit 0
