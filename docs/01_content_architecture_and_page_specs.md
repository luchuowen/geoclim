# GeoClim East Africa — Content Architecture & Page Specifications
Prepared by NAVAC Global · September 2026 · Companion to the Final Design Direction Dossier

This document is the build spec. It turns the locked design system (light, Spatialnode-matched — see the Design Direction Dossier) into a concrete sitemap and a section-by-section content plan for every page. It is the single source of truth that the Claude Code implementation prompts (see `02_claude_code_implementation_plan.md` and the `session-*.md` files) and the NanoBanana image-prompt pack (`08_nanobanana_image_prompts.md`) both build from.

**Evidence discipline carries forward unchanged**: every piece of copy below is tagged `[A]` verified, `[B]` strong inference, or `[C]` needs client confirmation, per the source hierarchy established in the Discovery dossier. Nothing tagged `[C]` ships as a bare claim — it ships with a visible status marker, or it doesn't ship. This is not a formatting nicety; it is GeoClim's actual brand mechanism (see Dossier §8, "What Is Uniquely GeoClim").

---

## 1. Sitemap

```
/                                          Home
/sectors                                   Sectors — hub
/sectors/agriculture-food-systems
/sectors/utilities-infrastructure
/sectors/government-public-sector
/sectors/climate-environment
/sectors/insurance-risk
/sectors/transport-logistics
/platform                                  Platform — hub
/platform/maps-and-apps                    (MNA)
/platform/geo-enabled-workflow             (PBPM)
/platform/real-time-gis                    (SMART GIS)
/platform/incident-emergency-management    (PSIM)
/platform/rockeye                          (RockEye ERP)
/proof
/company                                   Company — overview
/company/leadership
/company/partnerships
/company/where-we-work
/company/governance-and-trust
/insights                                  Insights — hub (thin at launch)
/contact
```

21 routes total. Country-level pages (`/where-we-work/kenya`, etc.) are **deliberately excluded from this phase** — ten near-empty country pages would dilute credibility rather than build it (Discovery §7). `/company/where-we-work` carries the footprint claim honestly via the wireframe-globe device; full country pages are a post-launch phase, once real per-country engagement detail exists.

---

## 2. Global components (built once, in Session 0, reused everywhere)

- **Nav** — sticky, scroll-solid, mega-menus for Sectors / Platform / Company, plain links for Proof / Insights, primary CTA "Request a Briefing". Exactly as built in the approved HTML mockup.
- **Mobile sheet** — full-height near-black overlay, Crimson Pro links, matches mockup exactly.
- **Footer** — four-column: GeoClim blurb, Platform links, Company links, Contact links; mono copyright + country-list line.
- **CTA band** — segmented buttons (Government & Public Sector / Enterprise & Partnerships), used on Home and at the foot of every Sector and Platform page.
- **Status marker** — mono-font tag (`VERIFIED` / `ILLUSTRATIVE · PENDING CONFIRMATION`), used on every Proof entry and every unconfirmed stat sitewide. This is a shared, reusable component — not a one-off.
- **Data panel** and **wireframe globe** — the two SVG devices from Dossier §17, implemented as React components (`<DataPanel/>`, `<WireGlobe/>`), parameterised by seed/caption/coordinates so any page can drop one in.

---

## 3. Home (`/`)

Already fully specified and built in the approved mockup (see the published artifact). Carried into this spec for completeness and as the pattern every other page follows:

1. Hero — thesis headline, no stock imagery, wash + wireframe globe + indigo CTA. `[A/B]` mix — positioning statement, no unverified stats.
2. Thesis — "We turn geography into decisions." One sentence. `[B]`, synthesised from Vision/Mission `[A]`.
3. Platform — five modules (MNA / PBPM / SMART GIS / PSIM / RockEye), stated plainly. `[A]`.
4. "See it. Understand it. Act on it." — three annotated data panels connecting platform to outcome. `[C]`, marked ILLUS.
5. Sectors — six cards linking to full pages. `[A]` (sector list itself), card copy `[B]`.
6. Proof — three engagements, each with a status marker. `[C]`, explicitly marked.
7. Where we work — wireframe globe, ten country nodes, mono readout. `[A]`.
8. CTA — segmented entry points. No claim.
9. Footer.

---

## 4. Sectors

### 4.1 Sectors hub (`/sectors`)

- Eyebrow + H2 restating the section thesis ("Built around the problems that matter here" — reused from Home, or a slightly longer variant for a dedicated hub).
- Full six-card grid (same cards as Home, but this page is the canonical destination — Home's cards link here).
- One paragraph above the grid translating the sector-first IA rationale into visitor-facing language: *"Most organisations know their problem before they know a product name. Start with yours."* `[B]`.

### 4.2 Sector page template (applies to all six)

Structure, per Dossier §29 and Discovery §7:

1. **Header** — sector name, one-sentence problem statement (no stock image; wash background only, consistent with the hero's no-photography rule at this level — see §7 below for where photography *does* appear on sector pages).
2. **The problem** — 2–3 sentences naming the real operational problem this sector faces (crop failure risk, asset loss, service-delivery accountability, etc.). `[B]`, grounded in the sector's real subject matter, not generic.
3. **GeoClim's approach** — how geospatial + AI capability addresses it, in plain language before technical language.
4. **Relevant platform module(s)** — one or two modules tied to this sector, each linking to its `/platform/*` page (e.g. Agriculture → SMART GIS + MNA; Government → PSIM + PBPM).
5. **Annotated data panel** — one `<DataPanel/>`, sector-specific caption, `ILLUS.` status marker.
6. **Documentary photograph** — one real-feeling environmental image (NanoBanana, Phase 2 asset — see image pack). This is the one place per sector page where photography appears; it is captioned with a plausible real specific (region-type, purpose), never decorative.
7. **Proof status** — either a real client-confirmed case (once available) or an honest "no verified engagement in this sector yet" state — the honesty device applies here too, not just on `/proof`.
8. **CTA band** — segmented, sector-aware where possible (e.g. Agriculture/Environment sectors lead with the Enterprise & Partnerships button; Government sector leads with the Government button).

Per-sector specifics (buyer segment tags carried from the mockup, `[A]` sector names, `[B]` problem framing):

| Sector | Slug | Buyer tags | Problem framing (starting point for full copy) |
|---|---|---|---|
| Agriculture & Food Systems | `agriculture-food-systems` | ENTERPRISE, NGO | Producers and agribusiness plan a season on incomplete information; yield and water risk are visible only after the fact. |
| Utilities & Infrastructure | `utilities-infrastructure` | UTILITY, ENTERPRISE | Power, water and transport operators manage assets across wide, hard-to-survey territory, with loss and failure often discovered late. |
| Government & Public Sector | `government-public-sector` | GOVERNMENT | Land, planning and service-delivery decisions need procurement-grade, auditable data — not slide-deck claims. |
| Climate & Environment | `climate-environment` | NGO, GOVERNMENT | Land, water and forest change needs continuous monitoring, not periodic surveys, to support real intervention. |
| Insurance & Risk | `insurance-risk` | ENTERPRISE | Underwriters and claims teams price and settle risk against assumption, not ground-truth. |
| Transport & Logistics | `transport-logistics` | ENTERPRISE, GOVERNMENT | Corridor and congestion problems are managed reactively because the region-wide picture doesn't exist in one place. |

**NEEDS CLIENT CONFIRMATION**: real (not illustrative) proof for each sector; any sector-specific named engagement; whether any sector should be deprioritised or a seventh added.

---

## 5. Platform

### 5.1 Platform hub (`/platform`)

- Eyebrow + H2 ("One platform, five capabilities" — reused from Home).
- Full five-module list (same as Home's module rows, this page is canonical).
- One paragraph framing Penta-B + RockEye as a genuine differentiator: *"Penta-B and RockEye are GeoClim's own platform stack — not a resale of someone else's dashboard."* `[B]`, careful phrasing given exclusivity/currency of the partnership is `[C]` (Discovery §13, Q3) — do not claim exclusivity until confirmed.

### 5.2 Platform module page template (applies to all five)

1. **Header** — mono module code (MNA / PBPM / SMART / PSIM / ROCKEYE) + module name + one-sentence outcome definition. `[A]`.
2. **What it does** — plain-language expansion of the one-liner already on Home, 2–3 sentences, translating the technical function into the business outcome in the same breath (Dossier §23).
3. **Annotated data panel** — demonstrating the module in a representative scenario, `ILLUS.` marker.
4. **How it fits the platform** — one line placing this module relative to the other four (e.g. PSIM: "Where PBPM manages routine workflow, PSIM manages the moment something goes wrong.").
5. **Related sectors** — 2–3 sector chips linking to `/sectors/*`, mirroring the sector pages' reverse links.
6. **CTA band**.

| Module | Slug | Code | Name |
|---|---|---|---|
| Maps & Apps | `maps-and-apps` | MNA | Field-ready mapping tools |
| Geo-enabled workflow | `geo-enabled-workflow` | PBPM | Business process management anchored to location |
| Real-time GIS | `real-time-gis` | SMART | Live geographic infrastructure |
| Incident & emergency management | `incident-emergency-management` | PSIM | Single operating picture during an incident |
| RockEye | `rockeye` | ROCKEYE | AI-powered operations intelligence (ERP) |

**NEEDS CLIENT CONFIRMATION**: real product screenshots (would replace the annotated data panels if/when supplied — see Dossier §16); current, exclusive-or-not status of the Penta-B/RockEye partnership.

---

## 6. Proof (`/proof`)

1. **Header** — "Shown honestly, not oversold." One supporting sentence (already written in the mockup, reused verbatim).
2. **Engagement list** — expanded version of Home's three-item list; each entry: sector tag, one-sentence outcome, status marker, and (space reserved, not yet populated) a "read the engagement" expansion for once real detail exists.
3. **A short explainer paragraph on the honesty device itself** — *"Every engagement on this page carries a status marker. We would rather tell you plainly that a figure is illustrative than let a placeholder read as a claim."* `[B]` — this is GeoClim's own stated design principle turned into visitor-facing copy; it is the site's single most differentiating piece of copy and should not be cut for length.
4. **CTA band**.

**NEEDS CLIENT CONFIRMATION**: everything on this page, structurally — this is the page that converts fastest once real case detail lands. Flag to Owen as the highest-priority content gap to close post-launch (Discovery §13, Q1).

---

## 7. Company

### 7.1 Company overview (`/company`)

1. **Header** — Vision + Mission, verbatim `[A]`: *"To be Africa's leading provider of geo-intelligence and AI-powered solutions for sustainable development"* / *"Empowering industries and communities with intelligent technologies that bridge data and action."*
2. **Four capability areas** — Professional Services, Software Vending, Technical Advisory, Consulting `[A]`, framed as the business-model layer, not top-level buyer nav (Discovery §8).
3. **Sub-navigation cards** to Leadership, Partnerships, Where We Work, Governance & Trust.
4. **Documentary photograph** — one real-feeling operations/office environment image (not a posed corporate shot — see image pack).

### 7.2 Leadership & Team (`/company/leadership`)

- **NEEDS CLIENT CONFIRMATION in full** — no leadership names, titles, bios or photographs exist in any reviewed source (Discovery §4, confirmed absent across PDF, proposal, live site, and external search). Ship this page with an honest placeholder state at launch: a one-paragraph statement of GeoClim's operating model (Nairobi-based, sector specialists) without inventing named individuals, plus a clear "Leadership profiles are being finalised" marker — never a stock "team" photo grid standing in for real people.

### 7.3 Partnerships (`/company/partnerships`)

- Penta-B and RockEye stated as platform partnerships `[A, C on currency/exclusivity]`.
- **NEEDS CLIENT CONFIRMATION**: any other named partners, logos and usage-rights clearance (Discovery §4/§13, Q3). The current live site's Partnerships page names zero partners — do not repeat that failure by shipping generic category cards again; either populate with real, cleared names/logos, or keep this page merged into `/company` until there is real content, rather than publishing an empty page.

### 7.4 Where We Work (`/company/where-we-work`)

- Ten-country footprint, wireframe globe (large version of the Home device), mono country list `[A]`.
- One paragraph reframing the footprint honestly: depth of "operation" per non-Kenya country is `[C]` — copy should say "regional footprint," not imply equal delivery depth in all ten (Discovery §4).
- **NEEDS CLIENT CONFIRMATION**: what "operation" means per country — this determines whether future country pages are viable at all.

### 7.5 Governance & Trust (`/company/governance-and-trust`)

- A plain governance/data-security statement — methodology, how client data is handled, engagement model — written from what a serious institutional buyer needs to see (Design Principle: "Structured for procurement," Discovery §9).
- **NEEDS CLIENT CONFIRMATION**: any actual certifications (ISO, data-security, sector-specific) `[C]`. If none exist, the page relies on the plain governance statement alone — do not imply certification that isn't held.

---

## 8. Insights (`/insights`)

- Replaces the current fake blog (three posts that just recycle service pages — Discovery §3/§8).
- Launch state: a hub with **zero fabricated posts**. Either (a) launch empty with a short "Insights from GeoClim's work across East Africa — first pieces coming soon" statement, or (b) launch with 1–2 genuinely written pieces once Owen/GeoClim supply real subject matter. Per Discovery §8: "better absent than fabricated." Do not populate this page with AI-generated placeholder articles under any circumstance — that is the single fastest way to undo the honesty positioning the rest of the site is built on.

---

## 9. Contact (`/contact`)

- Segmented entry (Government & Public Sector / Enterprise / Partnership / General), matching the CTA band pattern used sitewide (Dossier §29).
- Each segment routes to a short, tailored form — same fields where possible (name, organisation, email, message), differentiated mainly by a one-line framing sentence per segment and, for Government, a note on procurement-appropriate response times if GeoClim wants to state one `[C — needs confirmation of an actual SLA before publishing]`.
- No live form backend is built in this phase (see implementation plan — forms submit to a placeholder endpoint / mailto until a real handler is specified).

---

## 10. Sitewide copy principles (unchanged from the locked dossier, restated here for the build team)

Problem → what GeoClim does → result, every time. No claim without either a source or a visible status marker. Technical terms translated into business outcome in the same sentence. Short sentences. No stacked buzzwords. One idea per section.

## 11. Open items requiring Owen/GeoClim's confirmation before this content ships as final copy

1. Real case-study detail for at least the three Home/Proof engagements (highest priority — see §6).
2. Leadership names, titles, and whether photography exists or needs commissioning (§7.2).
3. Partnership names beyond Penta-B/RockEye, and logo usage-rights clearance (§7.3).
4. What "regional operation" means per non-Kenya country (§7.4).
5. Any certifications for the Governance & Trust page (§7.5).
6. Whether Insights launches empty or with real authored content (§8).
7. Whether a Government-specific SLA statement can be made on Contact (§9).

This list is identical in spirit to Discovery §13 — carried forward because none of it has been answered yet, not because it was forgotten.
