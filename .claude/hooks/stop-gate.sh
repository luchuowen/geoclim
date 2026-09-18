#!/usr/bin/env bash
# Stop hook. If tracked source changed since the last green run, runs
# `factory-check quick` and blocks (exit 2, output attached) on failure.
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

INPUT="$(cat)"
STOP_HOOK_ACTIVE="$(jq -r '.stop_hook_active // false' <<<"$INPUT" 2>/dev/null || echo false)"
[ "$STOP_HOOK_ACTIVE" = "true" ] && exit 0

STATE_FILE=".factory/.stop-gate-state"
MANIFEST=".factory/manifest.json"
[ -f "$MANIFEST" ] || exit 0

# Hash of the working tree restricted to source_globs (tracked + untracked).
GLOBS="$(jq -r '.source_globs[]? // empty' "$MANIFEST")"
CURRENT_HASH="$( { git status --porcelain -- $GLOBS 2>/dev/null; git diff -- $GLOBS 2>/dev/null; } | sha256sum | cut -d' ' -f1 )"

if [ -f "$STATE_FILE" ]; then
  LAST_HASH="$(head -1 "$STATE_FILE" 2>/dev/null || true)"
  LAST_RESULT="$(sed -n '2p' "$STATE_FILE" 2>/dev/null || true)"
  if [ "$CURRENT_HASH" = "$LAST_HASH" ] && [ "$LAST_RESULT" = "pass" ]; then
    exit 0
  fi
fi

OUTPUT="$(bash scripts/factory-check.sh quick 2>&1)"
STATUS=$?

mkdir -p .factory
if [ "$STATUS" -eq 0 ]; then
  printf '%s\npass\n' "$CURRENT_HASH" > "$STATE_FILE"
  exit 0
else
  printf '%s\nfail\n' "$CURRENT_HASH" > "$STATE_FILE"
  echo "$OUTPUT" >&2
  exit 2
fi
