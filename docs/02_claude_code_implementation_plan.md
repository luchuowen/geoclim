# GeoClim East Africa — Claude Code Implementation Plan
Prepared by NAVAC Global · September 2026

This is the master build strategy: stack, repository structure, and the session/branch model that lets multiple Claude Code sessions build in parallel without touching the same files. It sits above the individual session prompts (`session-0` through `session-6`) — read this first, then hand each session prompt to its own Claude Code session in the order and grouping specified below.

**Scope boundary for this phase**: this plan produces a locally-buildable, production-ready static Next.js site with all 21 routes, the full design system, and placeholder-correct content per the Content Architecture spec. It does **not** provision Firestore, GCP, or any live infrastructure, and does not deploy anywhere — that is an explicit, separate Phase 2 once Owen confirms this build is approved. Session 6 ends at "verified production build," not "live URL."

---

## 1. Stack decision

**Framework**: Next.js 14 (App Router), TypeScript, static export (`output: 'export'`) where routes allow, or standalone Node output if Owen wants the eventual Cloud Run path kept open — recommend static export for this phase since there is no dynamic data source yet; switching to standalone later is a config change, not a rewrite.

**Styling**: the design system ships as **hand-authored CSS**, ported near-verbatim from the approved HTML mockup (`geoclim_spatial_register.html`) — not re-derived in Tailwind. The mockup is the client-approved pixel reference; translating it into utility classes introduces drift risk for no real benefit at this site's size (21 routes, one shared component set). CSS is organised as:
- `styles/tokens.css` — the `:root` custom properties, verbatim from the mockup.
- `styles/base.css` — resets, typography, `.wrap`, `.hairline`, `.eyebrow`, section rhythm.
- `styles/components/*.css` — one file per shared component (`nav.css`, `buttons.css`, `data-panel.css`, `sector-card.css`, `module-row.css`, `proof-item.css`, `footer.css`, `mobile-sheet.css`).
- Page-specific CSS lives beside its page as a CSS Module only where a page has genuinely unique layout (most pages compose entirely from shared components and need none).

**Fonts**: Google Fonts `<link>` in `app/layout.tsx` head — Crimson Pro (500/600/700), Inter (400/500/600/700), IBM Plex Mono (400/500/600) — exactly as locked.

**SVG devices**: the mockup's imperative JS (`buildWireGlobe`, `buildDataPanel`, `mulberry32`, `blobPath`) is ported to a pure, deterministic TypeScript module (`lib/svg-devices.ts`) that returns path/element data, consumed by two React components (`components/ui/WireGlobe.tsx`, `components/ui/DataPanel.tsx`) that render real `<svg>` JSX — not `dangerouslySetInnerHTML`, and not a `useEffect` DOM-mutation port. This makes both devices SSR-safe and keeps them server components (no client JS needed for static shapes).

**Content model**: every content type (Sector, PlatformModule, ProofEntry, Region, Company section) is defined as a TypeScript interface in `content/types.ts`, with real data in `content/*.ts` as typed arrays/objects — shaped so that each object maps 1:1 to a future Firestore document (an `id` field, flat-ish structure, no framework-specific types inside the data). This is the "structured for Firestore from day one" principle from the Discovery dossier (§9, principle 6): swapping a static import for a Firestore read later is a data-source change, not a schema redesign. **No Firestore SDK, GCP project, or credentials are touched in this phase** — this is a code-shape discipline only.

**Forms** (`/contact`): render fully, submit to a placeholder handler (a local API route that logs and returns success, or a `mailto:` fallback) — clearly marked in code with a `// TODO(phase-2): wire to real form handler` comment. No email service is integrated in this phase.

**Repo structure**:
```
/app
  layout.tsx                 (Session 0)
  globals.css → imports styles/*  (Session 0)
  page.tsx                   (Session 1 — Home)
  /sectors
    page.tsx, /[slug]/page.tsx        (Session 2)
  /platform
    page.tsx, /[slug]/page.tsx        (Session 3)
  /proof/page.tsx                     (Session 4)
  /company
    page.tsx
    /leadership/page.tsx
    /partnerships/page.tsx
    /where-we-work/page.tsx
    /governance-and-trust/page.tsx    (Session 5)
  /insights/page.tsx                  (Session 5)
  /contact/page.tsx                   (Session 5)
/components
  /nav, /footer, /ui  (Session 0)
  /home  (Session 1)
  /sectors  (Session 2)
  /platform  (Session 3)
  /proof, /regions  (Session 4)
  /company, /contact  (Session 5)
/content
  types.ts  (Session 0)
  home.ts  (Session 1)
  sectors.ts  (Session 2)
  platform.ts  (Session 3)
  proof.ts, regions.ts  (Session 4)
  company.ts, insights.ts  (Session 5)
/lib
  svg-devices.ts  (Session 0)
/styles
  tokens.css, base.css, /components  (Session 0)
/public/images  (populated post-hoc from the NanoBanana pack — no session blocks on this)
```

---

## 2. Session model and dependency graph

```
                    ┌──────────────┐
                    │  Session 0   │
                    │  Foundation  │
                    └──────┬───────┘
           ┌───────┬───────┼───────┬───────┐
           ▼       ▼       ▼       ▼       ▼
        Sess.1  Sess.2  Sess.3  Sess.4  Sess.5
        (Home) (Sectors)(Platform)(Proof+(Company+
                                   Regions) Insights+
                                            Contact)
           └───────┴───────┼───────┴───────┘
                            ▼
                    ┌──────────────┐
                    │  Session 6   │
                    │ Integration  │
                    │    & QA      │
                    └──────────────┘
```

**Session 0 is a hard blocker** — it must finish, be reviewed, and merged to the trunk branch before Sessions 1–5 start. Sessions 1–5 are mutually independent: each owns a fully disjoint set of files (see §1 repo structure and the per-session prompt's "Files you own" list) and can run as five parallel Claude Code sessions, each on its own git branch cut from the post-Session-0 trunk. **No two sessions ever touch the same file** — that is the conflict-prevention mechanism, not branch discipline alone. Session 6 requires all five to be complete and merged first.

## 3. Git branching model

1. `main` — protected, only Session 0 and Session 6 commit directly (Session 0 once, at the start; Session 6 once, at the end, after merging 1–5).
2. `feat/foundation` — Session 0's branch. Merges to `main` when its own acceptance criteria (see `session-0-foundation.md`) pass.
3. `feat/home`, `feat/sectors`, `feat/platform`, `feat/proof-regions`, `feat/company-contact` — Sessions 1–5, each branched from `main` **after** `feat/foundation` merges. Each merges back to `main` independently (order among 1–5 doesn't matter, since they touch disjoint files — merges should be conflict-free by construction).
4. `feat/integration-qa` — Session 6, branched from `main` after all five feature branches are merged. This is where cross-cutting fixes happen (e.g. a nav link that assumed a route slug Session 2 changed) — deliberately isolated so integration fixes don't get tangled with any single page's feature work.

If a session discovers it needs to touch a file outside its owned list (e.g. Session 3 needs a new shared UI primitive), it stops and flags this rather than editing the shared file — that change goes back to Session 0's owned files and either waits for Session 0 to be reopened, or is queued as a Session 6 integration task. This rule is what actually prevents conflicts; the file-ownership list is the enforcement mechanism, not a suggestion.

## 4. Session budget

Each session prompt is scoped to 1–5 routes plus their supporting content/components — comfortably inside a 250K-token session even accounting for full file reads, several edit/verify cycles, and a final self-check. Session 0 is the largest (whole design-system port) and should still land well under budget since it is porting already-finished, approved CSS/SVG logic rather than designing from scratch.

## 5. What each session is handed

Every session prompt (see the six `session-*.md` files) is fully self-contained: it does not assume the Claude Code session has any memory of this conversation, the dossier, or the mockup. Each prompt includes:
- A short context recap (what GeoClim is, what this build is, where this session fits).
- The exact list of files it owns and must create/edit, and an explicit "do not touch" list of shared files.
- The relevant slice of the Content Architecture spec, inlined (not just referenced) so the session isn't blocked on a file it might not have.
- Design-token and component-reuse instructions (import from Session 0's output, never redefine).
- Acceptance criteria to self-check against before declaring done.

## 6. Integration & verification stage (Session 6)

See `07_integration_and_verification.md` for the full checklist. Summary: merge all five branches into `main`, resolve any cross-links (nav hrefs, related-sector/module links) against the routes as actually built, run a full responsive pass (400 / 768 / 1440px), an accessibility pass (axe or equivalent — contrast, focus states, alt text, keyboard nav), a Lighthouse performance pass, and a content-evidence audit against the Content Architecture spec's tagging (nothing unmarked that should carry a status marker). Session 6 produces a verified production build and a short punch-list of anything deferred to Phase 2 — it does not deploy.
