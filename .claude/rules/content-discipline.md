<!-- paths: content/**, app/**/page.tsx, app/**/*.tsx -->
# Evidence / content discipline (docs/01, applies sitewide)

Every piece of copy is tagged `[A]` verified, `[B]` reasonable inference, or
`[C]` needs client confirmation. **Nothing tagged `[C]` ships as a bare
claim** — it ships with a visible status marker (`VERIFIED` /
`ILLUSTRATIVE · PENDING CONFIRMATION`, mono font, shared `StatusMarker`
component) or it doesn't ship. This is GeoClim's brand mechanism, not a
formatting nicety — never soften, hide, or shrink a status marker.

Never-do's (judgment call each time — nothing here is lint-catchable):
- Never invent leadership names, titles, bios, or photos. `/company/leadership`
  ships an honest "profiles are being finalised" placeholder instead.
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
`/images/company-about-01.jpg`), 3:2 aspect ratio, so the NanoBanana asset
pack (docs/11) drops in later with zero code change. Use a `var(--panel)`
background placeholder sized to the real aspect ratio until the file exists
— never a broken `<img>` or a stock photo standing in.

Content model: every content type is a TS interface in `content/types.ts`
with real data in `content/*.ts` typed arrays, shaped to map 1:1 onto a
future Firestore document (`id` field, flat structure). No Firestore SDK or
GCP credentials this phase (gated by `no-firestore-yet` in the manifest).
