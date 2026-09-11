# Claude Code Session 5 — Company, Insights & Contact

## Context
You are building the Company (minus "Where We Work", which another session owns), Insights, and Contact sections of **GeoClim East Africa**'s new marketing site (agency: NAVAC Global). The design system and shared components already exist in this repo — **do not redefine or edit any of them**.

This is the section of the site with the most unresolved evidence gaps. **Follow the evidence discipline exactly as written below — do not invent names, bios, certifications, partner logos, or blog content to make pages feel more complete.** An honestly thin page is the correct, client-approved output here; a fabricated one is not.

## Verified facts to use
- Vision `[A]`, verbatim: "To be Africa's leading provider of geo-intelligence and AI-powered solutions for sustainable development."
- Mission `[A]`, verbatim: "Empowering industries and communities with intelligent technologies that bridge data and action."
- Four capability areas `[A]`: Professional Services, Software Vending, Technical Advisory, Consulting.
- No leadership names, titles, bios, or photographs exist in any source material reviewed `[A — absence confirmed]`.
- No partners beyond Penta-B/RockEye are named or evidenced anywhere `[A — absence confirmed]`.
- No certifications are evidenced anywhere `[A — absence confirmed]`.

## What this session builds

### 1. `/company` — Company overview
- `app/company/page.tsx`: Vision + Mission header (verbatim above), the four capability areas presented as a plain list (not top-level buyer nav — this is the business-model layer, framed that way in a short intro sentence), sub-navigation cards to Leadership, Partnerships, Where We Work (links to `/company/where-we-work`, built by another session — link only, don't build), Governance & Trust. Include one `<img>` slot, `src="/images/company-about-01.jpg"`, alt describing a real operations/office environment (not a posed group photo) — the file doesn't exist yet, it ships via the NanoBanana pack; use a `var(--panel)` placeholder sized to the intended aspect ratio.

### 2. `/company/leadership`
- `app/company/leadership/page.tsx`: **Do not invent names, titles, or bios.** Ship a one-paragraph statement of GeoClim's operating model (Nairobi-based team, sector specialists) without naming individuals, plus a clear, plainly-worded marker: "Leadership profiles are being finalised." Do not use a stock "team" photo grid or any photo of unnamed people standing in for real leadership — leave this page visually quiet rather than padded.

### 3. `/company/partnerships`
- `app/company/partnerships/page.tsx`: State Penta-B and RockEye as GeoClim's platform partnerships (link to `/platform`). **Do not add generic "partnership category" cards with no named partners** — the current live site already makes this mistake (four empty category cards, zero real names) and it is explicitly called out as a failure to not repeat. If you have no other real, cleared partner to name, keep this page to the Penta-B/RockEye statement plus a short note that additional partnerships will be listed as they're confirmed — do not pad with placeholder logos or category tiles.

### 4. `/company/governance-and-trust`
- `app/company/governance-and-trust/page.tsx`: A plain governance/data-security statement — write 3–4 sentences covering: how client data is handled at a policy level, the general engagement model (scoping → delivery → handover), and a commitment to transparency about methodology. Keep this generic-but-serious in tone (it's the kind of statement a procurement officer expects to see, not a marketing paragraph) and **do not claim any specific certification** (ISO, data-security standard, etc.) since none is evidenced.

### 5. `/insights`
- `app/insights/page.tsx`: **Launch empty, honestly.** A short header ("Insights from GeoClim's work across East Africa") and one sentence: "First pieces coming soon." **Do not generate placeholder blog posts.** This replaces the current site's fake blog (which recycles service pages as posts) — recreating that pattern with AI-generated filler would be a worse failure than an empty page. If `content/insights.ts` is created, it should export an empty array with a comment explaining why, not seed data.

### 6. `/contact`
- `app/contact/page.tsx`: Segmented entry — four options (Government & Public Sector / Enterprise / Partnership / General), matching the CTA band pattern used sitewide. Each segment shows a one-line framing sentence and a short form (name, organisation, email, message). Forms submit to a local API route (`app/api/contact/route.ts`) that validates input and returns a success response but does **not** send a real email or write to any external service — add a `// TODO(phase-2): wire to real form handler / email service` comment. Do not add a Government-specific SLA statement (response-time commitment) since none is confirmed.

## Files you own
`app/company/page.tsx`, `app/company/leadership/**`, `app/company/partnerships/**`, `app/company/governance-and-trust/**`, `app/insights/**`, `app/contact/**`, `app/api/contact/**`, `content/company.ts`, `content/insights.ts`, `components/company/**`, `components/contact/**`.

## Files you must NOT touch
`app/company/where-we-work/**` (owned by Session 4), `components/nav/**`, `components/footer/**`, `app/layout.tsx`, `content/types.ts`, any other session's files.

## Acceptance criteria
- [ ] No invented names, bios, certifications, or partner logos appear anywhere in this session's output.
- [ ] `/insights` contains zero fabricated blog posts.
- [ ] `/contact` renders all four segments with working (locally-handled, non-external) form submission.
- [ ] `/company/partnerships` does not repeat the current live site's empty-category-card pattern.
