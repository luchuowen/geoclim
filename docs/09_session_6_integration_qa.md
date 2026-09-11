# Claude Code Session 6 — Integration & Verification

## Context
Five prior Claude Code sessions have each built a disjoint slice of **GeoClim East Africa**'s new marketing site (agency: NAVAC Global) on their own git branches, all cut from a shared foundation (`feat/foundation`, already merged to `main`): Home, Sectors, Platform, Proof + Regional Presence, and Company + Insights + Contact. This session merges all five branches, resolves any cross-links between them, and runs the full verification pass before the build is considered production-ready. **This session does not deploy anywhere or touch Firestore/GCP** — it ends at a verified local production build.

## Step 1 — Merge
Merge `feat/home`, `feat/sectors`, `feat/platform`, `feat/proof-regions`, `feat/company-contact` into `main`, in any order (they touch disjoint files by construction, so merges should be conflict-free). If a genuine conflict appears, it means two sessions touched a file they shouldn't have — resolve by keeping the foundation/shared-component version and flagging the duplication in your final summary rather than guessing which page's version is "correct."

## Step 2 — Resolve cross-links
Several places reference routes or content by slug string before the owning session's page necessarily existed:
- Nav mega-menus (Session 0) and the homepage's sector/platform hard-coded fallbacks (Session 1) may still contain `// TODO` comments pointing at `content/sectors.ts` / `content/platform.ts` — now that both exist, wire the nav and homepage to import from them instead of the hard-coded fallback lists, and delete the fallback data.
- Sector pages link to `/platform/[slug]` and platform pages link to `/sectors/[slug]` by slug string (Sessions 2 and 3 built these independently) — verify every slug referenced on one side actually exists as a route on the other. Fix any mismatch.
- The footer's Company/Platform link columns (built in Session 0, before any of those routes existed) should be checked against the real route list and corrected if any link points at a route that ended up named differently.

## Step 3 — Full verification checklist
Work through this list and fix what fails. Do not mark a line done without actually checking it (viewport resize, keyboard nav, a real accessibility tool run — not a visual guess).

**Design-token compliance**
- [ ] Every colour used sitewide traces back to a `styles/tokens.css` variable — no hard-coded hex values snuck in by any session.
- [ ] Typography only uses Crimson Pro (hero H1s only), Inter (everything else), IBM Plex Mono (data/coordinates/status markers) — no session introduced a system-font fallback as a primary face.
- [ ] Button, card, and pill radii match the reference file's values exactly (pill: 32px: cards: 4px — verify each component individually, don't assume one radius sitewide).

**Responsive**
- [ ] Every one of the 21 routes checked at 400px, 768px, and 1440px — no horizontal scroll on the page body, nav collapses correctly to the mobile sheet below 900px, mega-menus don't appear on touch/mobile.

**Accessibility**
- [ ] Run an automated pass (axe-core or equivalent) against every route; fix contrast, missing alt text, and missing form labels it flags.
- [ ] Every image has real, descriptive alt text (not "image" or the filename) — including the sector, company, and platform image slots that are still placeholders (the alt text should describe the intended image, since it's already correct once the NanoBanana asset lands).
- [ ] Full keyboard navigation works: mega-menus open on focus (not just hover), the mobile sheet is reachable and closeable via keyboard, focus rings are visible (1px accent outline, 2px offset, per the locked design system).
- [ ] `prefers-reduced-motion` is respected — the nav-solid transition and any hover micro-interactions degrade gracefully.

**Content / evidence compliance** (cross-check against `01_content_architecture_and_page_specs.md`)
- [ ] Every proof entry, sector-page proof status, and any stat sitewide carries a status marker if it isn't independently verified — spot-check every route, not just `/proof`.
- [ ] `/insights` contains no fabricated posts.
- [ ] `/company/leadership` and `/company/partnerships` contain no invented names, bios, or partner logos.
- [ ] No page claims exclusivity or currency of the Penta-B/RockEye partnership.

**Performance**
- [ ] Run a Lighthouse pass (or equivalent) against `/`, one sector page, and one platform page. Target: performance ≥ 90, accessibility ≥ 95, best practices ≥ 95 on a production build (`next build && next start`, not dev mode). Note any score below target and why in your summary — do not silently ship a regression.
- [ ] Confirm the production build completes with no type errors, no unused-import lint failures, and no broken internal links (a simple crawl of all 21 routes checking every `<a href>`/`<Link href>` resolves to a real route is sufficient).

## Step 4 — Produce a punch-list
End this session with a short written punch-list (add it as `PHASE_2_PUNCHLIST.md` at the repo root) of everything deferred beyond this build: real content for the seven "needs client confirmation" items (see the Content Architecture doc §11), NanoBanana image assets to drop into the `/images/` slots once generated, the real contact-form backend, and the eventual Firestore/GCP migration path for content currently living in `content/*.ts`. This is the handoff document for whatever comes next — it should be accurate and specific, not a generic "TODO more content" note.

## Files you own
Anything, in the course of merging and fixing cross-link/QA issues — but every edit should be a small, targeted fix (a wrong link, a missing alt tag, a stray hard-coded colour), not a rewrite of another session's page. If you find something that needs substantial rework, note it in the punch-list rather than rebuilding it yourself in this session.

## Acceptance criteria
- [ ] All five feature branches merged to `main` with no unresolved conflicts.
- [ ] Every item in Step 3's checklist genuinely checked (not assumed) and passing, or explicitly logged as a known issue in the punch-list.
- [ ] `next build` succeeds with zero errors.
- [ ] `PHASE_2_PUNCHLIST.md` exists and is specific.
