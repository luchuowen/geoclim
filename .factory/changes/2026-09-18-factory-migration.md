# 2026-09-18 — factory-migration

Size: standard (repo-wide scaffolding, but touches no `critical_paths`)

## Intent
- Ask: "Update the environment using the new playbook" — install the
  Software Factory Playbook v2.1.0 (uploaded by the user) onto this repo,
  which currently has no factory (version 0): a bare Next.js 14 scaffold
  plus Session 0 (foundation) merged to `main`, governed only by a
  200-line prose `CLAUDE.md`.
- User-visible outcome: the repo carries `.factory/`, `.claude/`
  (settings, hooks, rules, skills, agents), `scripts/factory-check.sh`,
  and `docs/Software_Factory_Playbook.md`; `CLAUDE.md` is rewritten to the
  §8 template (≤80 lines); every mechanisable rule from the old
  `CLAUDE.md` is enforced by a hook/gate instead of prose; every
  still-true fact that isn't mechanisable lives in `.factory/DECISIONS.md`
  or a path-scoped `.claude/rules/*.md`.
- Out of scope: building any of Sessions 1–6 (home/sectors/platform/proof/
  company/integration). This change only installs the factory; the
  original `CLAUDE.md` content and file-ownership model are carried over
  unchanged in substance.
- Known constraints: `main` is protected (only Session 0/6 commit
  directly); this session works on `claude/admiring-brown-nx9e0r`. No test
  runner exists in the project — `factory-check full` had to be built
  around gates + lint + typecheck + `next build` only.

## Spec
- Behaviour: `bash scripts/factory-check.sh {gates,quick,full}` all exit 0
  on a clean tree; `guard.sh` blocks edits to the protected reference
  mockup and blocks a whole-file `Write` that changes <25% of a ≥150-line
  file; `stop-gate.sh` runs the quick gate and caches on an unchanged
  source tree; `session-context.sh` prints the open artifact + changed
  files + matching rule files.
- Files touched: `.factory/**` (new), `.claude/**` (new), `scripts/factory-check.sh`
  (new), `docs/Software_Factory_Playbook.md` (new, copied from the
  uploaded file verbatim), `CLAUDE.md` (rewritten), `.gitignore` (two
  lines added for local hook state).
- Edge cases: `next.config.js`'s own explanatory comment quotes the
  literal string `output: 'export'` while explaining why it's *not* set —
  the `no-static-export` gate initially false-positived on that comment;
  fixed by stripping whole-line `//` comments before matching in
  `factory-check.sh`.
- Acceptance checks: `factory-check full` green; `guard.sh` proven against
  a protected-path edit (blocks) and a normal edit (allows); whole-file
  rewrite check proven against a synthetic ≥150-line file; `stop-gate.sh`
  and `session-context.sh` proven by piping representative tool JSON.

## Plan
1. Inspect repo (git log, file tree, package.json, tsconfig, eslintrc,
   .gitignore, README) — no `.github/workflows`, no test runner. Verified
   via `git status`/`find`/`Read`.
2. Preserve every still-true CLAUDE.md fact into `.factory/DECISIONS.md`
   (build state, stack deviations, phase boundary, conventions) and
   archive the original 200-line file verbatim to
   `.factory/history/CLAUDE.md.pre-factory.md`.
3. Mechanise: `no-static-export`, `no-firestore-yet`, `svg-devices-stay-pure`
   text gates in `manifest.json` + `factory-check.sh`; the protected
   reference mockup and the whole-file-rewrite check in `guard.sh`; the
   `claude_md_lines`/`decisions_md_lines` caps as gates.
4. Install `.claude/rules/{design-tokens,content-discipline,build-config,
   file-ownership}.md` for what remains genuinely reference (not a
   prohibition), scoped by `paths:` header so `session-context.sh` can
   surface them after compaction.
5. Install skills (`factory`, `change`, `verify`, `ship`), agents
   (`reviewer`, `build-config-review` for the critical build/contact-API
   surface, `explorer`), and `.claude/settings.json`
   (`effortLevel: medium`, deny-list for destructive git ops, allow-list
   for read-only/verification commands).
6. Rewrite `CLAUDE.md` to the §8 template.
7. Validate: `npm install`, `factory-check full`, hook smoke tests.
   Blast radius: no application code (`app/`, `components/`, `content/`,
   `styles/`, `lib/`) touched — build output confirmed unchanged (still
   the bare `/` route from the current scaffold).

## Build
- As planned; one deviation — the `no-static-export` gate needed the
  comment-stripping fix described above, caught by running `factory-check
  full` before shipping rather than assuming the first draft was correct.

## Verify + Review
- `bash scripts/factory-check.sh full` → gates PASS (5/5), typecheck PASS,
  lint PASS (pre-existing `no-page-custom-font` warning only, not
  introduced here), build PASS (`next build` succeeds, same single `/`
  route as before).
- `guard.sh`: protected-path Edit → exit 2 (blocked); normal Write → exit
  0 (allowed); synthetic 200-line file with ~1% changed lines → exit 2
  (blocked, "Use Edit").
- `stop-gate.sh`: first run computes+caches a pass hash and exits 0;
  second run on the unchanged tree short-circuits via the cache, also
  exit 0.
- `session-context.sh`: prints the open artifact, the branch's changed
  files, and (on a source-path change, not exercised by this
  scaffolding-only diff) the matching rule files.
- No `reviewer`/domain-reviewer dispatch — self-reviewed inline per the
  factory's own trivial/standard/critical sizing this change doesn't need
  agent review to ship (no critical path touched, no application
  behaviour changed); the hook and gate smoke tests above are the
  adversarial check for a scaffolding change of this kind.

## Learn + Ship
- `factory-check` gates must strip `//`-comment lines before pattern
  matching, or a gate can false-positive on prose that quotes the very
  pattern it forbids while explaining the pattern is absent — recorded as
  a standing gotcha in this artifact so a future gate author doesn't
  repeat it.
- `.factory/DECISIONS.md` now carries the project's build state, stack
  deviations, and phase boundary that used to live in the 200-line
  `CLAUDE.md` prose.
- Commit / PR: committed on `claude/admiring-brown-nx9e0r`; no PR opened
  (not requested).
