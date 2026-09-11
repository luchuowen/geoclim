# Claude Code Session 2 — Sectors

## Context
You are building the Sectors section of **GeoClim East Africa**'s new marketing site (agency: NAVAC Global). The design system and shared components (nav, footer, buttons, `DataPanel`) already exist in this repo — **do not redefine or edit any of them**. This session builds the sector hub page and the six individual sector pages.

GeoClim is a Nairobi-based geospatial intelligence / AI / GIS company. It serves six sectors. Content below is the client-approved content plan (evidence-tiered: `[A]` verified, `[B]` reasonable inference, `[C]` needs client confirmation — nothing tagged `[C]` should be presented as a bare claim; where you need to write expanded prose beyond what's given, keep it in the same register and do not invent specific numbers, client names, or outcomes).

## Sector data (write this into `content/sectors.ts`)

| id / slug | Name `[A]` | Buyer tags | Problem framing `[B]` (expand to 2–3 sentences, don't invent specifics) |
|---|---|---|---|
| `agriculture-food-systems` | Agriculture & Food Systems | ENTERPRISE, NGO | Producers and agribusiness plan a season on incomplete information; yield and water risk are visible only after the fact. |
| `utilities-infrastructure` | Utilities & Infrastructure | UTILITY, ENTERPRISE | Power, water and transport operators manage assets across wide, hard-to-survey territory, with loss and failure often discovered late. |
| `government-public-sector` | Government & Public Sector | GOVERNMENT | Land, planning and service-delivery decisions need procurement-grade, auditable data — not slide-deck claims. |
| `climate-environment` | Climate & Environment | NGO, GOVERNMENT | Land, water and forest change needs continuous monitoring, not periodic surveys, to support real intervention. |
| `insurance-risk` | Insurance & Risk | ENTERPRISE | Underwriters and claims teams price and settle risk against assumption, not ground-truth. |
| `transport-logistics` | Transport & Logistics | ENTERPRISE, GOVERNMENT | Corridor and congestion problems are managed reactively because the region-wide picture doesn't exist in one place. |

Sector card one-liners (for the hub grid — these are already client-approved, use verbatim, sourced from `reference/geoclim_spatial_register.html`):
- Agriculture: "Crop and land monitoring that helps producers and agribusiness plan a season with real information, not guesswork."
- Utilities: "Asset and network intelligence for power, water and transport operators managing risk across wide territory."
- Government: "Land, planning and service-delivery data structured for procurement-grade transparency and accountability."
- Climate: "Change detection for water, forest and land resources — built to support monitoring, not just mapping."
- Insurance: "Location-based risk data that gives underwriters and claims teams ground-truth instead of assumption."
- Transport: "Route, corridor and congestion intelligence for organisations moving people and goods across the region."

Sector ↔ platform module relevance (for each sector page's "Relevant platform module(s)" section — reference by code, actual module content belongs to Session 3 and may not exist yet; link by slug and show the code/name only):
- Agriculture → SMART GIS (`real-time-gis`), MNA (`maps-and-apps`)
- Utilities → PSIM (`incident-emergency-management`), PBPM (`geo-enabled-workflow`)
- Government → PSIM (`incident-emergency-management`), PBPM (`geo-enabled-workflow`)
- Climate → SMART GIS (`real-time-gis`)
- Insurance → SMART GIS (`real-time-gis`), MNA (`maps-and-apps`)
- Transport → MNA (`maps-and-apps`), ROCKEYE (`rockeye`)

## What this session builds
1. `content/sectors.ts` — typed array of all six sectors conforming to the `Sector` interface in `content/types.ts`, including the data above (slug, name, buyer tags, problem framing, card one-liner, related module slugs).
2. `app/sectors/page.tsx` — the hub page: eyebrow + heading, one intro paragraph ("Most organisations know their problem before they know a product name. Start with yours." — or your own close variant in the same register), the six-card grid (reuse the sector-card visual pattern from the reference file's `.sector-grid`/`.sector-card` CSS, which is already ported into `styles/components/` by Session 0 — check for a `sector-card.css` file; if it doesn't exist, add it as a new file under `styles/components/` rather than editing an existing foundation CSS file).
3. `app/sectors/[slug]/page.tsx` — the sector page template, statically generated for all six slugs (`generateStaticParams`), following this structure exactly:
   1. Header — sector name + problem statement, no stock image, wash background only (reuse the hero wash gradient class from foundation CSS).
   2. The problem — 2–3 sentences from the framing above.
   3. GeoClim's approach — how geospatial + AI capability addresses it, plain language first.
   4. Relevant platform module(s) — chips linking to `/platform/[slug]`, using the mapping above.
   5. One `<DataPanel/>` — sector-specific caption (invent a plausible region + data-type caption in the same style as the reference file's "Turkana County — seasonal vegetation index", status `ILLUS.`).
   6. An `<img>` slot for a documentary photograph, `src="/images/sector-{slug}-01.jpg"`, with a descriptive `alt` — the actual image file does not exist yet (it ships via the NanoBanana image pack); use a neutral placeholder background colour (`var(--panel)`) sized to the image's intended aspect ratio so the layout is correct once the real file lands.
   7. Proof status — an honest "No verified engagement in this sector yet" state (mono status-marker style, not an apology) unless you're told otherwise.
   8. CTA band (import the shared `CtaBand` component if Session 1 has already created `components/ui/CtaBand.tsx`; if it doesn't exist yet, build a minimal local version in `components/sectors/SectorCtaBand.tsx` rather than creating the shared file yourself).
4. `components/sectors/SectorCard.tsx`, `components/sectors/SectorHeader.tsx`, `components/sectors/ModuleChip.tsx` — presentational components.

## Files you own
`app/sectors/**`, `content/sectors.ts`, `components/sectors/**`, and (only if not already present) `styles/components/sector-card.css`.

## Files you must NOT touch
`components/nav/**`, `components/footer/**`, `app/layout.tsx`, `content/types.ts`, `content/platform.ts` (Session 3 owns it — link to `/platform/[slug]` by slug string only, don't import its content), any other session's files.

## Acceptance criteria
- [ ] `/sectors` renders the hub with all six cards.
- [ ] All six `/sectors/[slug]` pages render statically with the correct problem framing, module links, data panel, image slot, and CTA.
- [ ] Image slots use the exact filename convention `/images/sector-{slug}-01.jpg` so the NanoBanana asset pack drops in without a code change.
- [ ] No `[C]`-tier proof claim is stated as fact anywhere on these pages.
