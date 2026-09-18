<!-- paths: app/**, components/**, content/**, styles/**, lib/** -->
# File ownership (docs/02 §2–3)

The build is split across sessions/branches that each own a disjoint file
set — the actual conflict-prevention mechanism, enforced by discipline (only
`reference/geoclim_spatial_register.html` is hook-protected). **Never edit a
file outside the current session's owned list.** If you need something from
a shared file that doesn't exist yet, hard-code a local fallback with a
`// TODO` comment pointing at the file that will eventually own it.

| Session | Branch | Owns |
|---|---|---|
| 0 — Foundation (done, merged) | `feat/foundation` | `package.json`, `next.config.js`, `tsconfig.json`, `.eslintrc*`, `app/layout.tsx`, `app/globals.css`, `styles/**`, `components/nav/**`, `components/footer/**`, `components/ui/**`, `content/types.ts`, `lib/svg-devices.ts`, `README.md` |
| 1 — Home | `feat/home` | `app/page.tsx`, `content/home.ts`, `components/home/**`, optionally `components/ui/CtaBand.tsx` |
| 2 — Sectors | `feat/sectors` | `app/sectors/**`, `content/sectors.ts`, `components/sectors/**`, `styles/components/sector-card.css` (if absent) |
| 3 — Platform | `feat/platform` | `app/platform/**`, `content/platform.ts`, `components/platform/**`, `styles/components/module-row.css` (if absent) |
| 4 — Proof + Regions | `feat/proof-regions` | `app/proof/**`, `app/company/where-we-work/**`, `content/proof.ts`, `content/regions.ts`, `components/proof/**`, `components/regions/**`, `components/ui/StatusMarker.tsx` (if absent) |
| 5 — Company/Insights/Contact | `feat/company-contact` | `app/company/page.tsx`, `app/company/leadership/**`, `app/company/partnerships/**`, `app/company/governance-and-trust/**`, `app/insights/**`, `app/contact/**`, `app/api/contact/**`, `content/company.ts`, `content/insights.ts`, `components/company/**`, `components/contact/**` |
| 6 — Integration & QA | `feat/integration-qa` | Anything, but only small targeted cross-link/QA fixes — not a rewrite of another session's page. Runs only after 1–5 merge. |

`main` is protected: only Session 0 (once, at the start) and Session 6
(once, at the end) commit directly to it. Sessions 1–5 are mutually
independent and parallel once `feat/foundation` merges — they touch disjoint
files by construction, so merges should be conflict-free.

Full sitemap (21 routes) is `docs/01_content_architecture_and_page_specs.md`
§1; don't duplicate it here, it doesn't change per-session.
