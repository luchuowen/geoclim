# Claude Code Session 3 — Platform

## Context
You are building the Platform section of **GeoClim East Africa**'s new marketing site (agency: NAVAC Global). The design system and shared components (nav, footer, buttons, `DataPanel`) already exist in this repo — **do not redefine or edit any of them**. This session builds the platform hub page and the five individual module pages.

GeoClim's real, differentiating platform stack is **Penta-B** (four modules: MNA, PBPM, SMART GIS, PSIM) plus **RockEye ERP** — `[A]`, verified in the client's Company Profile, currently entirely absent from their live website. Whether the Penta-B/RockEye partnership is current and exclusive is `[C]` — do not claim exclusivity anywhere.

## Module data (write this into `content/platform.ts`)

| id / slug | Code | Name `[A]` | One-sentence outcome `[A]`, verbatim from the approved mockup |
|---|---|---|---|
| `maps-and-apps` | MNA | Maps & Apps | Field-ready mapping tools that put accurate, current spatial data directly into the hands of the teams making decisions. |
| `geo-enabled-workflow` | PBPM | Geo-enabled workflow | Business processes anchored to location — approvals, inspections and operations routed by where they actually happen. |
| `real-time-gis` | SMART GIS | Real-time mapping | Live geographic infrastructure that updates as conditions on the ground change, not on a quarterly refresh cycle. |
| `incident-emergency-management` | PSIM | Incident & emergency management | A single operating picture for response teams — coordinating people, assets and geography during an incident in real time. |
| `rockeye` | ROCKEYE | AI-powered operations intelligence | RockEye ERP applies AI to workflow automation, asset tracking and predictive maintenance across an organisation's operations. |

Related sectors per module (for each module page's "Related sectors" chips — link by slug, Session 2 owns the actual sector content):
- MNA → `agriculture-food-systems`, `insurance-risk`, `transport-logistics`
- PBPM → `utilities-infrastructure`, `government-public-sector`
- SMART GIS → `agriculture-food-systems`, `climate-environment`, `insurance-risk`
- PSIM → `utilities-infrastructure`, `government-public-sector`
- ROCKEYE → `transport-logistics`

"How it fits the platform" one-liners (write these — keep to one sentence each, in the same plain register as the outcome sentences above, no invented specifics):
- MNA: the entry point — where field data becomes usable maps for everyone else in the stack.
- PBPM: where MNA's data becomes routed, trackable process.
- SMART GIS: the live layer underneath the other four — always current, not a periodic export.
- PSIM: where PBPM manages routine workflow, PSIM manages the moment something goes wrong.
- ROCKEYE: the operations layer above the other four — turning geospatial data into asset and workflow intelligence.

## What this session builds
1. `content/platform.ts` — typed array of all five modules conforming to the `PlatformModule` interface in `content/types.ts`.
2. `app/platform/page.tsx` — the hub page: eyebrow + "One platform, five capabilities." heading, the five-module list (reuse the `.module-row`/`.module-code` visual pattern from `styles/components/` — port it from the reference file into a new `module-row.css` if Session 0 didn't already create one), one framing paragraph on Penta-B + RockEye as GeoClim's own stack (careful, non-exclusive phrasing per the `[C]` note above).
3. `app/platform/[slug]/page.tsx` — the module page template, statically generated for all five slugs:
   1. Header — mono code + module name + one-sentence outcome.
   2. What it does — 2–3 sentence plain-language expansion (write this; translate the technical function into the business outcome in the same breath, per GeoClim's content principle — no invented client examples).
   3. One `<DataPanel/>` demonstrating the module in a representative scenario (invent a plausible caption in the reference file's style, status `ILLUS.`).
   4. How it fits the platform — the one-liner from the table above.
   5. Related sectors — chips linking to `/sectors/[slug]` using the mapping above.
   6. CTA band (reuse the shared `CtaBand` component if it exists at `components/ui/CtaBand.tsx` by the time you run; otherwise build a minimal local version and do not create the shared file yourself).
4. `components/platform/ModuleRow.tsx`, `components/platform/ModuleHeader.tsx`, `components/platform/SectorChip.tsx` — presentational components.

## Files you own
`app/platform/**`, `content/platform.ts`, `components/platform/**`, and (only if not already present) `styles/components/module-row.css`.

## Files you must NOT touch
`components/nav/**`, `components/footer/**`, `app/layout.tsx`, `content/types.ts`, `content/sectors.ts` (Session 2 owns it — link by slug string only), any other session's files.

## Acceptance criteria
- [ ] `/platform` renders the hub with all five modules and the framing paragraph.
- [ ] All five `/platform/[slug]` pages render statically with correct outcome copy, data panel, fit-statement, related-sector chips, and CTA.
- [ ] No claim of exclusivity or currency of the Penta-B/RockEye partnership appears anywhere.
