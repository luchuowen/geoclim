// Homepage content (Session 1 — docs/04_session_1_homepage.md). Hero, thesis,
// "see/understand/act" and CTA-band copy here are homepage-owned and pulled
// verbatim from reference/geoclim_spatial_register.html. The sector,
// platform-module, proof and region arrays are wired in from their owning
// content files (content/sectors.ts, content/platform.ts, content/proof.ts,
// content/regions.ts — Sessions 2–4) rather than duplicated here, so the
// homepage always reflects the same data as the rest of the site. See
// CLAUDE.md "File ownership".

import type { DataPanelSpec } from './types';
import { sectors } from './sectors';
import { platformModules } from './platform';
import { PROOF_ENTRIES as REAL_PROOF_ENTRIES } from './proof';

export interface HeroTag {
  label: string;
  iconCircle?: { cx: number; cy: number; r: number };
  iconPaths: string[];
}

export const HERO_TAGS: HeroTag[] = [
  {
    label: 'Geo‑Intelligence',
    iconCircle: { cx: 12, cy: 12, r: 9 },
    iconPaths: ['M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z'],
  },
  {
    label: '10 Countries',
    iconPaths: ['M12 2 3 7v10l9 5 9-5V7l-9-5z'],
  },
  {
    label: 'Platform‑Led',
    iconPaths: ['M13 2 3 14h7l-1 8 10-12h-7l1-8z'],
  },
];

export const HERO = {
  h1: 'Spatial intelligence for decisions that can’t be wrong.',
  sub: 'GeoClim turns geographic and Earth-observation data into decisions that governments, utilities and enterprises across East Africa can act on with confidence.',
  ctaPrimary: { label: 'See the platform', href: '/platform' },
  ctaSecondary: { label: 'Where we work', href: '/company/where-we-work' },
};

export const THESIS = {
  eyebrow: 'What we do',
  heading: 'We turn geography into decisions.',
  lead: 'GeoClim is an East African geospatial intelligence company. We combine mapping, Earth observation and enterprise software so organisations can see what is happening on the ground — and act on it, not just report on it.',
};

/** Minimal shape the homepage module summary needs — satisfied by the real
 * `PlatformModuleContent` from content/platform.ts, which is what
 * `PLATFORM_MODULES` below actually holds. */
export interface HomePlatformModule {
  code: string;
  name: string;
  outcome: string;
}

export const PLATFORM_SUMMARY = {
  eyebrow: 'Platform',
  heading: 'One platform, five capabilities.',
};

export const PLATFORM_MODULES: HomePlatformModule[] = platformModules;

export const SEE_UNDERSTAND_ACT = {
  eyebrow: 'From data to decision',
  heading: 'See it. Understand it. Act on it.',
};

export interface SiuPanel {
  label: string;
  panel: DataPanelSpec;
}

export const SIU_PANELS: SiuPanel[] = [
  {
    label: '01 — SEE IT',
    panel: { seed: 21, caption: 'Turkana County — seasonal vegetation index', status: 'ILLUS.', coordLabel: 'MAR 2026' },
  },
  {
    label: '02 — UNDERSTAND IT',
    panel: { seed: 22, caption: 'Same site, 8 months later — change detected', status: 'ILLUS.', coordLabel: 'NOV 2026' },
  },
  {
    label: '03 — ACT ON IT',
    panel: { seed: 23, caption: 'Alert routed to field team via PSIM', status: 'ILLUS.', coordLabel: 'ROUTED' },
  },
];

export const SECTORS_PREVIEW = {
  eyebrow: 'Sectors',
  heading: 'Built around the problems that matter here.',
};

/** The six sectors, sourced straight from content/sectors.ts (SectorCard's
 * `iconKey` — not a homepage-only `iconPath` — resolves to an icon via
 * `components/sectors/sectorIcons.ts`, same as the sector hub/detail
 * pages). */
export const SECTORS = sectors;

export const STATEMENT_BAND = {
  eyebrow: 'Sovereign by design',
  headingMain: 'Ten countries. One platform. Every decision built on the same evidence',
  headingDim: '— not a borrowed dashboard.',
};

export const PROOF_PREVIEW = {
  eyebrow: 'Proof',
  heading: 'Shown honestly, not oversold.',
  lead: 'Every engagement below carries a status marker. Where GeoClim has client-confirmed outcomes, they will say so plainly. Where a figure is representative pending confirmation, the site will say that too.',
};

export const PROOF_ENTRIES = REAL_PROOF_ENTRIES;

export const REGION_SUMMARY = {
  eyebrow: 'Where we work',
  heading: 'Ten countries. One operating base in Nairobi.',
  countLabel: 'COUNTRIES OF REGIONAL FOOTPRINT',
  countryList: 'Kenya (HQ) · Uganda · Tanzania · Rwanda · Ethiopia · Zambia · Malawi · DRC · Mozambique · Zimbabwe',
};

// Re-exported from content/regions.ts (Session 4) in its native Title Case
// form — components/home/RegionSummary.tsx uppercases non-hub names at
// render time for the globe labels, matching how
// app/company/where-we-work/page.tsx already does it, rather than storing
// two casings of the same data.
export { REGIONS } from './regions';

export const CTA_BAND = {
  eyebrow: 'Get in touch',
  heading: 'Have a spatial problem worth solving properly?',
  sub: "Government, enterprise, utility or partnership — tell us the problem and we'll tell you plainly whether GeoClim is the right fit.",
  buttons: [
    { label: 'Government & Public Sector', href: '/contact', variant: 'primary' as const },
    { label: 'Enterprise & Partnerships', href: '/contact', variant: 'secondary' as const },
  ],
};
