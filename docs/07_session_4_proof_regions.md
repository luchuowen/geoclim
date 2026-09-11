# Claude Code Session 4 — Proof & Regional Presence

## Context
You are building the Proof page and the Regional Presence ("Where We Work") page for **GeoClim East Africa**'s new marketing site (agency: NAVAC Global). The design system and shared components (nav, footer, buttons, `WireGlobe`) already exist in this repo — **do not redefine or edit any of them**.

GeoClim's honesty device is its single most important piece of brand differentiation: **every proof point carries a visible status marker** (`VERIFIED` or `ILLUSTRATIVE · PENDING CONFIRMATION`) rather than presenting unverified numbers as fact. Currently **no engagement has real, client-confirmed detail** — all three seed entries below are illustrative and must ship marked as such. Do not soften, hide, or shrink these markers — they are a deliberate, client-approved design decision, not a legal caveat to be minimised.

GeoClim's regional footprint is ten countries, `[A]` verified in the Company Profile: Kenya (HQ, Nairobi), Uganda, Tanzania, Rwanda, Ethiopia, Zambia, Malawi, DRC, Mozambique, Zimbabwe. What "operation" means per non-Kenya country is `[C]` — not yet confirmed — so copy must say "regional footprint," never imply equal delivery depth in all ten.

## Proof data (write into `content/proof.ts`)

| Sector tag | Copy (verbatim, already approved) | Status |
|---|---|---|
| AGRICULTURE | Crop-yield monitoring across a multi-county precision-agriculture engagement. | ILLUSTRATIVE · PENDING CONFIRMATION |
| UTILITIES | Water-network loss mapping supporting an infrastructure operator's reduction programme. | ILLUSTRATIVE · PENDING CONFIRMATION |
| TRANSPORT | Corridor congestion analysis informing a regional transport-planning study. | ILLUSTRATIVE · PENDING CONFIRMATION |

## Region data (write into `content/regions.ts`)
Ten entries, each with `name`, `hub: boolean`, and the exact `angle`/`dist` values used by the reference mockup's `buildRegionGlobe()` (read them from `reference/geoclim_spatial_register.html`'s `COUNTRIES` array — do not recalculate, they were hand-tuned for visual balance on the globe):
Kenya (hub), Uganda, Tanzania, Rwanda, Ethiopia, Zambia, Malawi, DRC, Mozambique, Zimbabwe.

## What this session builds
1. `content/proof.ts` — typed array conforming to `ProofEntry` in `content/types.ts`, with the three seed entries above. Structure the type to comfortably hold future fields (`clientName?`, `fullNarrative?`, `verifiedDate?`) that stay empty until real cases exist — this is a schema decision, not something to populate now.
2. `content/regions.ts` — typed array conforming to `Region` in `content/types.ts`, the ten countries above.
3. `app/proof/page.tsx` — "Shown honestly, not oversold." header + supporting sentence (verbatim from the reference file), the explainer paragraph on the honesty device itself (write this in GeoClim's plain, first-person-plural register: *"Every engagement on this page carries a status marker. We would rather tell you plainly that a figure is illustrative than let a placeholder read as a claim."* or a close variant — do not cut this paragraph for length, it is the single most differentiating piece of copy on the site), the expanded proof list (all entries from `content/proof.ts`, each with sector tag / copy / status marker, with space reserved in the markup for a future "read the engagement" expansion once real detail exists — do not build that expansion now, just leave the structural room), CTA band.
4. `app/company/where-we-work/page.tsx` — ten-country footprint header, one paragraph honestly framing "regional footprint" (not equal-depth operation) per the `[C]` note above, the large `<WireGlobe nodes={...}/>` variant using `content/regions.ts`, mono country-list readout.
5. `components/proof/ProofItem.tsx`, `components/proof/StatusMarker.tsx` (this status-marker component should be written so it is easy for other sessions to reuse — check whether `components/ui/StatusMarker.tsx` already exists before creating it; if it doesn't, create it under `components/ui/` since it is used sitewide, not just on this page — this is a shared-component contribution, not an edit to existing foundation files, so it's fine for this session to add it), `components/regions/RegionSummary.tsx`.

## Files you own
`app/proof/**`, `app/company/where-we-work/**`, `content/proof.ts`, `content/regions.ts`, `components/proof/**`, `components/regions/**`, and (if not already present) `components/ui/StatusMarker.tsx`.

## Files you must NOT touch
`components/nav/**`, `components/footer/**`, `app/layout.tsx`, `content/types.ts`, `app/company/page.tsx` and any other `app/company/**` route (Session 5 owns the rest of Company — you own only `where-we-work`), any other session's files.

## Acceptance criteria
- [ ] `/proof` renders all three entries with visible, correctly-worded status markers and the honesty-device explainer paragraph.
- [ ] `/company/where-we-work` renders the ten-country globe with correct labels, Nairobi marked as hub, and footprint copy that does not imply equal operational depth across all ten countries.
- [ ] No proof entry anywhere in this session's output is presented without a status marker.
