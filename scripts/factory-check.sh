#!/usr/bin/env bash
# Single entrypoint for verification. Local hooks and CI both call this, so
# "green" means the same thing everywhere.
#
#   gates  — manifest text gates + context-budget caps            (~1s)
#   quick  — gates + incremental typecheck                        (6-16s warm)
#   full   — quick + lint + build + all guard self-checks
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

MODE="${1:-quick}"
MANIFEST=".factory/manifest.json"
FAIL=0

run_gates() {
  echo "== gates =="
  if [ ! -f "$MANIFEST" ]; then
    echo "FAIL: $MANIFEST missing"
    FAIL=1
    return
  fi

  local count
  count=$(jq '.gates | length' "$MANIFEST")
  for i in $(seq 0 $((count - 1))); do
    local name pattern desc paths
    name=$(jq -r ".gates[$i].name" "$MANIFEST")
    pattern=$(jq -r ".gates[$i].pattern" "$MANIFEST")
    desc=$(jq -r ".gates[$i].description" "$MANIFEST")
    mapfile -t paths < <(jq -r ".gates[$i].paths[]" "$MANIFEST")

    local hit=""
    for p in "${paths[@]}"; do
      # shellcheck disable=SC2086
      local matches
      matches=$(git ls-files -- $p 2>/dev/null)
      [ -z "$matches" ] && continue
      while IFS= read -r f; do
        [ -f "$f" ] || continue
        # Strip whole-line // comments so a gate can't fire on prose that
        # merely quotes the forbidden pattern while explaining why it's absent.
        if grep -v '^[[:space:]]*//' "$f" 2>/dev/null | grep -qE "$pattern"; then
          hit="$f"
          break 2
        fi
      done <<< "$matches"
    done

    if [ -n "$hit" ]; then
      echo "FAIL [$name]: forbidden pattern found in $hit — $desc"
      FAIL=1
    else
      echo "PASS [$name]"
    fi
  done

  # Context-budget caps
  local claude_cap decisions_cap claude_lines decisions_lines
  claude_cap=$(jq -r '.caps.claude_md_lines // 80' "$MANIFEST")
  decisions_cap=$(jq -r '.caps.decisions_md_lines // 250' "$MANIFEST")
  claude_lines=$(wc -l < CLAUDE.md 2>/dev/null || echo 0)
  decisions_lines=$(wc -l < .factory/DECISIONS.md 2>/dev/null || echo 0)

  if [ "$claude_lines" -gt "$claude_cap" ]; then
    echo "FAIL [claude-md-cap]: CLAUDE.md is $claude_lines lines, cap is $claude_cap — compact into DECISIONS.md"
    FAIL=1
  else
    echo "PASS [claude-md-cap] ($claude_lines/$claude_cap lines)"
  fi

  if [ "$decisions_lines" -gt "$decisions_cap" ]; then
    echo "FAIL [decisions-md-cap]: DECISIONS.md is $decisions_lines lines, cap is $decisions_cap — compact into history/"
    FAIL=1
  else
    echo "PASS [decisions-md-cap] ($decisions_lines/$decisions_cap lines)"
  fi
}

run_typecheck() {
  echo "== typecheck =="
  local cmd
  cmd=$(jq -r '.checks.typecheck' "$MANIFEST")
  mkdir -p .factory
  if eval "$cmd"; then
    echo "PASS [typecheck]"
  else
    echo "FAIL [typecheck]"
    FAIL=1
  fi
}

run_lint() {
  echo "== lint =="
  local cmd
  cmd=$(jq -r '.checks.lint' "$MANIFEST")
  if eval "$cmd"; then
    echo "PASS [lint]"
  else
    echo "FAIL [lint]"
    FAIL=1
  fi
}

run_build() {
  echo "== build =="
  local cmd
  cmd=$(jq -r '.checks.build' "$MANIFEST")
  if eval "$cmd"; then
    echo "PASS [build]"
  else
    echo "FAIL [build]"
    FAIL=1
  fi
}

case "$MODE" in
  gates)
    run_gates
    ;;
  quick)
    run_gates
    run_typecheck
    ;;
  full)
    run_gates
    run_typecheck
    run_lint
    run_build
    ;;
  *)
    echo "usage: factory-check.sh [gates|quick|full]" >&2
    exit 64
    ;;
esac

if [ "$FAIL" -ne 0 ]; then
  echo "== factory-check $MODE: FAIL =="
  exit 1
fi
echo "== factory-check $MODE: PASS =="
