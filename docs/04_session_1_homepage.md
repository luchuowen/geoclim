# Claude Code Session 1 — Homepage

## Context
You are building the homepage for **GeoClim East Africa**'s new marketing site, an agency project by **NAVAC Global**. The design system and shared components (nav, footer, buttons, `DataPanel`, `WireGlobe`) already exist in this repo, built by a prior session — **do not redefine or edit any of them**. Your job is to assemble the homepage from those existing pieces plus new, homepage-only content and components.

A reference file at `reference/geoclim_spatial_register.html` shows the complete, client-approved design for this exact page (everything below the nav/footer, which are already built). Treat its hero, thesis, platform, "See it. Understand it. Act on it.", sectors, proof, regional-presence, and CTA sections as the literal content and layout source of truth for this session.

## What this session builds
1. `content/home.ts` — typed content for the homepage (hero copy, thesis statement, "see/understand/act" panel captions, CTA band copy) conforming to any relevant shared types in `content/types.ts`. Hero and section copy should be pulled verbatim from the reference file (it is already client-approved copy, evidence-tier `[A]`/`[B]` per the Content Architecture spec — do not rewrite it).
2. `app/page.tsx` — the homepage route, composing: Hero, Thesis, Platform summary (five module rows — this section may inline five entries directly, or, if `content/platform.ts` already exists by the time you run, import from it; if it doesn't exist yet, hard-code the five modules' code/name/one-liner exactly as in the reference file), "See it. Understand it. Act on it." (three `<DataPanel/>` instances using the shared component), Sectors preview (six cards — same rule: import from `content/sectors.ts` if present, else hard-code from the reference file), Proof preview (three entries with status markers), Where We Work (`<WireGlobe/>` with the ten-country `nodes` prop), CTA band.
3. `components/home/Hero.tsx`, `components/home/Thesis.tsx`, `components/home/SectorsPreview.tsx`, `components/home/ProofPreview.tsx`, `components/home/RegionSummary.tsx`, `components/home/CtaBand.tsx` — homepage-only presentational components. `CtaBand` is written here first since Sessions 2 and 3 will need an equivalent band at the foot of their pages — if you build it well and generically (segmented buttons, configurable heading), consider whether it belongs in `components/ui/` instead of `components/home/`. If you move it, note that clearly in your summary so Session 0's shared-component list is understood to include it — but do not edit any Session-0-owned file to do so; place it under `components/ui/CtaBand.tsx` and treat it as a new shared component you are contributing, not an edit to existing foundation files.
4. Country-node coordinates for `<WireGlobe/>`: port the exact `angle`/`dist` values from the reference file's `buildRegionGlobe()` function for all ten countries (Kenya as hub, then Uganda, Tanzania, Rwanda, Ethiopia, Zambia, Malawi, DRC, Mozambique, Zimbabwe) — these were hand-tuned for visual balance and should not be recalculated.

## Files you own
`app/page.tsx`, `content/home.ts`, `components/home/**`, and (per the note above) optionally `components/ui/CtaBand.tsx` if you choose to place it there.

## Files you must NOT touch
Anything under `components/nav/`, `components/footer/`, `styles/`, `app/layout.tsx`, `content/types.ts`, `lib/svg-devices.ts`, or any other session's `content/*.ts` or route files. If the homepage needs a sector or module list and the corresponding content file doesn't exist yet, hard-code the needed values locally in `content/home.ts` rather than creating `content/sectors.ts` or `content/platform.ts` yourself — those files belong to Sessions 2 and 3, and creating them here will conflict when their branches merge.

## Acceptance criteria
- [ ] `/` renders all nine sections in the order specified, visually matching the reference file at 1440px, 768px and 400px viewports.
- [ ] All copy matches the reference file's homepage content (or is clearly marked with a `// TODO` where you had to approximate because a downstream content file didn't exist yet).
- [ ] No shared/foundation files were edited.
- [ ] The regional globe shows all ten countries with correct labels and the Nairobi hub marked distinctly.
