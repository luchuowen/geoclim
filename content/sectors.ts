// Sector content — Session 2 owns this file (docs/05_session_2_sectors.md).
// Shaped against the shared `Sector` interface in `content/types.ts`
// (read-only, Session 0 owns it) plus sector-page-only fields defined
// locally below. Evidence tiers per docs/01: the table this data is
// transcribed from tags `problemStatement` as [B] (reasonable inference,
// client-approved) and the sector names/tags/card copy as [A] (verbatim,
// client-approved). `approach` is GeoClim capability description written in
// the same [B] register — no invented numbers, client names or outcomes.

import type { Sector } from './types';

/** A platform module reference shown as a chip on a sector page. Session 3
 * owns the real module content (`content/platform.ts`, not yet built) —
 * this only carries the code/name/slug needed to render a link, never an
 * import of that file. */
export interface SectorModuleRef {
  slug: string;
  code: string;
  name: string;
}

/** Deterministic illustrative-data-panel content for a sector page's single
 * `<DataPanel/>`. Status is always `'ILLUS.'` at render time — no sector has
 * a client-verified panel yet, so it isn't worth storing per row. */
export interface SectorPanelContent {
  seed: number;
  caption: string;
  coordLabel: string;
}

export interface SectorContent extends Sector {
  /** One-sentence problem framing, verbatim from the approved content plan
   * (docs/05 table). Used as the sector header's sub-headline. */
  problemStatement: string;
  /** `problemStatement` expanded to 2–3 sentences for the "The problem"
   * section body. Same register, no invented specifics. */
  problemExpanded: string;
  /** "GeoClim's approach" section body: plain-language capability
   * description, not a claim of specific results. */
  approach: string;
  relatedModules: SectorModuleRef[];
  panel: SectorPanelContent;
  /** Alt text for the sector page's documentary-photo slot. Describes the
   * pictured scene only — never a claim about a specific GeoClim
   * engagement, since no image file exists yet. */
  imageAlt: string;
}

export const sectors: SectorContent[] = [
  {
    id: 'agriculture-food-systems',
    slug: 'agriculture-food-systems',
    name: 'Agriculture & Food Systems',
    navDescription: 'Crop & land monitoring for real-time planning.',
    description:
      'Crop and land monitoring that helps producers and agribusiness plan a season with real information, not guesswork.',
    tags: ['ENTERPRISE', 'NGO'],
    iconKey: 'agriculture',
    problemStatement:
      'Producers and agribusiness plan a season on incomplete information; yield and water risk are visible only after the fact.',
    problemExpanded:
      "Producers and agribusiness plan a season on incomplete information, and yield and water risk are visible only after the fact — once a shortfall has already reached the harvest. Ground surveys cover a fraction of the land at a fraction of the frequency a growing season needs, so the gap between what's happening in the field and what's visible from the office keeps widening as the season goes on.",
    approach:
      "GeoClim combines satellite and aerial imagery with on-the-ground data into a continuously updated view of crop condition, land use and water stress across a season, not a single snapshot. Producers and agribusiness get an early, consistent signal on where a field or block is diverging from expectation, delivered as plain maps and reports rather than raw geospatial output — early enough to act on, not just explain afterwards.",
    relatedModules: [
      { slug: 'real-time-gis', code: 'SMART GIS', name: 'Real-time GIS' },
      { slug: 'maps-and-apps', code: 'MNA', name: 'Maps & Apps' },
    ],
    panel: {
      seed: 41,
      caption: 'Trans Nzoia County — maize belt vegetation index',
      coordLabel: 'MAY 2026',
    },
    imageAlt: 'Smallholder farmland viewed from above in East Africa',
  },
  {
    id: 'utilities-infrastructure',
    slug: 'utilities-infrastructure',
    name: 'Utilities & Infrastructure',
    navDescription: 'Asset & network intelligence across territory.',
    description:
      'Asset and network intelligence for power, water and transport operators managing risk across wide territory.',
    tags: ['UTILITY', 'ENTERPRISE'],
    iconKey: 'utilities',
    problemStatement:
      'Power, water and transport operators manage assets across wide, hard-to-survey territory, with loss and failure often discovered late.',
    problemExpanded:
      'Power, water and transport operators manage assets across wide, hard-to-survey territory, with loss and failure often discovered late — once a fault has already interrupted service or a leak has already run for weeks. Physically walking or driving every kilometre of a network to find the weak point is slow and expensive, which leaves operators reacting to failures instead of anticipating them.',
    approach:
      "GeoClim maps and continuously monitors network assets and the terrain around them, turning scattered field records and imagery into one current, searchable picture of the network. Field teams and control-room staff can see where risk is concentrated and where an incident is unfolding, and route the right response to the right location — coordinated through a shared operating picture rather than separate spreadsheets and radio calls.",
    relatedModules: [
      { slug: 'incident-emergency-management', code: 'PSIM', name: 'Incident & Emergency Management' },
      { slug: 'geo-enabled-workflow', code: 'PBPM', name: 'Geo-enabled Workflow' },
    ],
    panel: {
      seed: 42,
      caption: 'Athi River corridor — water network loss zones',
      coordLabel: 'JUN 2026',
    },
    imageAlt: 'Power distribution infrastructure crossing open terrain',
  },
  {
    id: 'government-public-sector',
    slug: 'government-public-sector',
    name: 'Government & Public Sector',
    navDescription: 'Procurement-grade transparency & delivery data.',
    description:
      'Land, planning and service-delivery data structured for procurement-grade transparency and accountability.',
    tags: ['GOVERNMENT'],
    iconKey: 'government',
    problemStatement:
      'Land, planning and service-delivery decisions need procurement-grade, auditable data — not slide-deck claims.',
    problemExpanded:
      'Land, planning and service-delivery decisions need procurement-grade, auditable data, not slide-deck claims — yet the underlying land, parcel and infrastructure records that planning and delivery depend on are often incomplete, outdated or scattered across departments. Decisions that affect public land, budgets and constituents deserve data that can be checked and defended, not just presented.',
    approach:
      'GeoClim builds and maintains structured, source-traceable geospatial datasets — land parcels, infrastructure, service-delivery footprints — designed to stand up to procurement and audit scrutiny rather than just look good in a presentation. Departments get a shared, current record they can plan against and defend, with the underlying methodology and sourcing visible rather than hidden inside a dashboard.',
    relatedModules: [
      { slug: 'incident-emergency-management', code: 'PSIM', name: 'Incident & Emergency Management' },
      { slug: 'geo-enabled-workflow', code: 'PBPM', name: 'Geo-enabled Workflow' },
    ],
    panel: {
      seed: 43,
      caption: 'Kajiado County — land parcel boundary survey',
      coordLabel: 'FEB 2026',
    },
    imageAlt: 'Urban land parcels and planning boundaries in an East African city',
  },
  {
    id: 'climate-environment',
    slug: 'climate-environment',
    name: 'Climate & Environment',
    navDescription: 'Change detection for water, forest & land.',
    description:
      'Change detection for water, forest and land resources — built to support monitoring, not just mapping.',
    tags: ['NGO', 'GOVERNMENT'],
    iconKey: 'climate',
    problemStatement:
      'Land, water and forest change needs continuous monitoring, not periodic surveys, to support real intervention.',
    problemExpanded:
      "Land, water and forest change needs continuous monitoring, not periodic surveys, to support real intervention, but most monitoring programmes still run on the cadence of an annual or biennial survey. By the time a change in forest cover, water extent or land condition is documented, the window to intervene while it's still manageable has often closed.",
    approach:
      "GeoClim runs continuous change detection against satellite time series, flagging shifts in forest cover, water extent and land condition as they happen rather than at the next scheduled survey. NGOs and government partners get an ongoing, comparable record of change over time — evidence built to support a specific intervention or funding decision, not a one-off report that ages out of relevance.",
    relatedModules: [{ slug: 'real-time-gis', code: 'SMART GIS', name: 'Real-time GIS' }],
    panel: {
      seed: 44,
      caption: 'Mau Forest Complex — canopy change detection',
      coordLabel: 'OCT 2025',
    },
    imageAlt: 'Forest and water landscape showing signs of environmental change',
  },
  {
    id: 'insurance-risk',
    slug: 'insurance-risk',
    name: 'Insurance & Risk',
    navDescription: 'Location-based ground-truth for underwriting.',
    description:
      'Location-based risk data that gives underwriters and claims teams ground-truth instead of assumption.',
    tags: ['ENTERPRISE'],
    iconKey: 'insurance',
    problemStatement: 'Underwriters and claims teams price and settle risk against assumption, not ground-truth.',
    problemExpanded:
      "Underwriters and claims teams price and settle risk against assumption, not ground-truth: exposure and loss assessments often rely on regional averages, self-reported data or a single assessor visit, none of which reflect what's actually happening on a specific parcel of land. That gap shows up twice — first in mispriced risk, then again when a claim is settled against incomplete evidence.",
    approach:
      "GeoClim turns satellite and geospatial data into location-specific evidence — current land condition, exposure and change over time — that underwriting and claims teams can reference for a specific policy or claim rather than a regional estimate. The result is risk assessment and claims settlement grounded in what a location actually looks like, not what the average location in that zone is assumed to look like.",
    relatedModules: [
      { slug: 'real-time-gis', code: 'SMART GIS', name: 'Real-time GIS' },
      { slug: 'maps-and-apps', code: 'MNA', name: 'Maps & Apps' },
    ],
    panel: {
      seed: 45,
      caption: 'Tana River basin — flood exposure zones',
      coordLabel: 'APR 2026',
    },
    imageAlt: 'Flood-prone terrain along a river basin in East Africa',
  },
  {
    id: 'transport-logistics',
    slug: 'transport-logistics',
    name: 'Transport & Logistics',
    navDescription: 'Route & corridor intelligence at scale.',
    description:
      'Route, corridor and congestion intelligence for organisations moving people and goods across the region.',
    tags: ['ENTERPRISE', 'GOVERNMENT'],
    iconKey: 'transport',
    problemStatement:
      "Corridor and congestion problems are managed reactively because the region-wide picture doesn't exist in one place.",
    problemExpanded:
      "Corridor and congestion problems are managed reactively because the region-wide picture doesn't exist in one place: route, corridor and congestion data lives in whatever system each operator or authority happens to use, so nobody sees the region-wide pattern until a problem has already cost time and money. Planning decisions end up reactive, made corridor by corridor instead of against the full network.",
    approach:
      "GeoClim maps routes, corridors and congestion patterns across the region into one consistent picture, combining imagery and operational data rather than leaving each operator to work from its own partial view. Organisations moving people and goods can plan against the full network — where congestion concentrates, where a corridor is under strain — instead of reacting to problems one route at a time.",
    relatedModules: [
      { slug: 'maps-and-apps', code: 'MNA', name: 'Maps & Apps' },
      { slug: 'rockeye', code: 'ROCKEYE', name: 'AI Operations Intelligence' },
    ],
    panel: {
      seed: 46,
      caption: 'Nairobi–Mombasa corridor — congestion heatmap',
      coordLabel: 'JUL 2026',
    },
    imageAlt: 'Road corridor and traffic movement in East Africa',
  },
];

export function getSectorBySlug(slug: string): SectorContent | undefined {
  return sectors.find((s) => s.slug === slug);
}
