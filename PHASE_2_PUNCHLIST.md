# Phase 2 Punch List — GeoClim East Africa

Written at the end of Session 6 (Integration & QA). This build ends at a
verified, locally-buildable production build (`next build` succeeds, all 22
routes prerender, `tsc`/`lint` clean). Everything below is a deliberate,
known gap carried forward — either something only Owen/GeoClim can supply,
or something explicitly out of scope for this phase — not something missed
by accident. Bugs found during this session's QA pass were fixed directly
in the codebase (see the Session 6 commit) and are not repeated here.

## 1. Seven items awaiting Owen/GeoClim's confirmation (docs/01 §11)

These block the current content from becoming *final* copy — the site
ships today with the client-approved, evidence-tagged interim copy, and
every affected claim already carries a visible status marker
(`ILLUSTRATIVE · PENDING CONFIRMATION`) so nothing overstates itself in the
meantime.

1. **Real case-study detail** for at least the three Home/Proof engagements
   (highest priority — `content/proof.ts`, `content/home.ts`). Currently
   illustrative placeholders.
2. **Leadership names, titles**, and whether photography exists or needs
   commissioning (`/company/leadership` — currently states the operating
   model only, names zero individuals).
3. **Partnership names beyond Penta-B/RockEye**, and logo usage-rights
   clearance (`/company/partnerships` — currently names only the two
   confirmed technology partners, no logos).
4. **What "regional operation" means per non-Kenya country**
   (`/company/where-we-work` — currently describes a "regional footprint"
   deliberately, without implying equal delivery depth across all ten
   countries).
5. **Any certifications** for the Governance & Trust page
   (`/company/governance-and-trust` — currently states GeoClim's data-
   handling approach in general terms, claims no specific certification).
6. **Whether Insights launches empty or with real authored content**
   (`/insights` — currently ships as an honest empty state, zero fabricated
   posts, per `content/insights.ts`).
7. **Whether a Government-specific SLA statement can be made on Contact**
   (`/contact` — currently makes no SLA claim).

## 2. NanoBanana image drop-in (scoped, docs/11 — not this session's job)

Seven photography slots are wired up and ready, each rendering as an
honest placeholder (visible "Image pending — …" caption, real intended alt
text, no broken `<img>`) rather than a stock photo or a 404 icon:

- `/images/sector-agriculture-food-systems-01.jpg`
- `/images/sector-utilities-infrastructure-01.jpg`
- `/images/sector-government-public-sector-01.jpg`
- `/images/sector-climate-environment-01.jpg`
- `/images/sector-insurance-risk-01.jpg`
- `/images/sector-transport-logistics-01.jpg`
- `/images/company-about-01.jpg`

Prompts for all seven are locked in `docs/11_nanobanana_image_prompts.md`.
Once the pack lands, dropping each file into `public/images/` at the exact
path above is a zero-layout-change swap (sector pages: replace the
placeholder `<div className="sector-photo-img">` with a real `<img>`/
`next/image`; `/company`: `components/company/ImageSlot.tsx` documents the
same swap). No other page in this build has a photography slot.

## 3. Real contact-form backend (Firestore/GCP — separate session)

`app/api/contact/route.ts` validates and acknowledges a submission today
but does not send email or persist anywhere — gated by
`.claude/rules/build-config.md`'s `no-firestore-yet` rule for this phase,
per explicit instruction. A follow-up GCP/Firestore session wires:
- Firestore (or equivalent) persistence for submissions.
- A real notification path (email/Slack/etc.) to GeoClim's team.
- Likely also the eventual migration of `content/*.ts` off static TS
  modules and onto Firestore, so non-engineers can edit copy without a
  code deploy (currently all copy lives in versioned `content/*.ts` files
  by design for this phase).

## 4. Other known, legitimate gaps (not bugs — not fixed in this session)

- **Country-level pages** (`/company/where-we-work/kenya`, etc.) are
  deliberately excluded this phase (docs/01 §1) — ten near-empty country
  pages would dilute credibility rather than build it. Revisit once real
  per-country engagement detail exists.
- **Route count**: docs/01's sitemap (§1) lists 22 distinct routes but its
  own summary line says "21 routes total" — a pre-existing off-by-one in
  that doc, not a build defect. The actual `next build` output for this
  session confirms **22 routes** generated (11 static + 5 platform-module
  pages + 6 sector pages), matching every line the sitemap itself lists.
  Worth a one-line fix in docs/01 §1 whenever that doc is next touched.
- **Lighthouse / automated axe-core scan**: this sandboxed session has no
  headless-Chrome or devtools-protocol access, so performance and
  automated-accessibility scores (docs/09's "Lighthouse ≥90/95/95" target)
  were not machine-measured. QA here instead did: a full manual pass for
  missing alt text, keyboard reachability (every interactive element is a
  real `<a>`/`<button>`, confirmed sitewide — no `<div onClick>` anywhere),
  a sitewide visible focus-visible ring (added this session, see below),
  and `prefers-reduced-motion` handling (`Reveal`/`CountUp` both check
  `matchMedia`; `WireGlobe` has no client-side motion to begin with — it
  always renders its settled, final state). Recommend a real Lighthouse/
  axe-core pass in CI or from a machine with browser access before public
  launch.
- **Visual responsive QA at 400/768/1440px**: verified by reading the
  actual breakpoints and overflow rules in the CSS (900px nav collapse,
  760/640/560/520px component breakpoints, `.hero{overflow:hidden}`
  correctly clipping the intentionally-oversized 820px hero globe SVG so
  it never causes page-level horizontal scroll) rather than by rendering
  each of the 22 routes in a real browser at each width, since no browser
  tool was available in this session. No overflow risk was found by this
  static review; a live visual pass is still worth doing before launch.
- **`content/sectors.ts` `relatedModules` denormalization**: each sector's
  `relatedModules` entries carry their own copy of the linked module's
  `code`/`name` (this session found and fixed three real mismatches
  against `content/platform.ts` — see the commit). The duplication itself
  is still there and could drift again if `content/platform.ts` changes
  without a matching edit here; a future session could remove the drift
  risk permanently by having `ModuleChip` resolve `code`/`name` live from
  `content/platform.ts` via slug (the same pattern this session applied to
  `components/platform/SectorChip.tsx`), rather than storing a second copy.
- **Google Fonts fetch fails during `next build`** in this sandboxed
  environment (no external network egress to `fonts.googleapis.com`) —
  Next.js falls back gracefully (`⚠ Failed to minify the stylesheet... Skipped
  optimizing this font`) and the build still succeeds; this is a sandbox
  limitation, not a site defect, and will not occur on a normal deploy
  target with internet access.
