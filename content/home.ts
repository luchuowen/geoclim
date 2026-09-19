// Homepage content (Session 1 — docs/04_session_1_homepage.md). Hero, thesis,
// "see/understand/act" and CTA-band copy here are homepage-owned and pulled
// verbatim from reference/geoclim_spatial_register.html. The sector,
// platform-module, proof and region arrays below are stand-ins for content
// that will eventually live in content/sectors.ts, content/platform.ts,
// content/proof.ts and content/regions.ts (Sessions 2–4) — hard-coded here,
// matching the approved mockup exactly, so this session doesn't block on
// those. See CLAUDE.md "File ownership".

import type { DataPanelSpec, ProofEntry, Region } from './types';

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

// TODO: import from content/platform.ts once Session 3 lands. Hard-coded
// here (matching the approved mockup exactly) so Session 1 doesn't block on
// Session 3 — see CLAUDE.md "File ownership".
export interface HomePlatformModule {
  code: string;
  name: string;
  outcome: string;
}

export const PLATFORM_SUMMARY = {
  eyebrow: 'Platform',
  heading: 'One platform, five capabilities.',
};

export const PLATFORM_MODULES: HomePlatformModule[] = [
  {
    code: 'MNA',
    name: 'Maps & Apps',
    outcome:
      'Field-ready mapping tools that put accurate, current spatial data directly into the hands of the teams making decisions.',
  },
  {
    code: 'PBPM',
    name: 'Geo‑enabled workflow',
    outcome:
      'Business processes anchored to location — approvals, inspections and operations routed by where they actually happen.',
  },
  {
    code: 'SMART GIS',
    name: 'Real‑time mapping',
    outcome:
      'Live geographic infrastructure that updates as conditions on the ground change, not on a quarterly refresh cycle.',
  },
  {
    code: 'PSIM',
    name: 'Incident & emergency management',
    outcome:
      'A single operating picture for response teams — coordinating people, assets and geography during an incident in real time.',
  },
  {
    code: 'ROCKEYE',
    name: 'AI‑powered operations intelligence',
    outcome:
      "RockEye ERP applies AI to workflow automation, asset tracking and predictive maintenance across an organisation's operations.",
  },
];

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

// TODO: import from content/sectors.ts once Session 2 lands. Hard-coded
// here (matching the approved mockup exactly) so Session 1 doesn't block on
// Session 2 — see CLAUDE.md "File ownership".
export interface HomeSector {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  iconPath: string;
}

export const SECTORS_PREVIEW = {
  eyebrow: 'Sectors',
  heading: 'Built around the problems that matter here.',
};

export const SECTORS: HomeSector[] = [
  {
    slug: 'agriculture-food-systems',
    name: 'Agriculture & Food Systems',
    description:
      'Crop and land monitoring that helps producers and agribusiness plan a season with real information, not guesswork.',
    tags: ['ENTERPRISE', 'NGO'],
    iconPath: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6',
  },
  {
    slug: 'utilities-infrastructure',
    name: 'Utilities & Infrastructure',
    description: 'Asset and network intelligence for power, water and transport operators managing risk across wide territory.',
    tags: ['UTILITY', 'ENTERPRISE'],
    iconPath: 'M13 2 3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    slug: 'government-public-sector',
    name: 'Government & Public Sector',
    description: 'Land, planning and service-delivery data structured for procurement-grade transparency and accountability.',
    tags: ['GOVERNMENT'],
    iconPath: 'M12 3 3 7v2h18V7l-9-4zM5 10v9M9 10v9M15 10v9M19 10v9M3 21h18',
  },
  {
    slug: 'climate-environment',
    name: 'Climate & Environment',
    description: 'Change detection for water, forest and land resources — built to support monitoring, not just mapping.',
    tags: ['NGO', 'GOVERNMENT'],
    iconPath: 'M12 2C8 6 5 9.5 5 13.5a7 7 0 0 0 14 0C19 9.5 16 6 12 2z',
  },
  {
    slug: 'insurance-risk',
    name: 'Insurance & Risk',
    description: 'Location-based risk data that gives underwriters and claims teams ground-truth instead of assumption.',
    tags: ['ENTERPRISE'],
    iconPath: 'M12 2 4 6v6c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V6l-8-4z',
  },
  {
    slug: 'transport-logistics',
    name: 'Transport & Logistics',
    description: 'Route, corridor and congestion intelligence for organisations moving people and goods across the region.',
    tags: ['ENTERPRISE', 'GOVERNMENT'],
    iconPath: 'M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4',
  },
];

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

// TODO: import from content/proof.ts once Session 4 lands.
export const PROOF_ENTRIES: ProofEntry[] = [
  {
    id: 'agriculture-precision-ag',
    sector: 'AGRICULTURE',
    copy: 'Crop-yield monitoring across a multi-county precision-agriculture engagement.',
    status: 'ILLUSTRATIVE · PENDING CONFIRMATION',
  },
  {
    id: 'utilities-water-loss',
    sector: 'UTILITIES',
    copy: "Water-network loss mapping supporting an infrastructure operator's reduction programme.",
    status: 'ILLUSTRATIVE · PENDING CONFIRMATION',
  },
  {
    id: 'transport-corridor-congestion',
    sector: 'TRANSPORT',
    copy: 'Corridor congestion analysis informing a regional transport-planning study.',
    status: 'ILLUSTRATIVE · PENDING CONFIRMATION',
  },
];

export const REGION_SUMMARY = {
  eyebrow: 'Where we work',
  heading: 'Ten countries. One operating base in Nairobi.',
  countLabel: 'COUNTRIES OF REGIONAL FOOTPRINT',
  countryList: 'Kenya (HQ) · Uganda · Tanzania · Rwanda · Ethiopia · Zambia · Malawi · DRC · Mozambique · Zimbabwe',
};

// TODO: import from content/regions.ts once Session 4 lands. angle/dist
// values ported verbatim from reference `buildRegionGlobe()` — hand-tuned
// for visual balance, do not recalculate.
export const REGIONS: Region[] = [
  { id: 'kenya', name: 'KENYA', hub: true, angle: 0, dist: 0 },
  { id: 'uganda', name: 'UGANDA', angle: 200, dist: 0.6 },
  { id: 'tanzania', name: 'TANZANIA', angle: 258, dist: 0.68 },
  { id: 'rwanda', name: 'RWANDA', angle: 212, dist: 0.85 },
  { id: 'ethiopia', name: 'ETHIOPIA', angle: 66, dist: 0.68 },
  { id: 'zambia', name: 'ZAMBIA', angle: 250, dist: 0.94 },
  { id: 'malawi', name: 'MALAWI', angle: 232, dist: 0.98 },
  { id: 'drc', name: 'DRC', angle: 188, dist: 0.98 },
  { id: 'mozambique', name: 'MOZAMBIQUE', angle: 277, dist: 0.98 },
  { id: 'zimbabwe', name: 'ZIMBABWE', angle: 264, dist: 0.9 },
];

export const CTA_BAND = {
  eyebrow: 'Get in touch',
  heading: 'Have a spatial problem worth solving properly?',
  sub: "Government, enterprise, utility or partnership — tell us the problem and we'll tell you plainly whether GeoClim is the right fit.",
  buttons: [
    { label: 'Government & Public Sector', href: '/contact', variant: 'primary' as const },
    { label: 'Enterprise & Partnerships', href: '/contact', variant: 'secondary' as const },
  ],
};
