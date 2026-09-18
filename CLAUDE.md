# GeoClim East Africa website — agent rules (factory v2.1)

## Commands
- verify quick: `bash scripts/factory-check.sh quick` · full: `bash scripts/factory-check.sh full`
- dev: `npm run dev` · build: `npm run build` (must succeed, zero type errors) · lint: `npm run lint`
- No test runner is installed — `full` = gates + lint + typecheck + `next build`. See `.factory/DECISIONS.md`.

## Loop
1. `/change <slug>` sizes the work and opens `.factory/changes/…` (trivial = no artifact).
2. Critical paths (`.factory/manifest.json#critical_paths`: `app/api/**`, `next.config.js`,
   `package.json`, `package-lock.json`, `tsconfig.json`) → plan mode, `/effort high`,
   `build-config-review` agent alongside `reviewer`.
3. Build. The Stop hook runs the quick gate; a red gate is a blocker, not a note.
4. `/verify` before claiming done; `/ship` to learn, commit, push, open the PR. Agents never merge.

## Working style
- Scope = the ask: pre-existing bugs and nearby cleanups go in the summary as follow-ups, not the diff.
- Tests sized like their neighbours; scratch checks are not new test files.
- Batch every read/search/command that does not depend on another's result into one response.
- Own the whole mission: the owner is usually not watching; never ask permission for work already
  requested; end the turn only when done or blocked on input only the owner has.
- Never edit a file outside the current session's owned list — see `.claude/rules/file-ownership.md`.

## Invariants without a mechanical check
- Port every visual value from `reference/geoclim_spatial_register.html` exactly — never reinterpret a
  color, spacing, or radius (`.claude/rules/design-tokens.md`; the file itself is hook-protected).
- Every `[C]`-tagged claim ships with a visible `StatusMarker`, or it doesn't ship
  (`.claude/rules/content-discipline.md`).
- Never invent leadership bios, partners beyond Penta-B/RockEye, certifications, or a Government SLA
  commitment — see `.claude/rules/content-discipline.md` for the full never-do list.
- SVG devices (`WireGlobe`, `DataPanel`, `lib/svg-devices.ts`) stay pure TS/React — no
  `dangerouslySetInnerHTML`, no DOM-mutating `useEffect` (gated, but verify on critical-path changes).
- 21 routes this phase, no per-country pages — full sitemap in `docs/01` §1.

## Memory
- `.factory/DECISIONS.md` is current truth; read it before assuming something is unbuilt or undecided.
- `/ship` appends what was learned; `factory-check gates` fails when it exceeds its cap → compact into
  `.factory/history/`.
- After `/compact`/resume the SessionStart hook names the rule files to re-read; skills re-load by name.
- Full spec still lives in `docs/01`–`docs/11`; this file and `.claude/rules/**` are the compressed,
  load-bearing summary, not a replacement for the docs when you need the full prose.
