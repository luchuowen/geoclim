# Claude Code Session 0 — Foundation & Design System

## Context
You are building the new marketing website for **GeoClim East Africa**, a Nairobi-based geospatial intelligence / AI / GIS consulting company, for their agency **NAVAC Global**. The visual design has already been fully approved by the client — your job in this session is not to design anything, but to faithfully port an already-approved HTML/CSS reference mockup into a real Next.js codebase as a reusable foundation that five other sessions will build pages on top of.

A reference file is included in this repo at `reference/geoclim_spatial_register.html`. It is a single-file HTML mockup containing the complete, client-approved design system: colour tokens, typography, spacing, the nav (with mega-menus), footer, buttons, cards, and two custom SVG devices (a wireframe globe and an annotated data panel). **Treat this file as the literal source of truth for every visual value** — colours, font sizes, spacing, border-radii, breakpoints. Do not reinterpret or "improve" any value; port it exactly.

## What this session builds
A working Next.js 14 (App Router, TypeScript) project with:
1. Project scaffold (`package.json`, `next.config.js`, `tsconfig.json`, ESLint/Prettier config).
2. `app/layout.tsx` — root layout: HTML lang, Google Fonts `<link>` tags for Crimson Pro (500/600/700), Inter (400/500/600/700), IBM Plex Mono (400/500/600), and `<link rel="stylesheet">`/import for the global CSS.
3. `styles/tokens.css` — the exact `:root` custom properties from the reference file's `<style>` block (`--ground`, `--wash`, `--wash-rose`, `--panel`, `--ink`, `--muted`, `--hairline`, `--accent`, `--accent-soft`, `--ink-on-accent`, `--display`, `--body`, `--mono`, `--max-w`, `--gutter`, plus the responsive `--gutter` overrides at 900px/520px).
4. `styles/base.css` — resets, `body`/`h1`/`h2`/`h3`/`p`/`a` base rules, `.wrap`, `.hairline`, `section`, `.eyebrow`, `.mono` — ported verbatim.
5. `styles/components/nav.css`, `buttons.css`, `mobile-sheet.css`, `data-panel.css`, `footer.css` — one file per component, each containing exactly the relevant CSS block(s) from the reference file (`.nav-shell`, `.site-nav`, `.nav-links`, `.nav-item`, `.dropdown`, `.dd-*`, `.btn*`, `.mobile-sheet`, `.ms-*`, `.data-panel`, `footer`, `.foot-*`).
6. `components/nav/Nav.tsx` — React port of the reference file's nav markup (wordmark, mega-menu dropdowns for Sectors/Platform/Company, plain links for Proof/Insights, "Request a Briefing" CTA button, mobile burger). Sectors dropdown, Platform dropdown and the mobile sheet's link list must pull their items from `content/sectors.ts` / `content/platform.ts` **once those files exist** — for this session, since those files don't exist yet, hard-code the same six sector names / five module names/codes exactly as they appear in the reference file, with a `// TODO: import from content/sectors.ts once Session 2 lands` comment. Do the same for Platform. This avoids Session 0 blocking on Sessions 2/3, while making the eventual wiring obvious.
7. `components/nav/MobileSheet.tsx` — the full-height near-black overlay sheet, ported from the reference file, with open/close state as a small client component (`"use client"`), scroll-lock on open, Escape-to-close.
8. Scroll-solid nav behaviour — port as a small client hook (`useScrollSolid` or inline in `Nav.tsx`) toggling a `scrolled` class, matching the reference file's JS exactly (`window.scrollY > 8`).
9. `components/footer/Footer.tsx` — four-column footer, ported from the reference file's footer markup. Column 2/3/4 links should point at the real routes this site will have (`/sectors`, `/platform`, `/proof`, `/company`, `/company/where-we-work`, `/contact`) rather than the mockup's placeholder `#` anchors.
10. `components/ui/Button.tsx` — primary/secondary button component, props for `variant`, `href` (renders as Next.js `<Link>` when internal).
11. `components/ui/Pill.tsx` — the hero pill-tag component (icon + label).
12. `components/ui/DataPanel.tsx` — a pure React/SSR-safe port of the reference file's `buildDataPanel()` function. Do not use `useEffect` + imperative DOM manipulation; instead port `mulberry32`/`blobPath` into `lib/svg-devices.ts` as pure functions that return path-data strings, and have `DataPanel.tsx` call them at render time and output real `<svg>` JSX. Props: `seed: number`, `caption: string`, `status: 'ILLUS.' | 'VERIFIED'`, `coordLabel: string`.
13. `components/ui/WireGlobe.tsx` — same approach for `buildWireGlobe`/`buildHeroGlobe`/`buildRegionGlobe`. Since the region-globe variant plots named country nodes, design the component to accept an optional `nodes: {name: string, hub?: boolean, angle: number, dist: number}[]` prop — when omitted, render the plain hero variant (circle + lat/long lines + one traced accent path); when provided, render node markers + labels + leader lines exactly as the reference file's `buildRegionGlobe()` does.
14. `content/types.ts` — shared TypeScript interfaces: `Sector`, `PlatformModule`, `ProofEntry`, `Region`, each with an `id: string` field and a shape that would map cleanly onto a future Firestore document (flat fields, no framework-specific types). This file defines the contract Sessions 2–5 write their content against — get it right, since changing it later touches every session's files.
15. A README section (append to repo root `README.md`, create if absent) documenting: how to run (`npm run dev`), the file-ownership model (link to the master implementation plan), and a note that `reference/geoclim_spatial_register.html` is the design source of truth and should not be deleted.

## Files you own (create/edit freely)
Everything listed above: `package.json`, `next.config.js`, `tsconfig.json`, `.eslintrc*`, `app/layout.tsx`, `app/globals.css`, `styles/**`, `components/nav/**`, `components/footer/**`, `components/ui/**`, `content/types.ts`, `lib/svg-devices.ts`, `README.md`.

## Files you must NOT create
`app/page.tsx` and any other `app/**/page.tsx` route file, and any `content/*.ts` file other than `types.ts`. Those belong to Sessions 1–5. If you find yourself needing a home page to test the nav renders correctly, create a temporary `app/page.tsx` for local verification, verify visually, then **delete it before finishing** — Session 1 owns that file and must start from a clean slate.

## Acceptance criteria (check all before declaring done)
- [ ] `npm run dev` runs with no errors; the nav renders with working mega-menu hover/focus states, scroll-solid behaviour, and a working mobile sheet at a 400px viewport.
- [ ] Every colour, font, spacing and radius value matches `reference/geoclim_spatial_register.html` exactly — spot-check at least the accent colour (`#081B99`), the pill border-radius (32px), and the card radius (4px, not 8/10/14 — check the reference file precisely, some components use different radii; do not assume one radius sitewide).
- [ ] `DataPanel` and `WireGlobe` render identical-looking SVG output to the reference file at the same seed value (visually compare a screenshot of your rendered component against the reference file's rendering).
- [ ] No `app/**/page.tsx` files exist except a route you created and then deleted for local testing.
- [ ] `content/types.ts` exists and exports `Sector`, `PlatformModule`, `ProofEntry`, `Region`.
- [ ] Footer links point at real intended routes, not `#`.
