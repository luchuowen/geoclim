#!/usr/bin/env bash
# SessionStart hook (matcher: compact|resume). Re-injects the open change
# artifact, the files changed on this branch, and the rule files that
# govern them — replaces "re-read X after compaction" sentences in prose.
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

echo "## Factory session context"

LATEST_ARTIFACT="$(ls -t .factory/changes/*.md 2>/dev/null | grep -v TEMPLATE.md | head -1 || true)"
if [ -n "$LATEST_ARTIFACT" ]; then
  LINES=$(wc -l < "$LATEST_ARTIFACT")
  echo "- Open change artifact: $LATEST_ARTIFACT ($LINES lines)"
else
  echo "- No change artifact found under .factory/changes/ (trivial change, or none started)."
fi

BASE_BRANCH="main"
CHANGED_FILES="$(git diff --name-only "$(git merge-base HEAD "origin/$BASE_BRANCH" 2>/dev/null || echo "$BASE_BRANCH")" 2>/dev/null || true)"
if [ -z "$CHANGED_FILES" ]; then
  CHANGED_FILES="$(git diff --name-only HEAD 2>/dev/null || true)"
fi

if [ -n "$CHANGED_FILES" ]; then
  echo "- Files changed on this branch:"
  echo "$CHANGED_FILES" | sed 's/^/  - /'
else
  echo "- No files changed yet on this branch."
fi

if [ -d .claude/rules ] && [ -n "$CHANGED_FILES" ]; then
  MATCHED_RULES=""
  for rule in .claude/rules/*.md; do
    [ -f "$rule" ] || continue
    # First line is: <!-- paths: glob1, glob2, ... -->
    PATHLINE="$(head -1 "$rule")"
    PATHS="$(echo "$PATHLINE" | sed -n 's/^<!-- paths: \(.*\) -->$/\1/p' | tr ',' '\n' | sed 's/^ *//;s/ *$//')"
    [ -z "$PATHS" ] && continue
    while IFS= read -r f; do
      [ -z "$f" ] && continue
      while IFS= read -r pat; do
        [ -z "$pat" ] && continue
        case "$f" in
          $pat) MATCHED_RULES="$MATCHED_RULES $rule" ;;
        esac
      done <<< "$PATHS"
    done <<< "$CHANGED_FILES"
  done
  MATCHED_RULES="$(echo "$MATCHED_RULES" | tr ' ' '\n' | sort -u | grep -v '^$' || true)"
  if [ -n "$MATCHED_RULES" ]; then
    echo "- Rule files governing the changed paths (re-read these):"
    echo "$MATCHED_RULES" | sed 's/^/  - /'
  fi
fi

echo "- Full current facts: .factory/DECISIONS.md"
