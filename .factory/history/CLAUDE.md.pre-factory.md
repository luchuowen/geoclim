# CLAUDE.md — GeoClim East Africa website

Read this before touching any file. It exists so a fresh session can build
correctly without re-reading all of `docs/`. The full spec still lives in
`docs/01`–`docs/11`; this file is the compressed, load-bearing summary —
design tokens, ownership rules, and conventions — not a replacement for the
docs when you need the full prose.

**Source of truth for every visual value**: `reference/geoclim_spatial_register.html`.
Client-approved, single-file HTML/CSS/JS mockup. Port values exactly — do not
reinterpret or "improve" a color, spacing, or radius value. Do not delete it.

## Current state

Bare Next.js 14 scaffold only (package.json, next.config.js, tsconfig.json,
`.eslintrc.json`, a placeholder `app/layout.tsx`/`app/globals.css`/`app/page.tsx`).
**The design system has not been ported yet.** That is Session 0's job
(`docs/03_session_0_foundation.md`) and has not started. Do not build pages
against `styles/`, `components/`, or `content/types.ts` — none of it exists
yet. Check this section is still accurate before relying on it; update it as
each session lands.

## Stack decisions (docs/02, with one deviation — read this)

- **Next.js 14, App Router, TypeScript.** Pinned to `14.2.35` (latest 14.x
  patch), not `14.2.15` as originally installed — closes most known CVEs in
  the 14 branch without jumping to the Next 15/16 major, which the spec does
  not call for. `npm audit` still reports a handful of advisories with no
  fix inside the 14.x line (only closed by upgrading to Next 16, a breaking
  change) — that upgrade is a decision for Owen, not something to do
  unilaterally mid-build.
- **`next.config.js` deliberately does NOT set `output: 'export'`**, despite
  docs/02 §1 floating static export as the default recommendation. Reason:
  Session 5 (`docs/08_session_5_company_insights_contact.md`) requires a
  real Next.js API route at `app/api/contact/route.ts` for the contact form
  handler, and API routes do not work with `output: 'export'`. Default
  (Node-capable) output was chosen instead so that route is buildable
  without a later rewrite. If a future session wants static export back,
  the contact form's transport needs to change first (e.g. a third-party
  form endpoint instead of a local API route).
- Styling is hand-authored CSS ported near-verbatim from the mockup, not
  Tailwind. See docs/02 §1 for the full `styles/` file breakdown.
- Fonts: Google Fonts `<link>` tags in `app/layout.tsx` — Crimson Pro
  (500/600/700), Inter (400/500/600/700), IBM Plex Mono (400/500/600).
- SVG devices (`WireGlobe`, `DataPanel`) are pure, deterministic TS/React —
  no `dangerouslySetInnerHTML`, no `useEffect` DOM mutation. See docs/03 §13.
- Content model: every content type is a TS interface in `content/types.ts`
  with real data in `content/*.ts` typed arrays — shaped to map 1:1 onto a
  future Firestore document (`id` field, flat structure). No Firestore SDK
  or GCP credentials touched in this phase.
- 21 routes total. No per-country pages this phase (see docs/01 §1).

## Design tokens (verbatim from the reference mockup's `:root`)

```css
--ground: #FFFFFF;
--wash: #EBEDFD;
--wash-rose: #F4DCE3;
--panel: #F5F5F5;
--panel-line: #EDEDED;
--ink: #02051F;
--muted: #6E6E6E;
--muted-dim: #9A9A9A;
--hairline: #E4E4E4;
--accent: #081B99;
--accent-soft: #3448C4;
--ink-on-accent: #FFFFFF;
--display: 'Crimson Pro', Georgia, serif;
--body: 'Inter', -apple-system, sans-serif;
--mono: 'IBM Plex Mono', ui-monospace, monospace;
--max-w: 1280px;
--gutter: 96px;   /* 28px at ≤900px, 20px at ≤520px */
```

Type usage rule (checked in Session 6 QA): Crimson Pro for hero H1s only,
Inter for everything else, IBM Plex Mono for data/coordinates/status
markers. No system-font fallback as a primary face.

**Radii are per-component, not sitewide — do not assume one value:**
- Pill / button: `32px` (`border-radius:32px` on `.btn`)
- Data panel: `10px`
- Sector card grid container: `10px`
- Dropdown menu: `12px`
- Nav burger button: `8px`
- Panel coordinate readout: `3px`
- Globe panel: `14px`

Accent color spot-check value: `#081B99`. Card radius spot-check: sector
grid container is `10px` — do not default every card to `4px`; verify each
component's actual value in the reference file before porting.

Breakpoints: `900px` (nav collapses to mobile sheet below this), `760px`,
`640px`, `560px`, `520px` (gutter shrinks further). Check the reference
file's actual media queries per component — they are not all the same set.

`prefers-reduced-motion: reduce` must be respected everywhere the mockup
defines a reduced-motion fallback (scroll-reveal, hero animations, globe
rotation, count-up). Port the fallback, not just the animation.

## Sitemap (21 routes — docs/01 §1)

```
/                                          Home
/sectors                                   hub
/sectors/agriculture-food-systems
/sectors/utilities-infrastructure
/sectors/government-public-sector
/sectors/climate-environment
/sectors/insurance-risk
/sectors/transport-logistics
/platform                                  hub
/platform/maps-and-apps                    MNA
/platform/geo-enabled-workflow             PBPM
/platform/real-time-gis                    SMART GIS
/platform/incident-emergency-management    PSIM
/platform/rockeye                          RockEye ERP
/proof
/company                                   overview
/company/leadership
/company/partnerships
/company/where-we-work
/company/governance-and-trust
/insights                                  hub, launches empty
/contact
```

## File ownership (docs/02 §2–3) — the actual conflict-prevention mechanism

Each session/branch owns a disjoint file set. **Never edit a file outside
your own session's owned list** — if you need something from a shared file
that doesn't exist yet, hard-code a local fallback with a `// TODO` comment
pointing at the file that will eventually own it, per the pattern docs/03–08
already establish. If you discover you need to touch a shared file, stop and
flag it rather than editing it — that's a Session 0 or Session 6 task.

| Session | Branch | Owns |
|---|---|---|
| 0 — Foundation | `feat/foundation` | `package.json`, `next.config.js`, `tsconfig.json`, `.eslintrc*`, `app/layout.tsx`, `app/globals.css`, `styles/**`, `components/nav/**`, `components/footer/**`, `components/ui/**`, `content/types.ts`, `lib/svg-devices.ts`, `README.md` |
| 1 — Home | `feat/home` | `app/page.tsx`, `content/home.ts`, `components/home/**`, optionally `components/ui/CtaBand.tsx` |
| 2 — Sectors | `feat/sectors` | `app/sectors/**`, `content/sectors.ts`, `components/sectors/**`, `styles/components/sector-card.css` (if absent) |
| 3 — Platform | `feat/platform` | `app/platform/**`, `content/platform.ts`, `components/platform/**`, `styles/components/module-row.css` (if absent) |
| 4 — Proof + Regions | `feat/proof-regions` | `app/proof/**`, `app/company/where-we-work/**`, `content/proof.ts`, `content/regions.ts`, `components/proof/**`, `components/regions/**`, `components/ui/StatusMarker.tsx` (if absent) |
| 5 — Company/Insights/Contact | `feat/company-contact` | `app/company/page.tsx`, `app/company/leadership/**`, `app/company/partnerships/**`, `app/company/governance-and-trust/**`, `app/insights/**`, `app/contact/**`, `app/api/contact/**`, `content/company.ts`, `content/insights.ts`, `components/company/**`, `components/contact/**` |
| 6 — Integration & QA | `feat/integration-qa` | Anything, but only small targeted cross-link/QA fixes — not a rewrite of another session's page. Runs only after 1–5 are all merged. |

`main` is protected: only Session 0 (once, at the start) and Session 6
(once, at the end) commit directly to it. Sessions 1–5 are mutually
independent and can run in parallel once `feat/foundation` merges — they
touch disjoint files by construction, so merges should be conflict-free.

## Evidence / content discipline (docs/01, applies sitewide)

Every piece of copy is tagged `[A]` verified, `[B]` reasonable inference, or
`[C]` needs client confirmation. **Nothing tagged `[C]` ships as a bare
claim** — it ships with a visible status marker (`VERIFIED` /
`ILLUSTRATIVE · PENDING CONFIRMATION`, mono font, shared `StatusMarker`
component) or it doesn't ship. This is GeoClim's actual brand mechanism, not
a formatting nicety — never soften, hide, or shrink a status marker.

Specific never-do's carried from the docs:
- Never invent leadership names, titles, bios, or photos (`/company/leadership`
  ships an honest "profiles are being finalised" placeholder instead).
- Never invent partner names/logos beyond Penta-B/RockEye
  (`/company/partnerships`).
- Never claim exclusivity or current status of the Penta-B/RockEye
  partnership — that is `[C]`, unconfirmed.
- Never fabricate `/insights` blog posts — launch empty with "first pieces
  coming soon."
- Never claim a certification (ISO, data-security, etc.) on
  `/company/governance-and-trust` — none is evidenced.
- Never state a Government SLA/response-time commitment on `/contact` —
  unconfirmed.

Image slots use the exact filename convention `/images/{slot-name}-01.jpg`
(e.g. `/images/sector-agriculture-food-systems-01.jpg`,
`/images/company-about-01.jpg`) so the NanoBanana asset pack (docs/11) drops
in later with zero code change. Use a `var(--panel)` background placeholder
sized to the image's real aspect ratio (3:2) until the file exists — never a
broken `<img>` or a stock photo standing in.

## Forms

`/contact` renders fully and posts to a local `app/api/contact/route.ts`
that validates input and returns success — it does not send real email or
write to an external service. Mark it with
`// TODO(phase-2): wire to real form handler / email service`.

## What this phase explicitly does not do

No Firestore, no GCP project, no live infrastructure, no deployment. Ends at
a verified local production build (`next build` succeeding), not a live URL.
That's an explicit, separate Phase 2 gated on Owen's review.

## Commands

```
npm run dev      # local dev server
npm run build    # production build — must succeed with zero type errors
npm run lint
```
