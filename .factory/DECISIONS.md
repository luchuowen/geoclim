# Decisions — current truth

Read before assuming something is unbuilt. Superseded entries move to `history/`.
Cap: 250 lines (`factory-check gates` enforces it).

## Build state

- Bare Next.js 14 scaffold + **Session 0 (foundation)** are merged to `main`:
  design tokens, nav, footer, UI primitives, SVG devices. Sessions 1–6
  (`docs/02` §2–3) have not started. Do not build pages against anything
  beyond what `git log`/the file tree actually shows — verify before relying
  on the sitemap below as "already built".
- No test runner is installed (no jest/vitest/playwright). `factory-check full`
  = gates + lint + typecheck + `next build`. Add a runner only when a session
  needs one; wire it into `.factory/manifest.json.checks.test` and
  `scripts/factory-check.sh` at that point, don't add it speculatively.
- No CI workflow exists yet (`.github/workflows/` is absent). `factory-check full`
  is the whole verification surface until one is added.

## Stack deviations (docs/02, intentional — do not "fix")

- Next.js pinned to `14.2.35`, not the `14.2.15` originally installed and not
  a Next 15/16 major. Closes most 14-branch CVEs without the breaking jump.
  `npm audit` still reports advisories with no fix inside 14.x — upgrading to
  Next 16 to close them is **Owen's call**, not something to do mid-build.
- `next.config.js` deliberately omits `output: 'export'` (gated by
  `no-static-export` in the manifest) because `app/api/contact/route.ts`
  (Session 5) needs a real Next.js API route, which static export can't serve.
  If static export ever comes back, the contact form's transport has to
  change first (e.g. a third-party form endpoint).

## File ownership (docs/02 §2–3) — still the conflict-prevention model

Sessions 1–6 each own a disjoint file set and run on their own branch;
1–5 are parallel once `feat/foundation` merges, 6 runs last. This is
enforced by discipline, not a hook — the manifest's `protected` list only
covers `reference/geoclim_spatial_register.html`. Full table: `CLAUDE.md`
"Loop" step 2 links here; the source table lives in
`docs/02_claude_code_implementation_plan.md` §2–3 and in `history/CLAUDE.md.pre-factory.md`
if that doc ever drifts. Never edit a file outside the current session's
owned list — if a shared file is needed before its owning session lands,
hard-code a local fallback with `// TODO` pointing at the eventual owner file.

## Evidence discipline (docs/01, applies sitewide)

Every claim is tagged `[A]` verified / `[B]` reasonable inference / `[C]`
needs client confirmation. `[C]` never ships bare — it ships with a visible
`StatusMarker` (`VERIFIED` / `ILLUSTRATIVE · PENDING CONFIRMATION`) or it
doesn't ship. Never soften, hide, or shrink a status marker.

Never-do's (unmechanized — no lint catches these, judgment call each time):
leadership names/titles/bios/photos are never invented (`/company/leadership`
ships a placeholder); no partner beyond Penta-B/RockEye; never claim
exclusivity/current-status of the Penta-B/RockEye partnership; `/insights`
launches empty, no fabricated posts; no certification claims on
`/company/governance-and-trust`; no Government SLA/response-time commitment
on `/contact`.

## Conventions

- Image slots: `/images/{slot-name}-01.jpg`, 3:2, `var(--panel)` placeholder
  background until the real asset lands (NanoBanana pack, docs/11) — never a
  broken `<img>` or stock photo standing in.
- `app/api/contact/route.ts` validates and returns success only — no real
  email/external service. Tag with `// TODO(phase-2): wire to real form
  handler / email service`.
- Design tokens, radii-per-component, and breakpoints: see
  `.claude/rules/design-tokens.md` (loads automatically when `styles/**`,
  `components/**`, or `reference/**` are touched) — don't duplicate them here.

## Phase boundary

No Firestore, no GCP project, no live infra, no deployment this phase
(gated by `no-firestore-yet`). Ends at a green `next build`, not a live URL.
Phase 2 is gated on Owen's review.

## Learned

- 2026-09-18 — migrated the repo onto Software Factory Playbook v2.1.0.
  The pre-factory `CLAUDE.md` (200 lines) is preserved verbatim at
  `.factory/history/CLAUDE.md.pre-factory.md` for anything this file or the
  rules under `.claude/rules/` don't yet cover.
