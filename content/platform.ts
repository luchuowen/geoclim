// Platform module content (Session 3 — docs/06). Data conforms to the
// shared `PlatformModule` interface in content/types.ts; the two extra
// fields this page needs (`whatItDoes`, `fitStatement`) are declared as a
// local extension here rather than touching the read-only shared file.
//
// Evidence: `code`, `name` and `outcome` are `[A]` — verified, verbatim
// from the approved mockup (reference/geoclim_spatial_register.html). The
// module → related-sector mapping is `[A]` from docs/06. `whatItDoes` and
// `fitStatement` are written copy (plain-language expansion / platform-fit
// one-liners), not invented client specifics. Per docs/06 and
// .claude/rules/content-discipline.md: never state or imply that the
// Penta-B/RockEye partnership is exclusive or currently active — that is
// `[C]`, unconfirmed, and is deliberately absent from every string below.

import type { PlatformModule } from './types';

export interface PlatformModuleContent extends PlatformModule {
  /** 2–3 sentence plain-language expansion: what the module does, and the
   * business outcome it produces, in the same breath. */
  whatItDoes: string[];
  /** One-sentence statement of how this module fits alongside the other
   * four in the Penta-B + RockEye stack. */
  fitStatement: string;
}

export const platformModules: PlatformModuleContent[] = [
  {
    id: 'maps-and-apps',
    slug: 'maps-and-apps',
    code: 'MNA',
    name: 'Maps & Apps',
    outcome:
      'Field-ready mapping tools that put accurate, current spatial data directly into the hands of the teams making decisions.',
    navDescription: 'Field-ready mapping tools for decision-makers.',
    relatedSectorSlugs: ['agriculture-food-systems', 'insurance-risk', 'transport-logistics'],
    panel: {
      seed: 101,
      caption: 'Kilifi County — field survey layer synced from mobile',
      status: 'ILLUS.',
      coordLabel: 'MAR 2026',
    },
    whatItDoes: [
      'Maps & Apps puts mapping tools directly on the devices field teams already carry, so a survey, inspection or asset check captured on the ground becomes usable spatial data the moment it is recorded.',
      'There is no separate step to digitise or reconcile paper records later — what the field team sees is what the rest of the organisation sees.',
    ],
    fitStatement: 'The entry point — where field data becomes usable maps for everyone else in the stack.',
  },
  {
    id: 'geo-enabled-workflow',
    slug: 'geo-enabled-workflow',
    code: 'PBPM',
    name: 'Geo-enabled workflow',
    outcome:
      'Business processes anchored to location — approvals, inspections and operations routed by where they actually happen.',
    navDescription: 'Business processes anchored to location.',
    relatedSectorSlugs: ['utilities-infrastructure', 'government-public-sector'],
    panel: {
      seed: 202,
      caption: 'County permit request — routed for site inspection',
      status: 'ILLUS.',
      coordLabel: 'ROUTED',
    },
    whatItDoes: [
      'Geo-enabled workflow takes the maps and location data the platform already holds and uses them to route the work itself — an approval, an inspection or a maintenance ticket goes to whoever is responsible for that specific location, automatically.',
      'The result is a process that follows the geography instead of a generic queue, so nothing sits waiting for the wrong desk.',
    ],
    fitStatement: "Where MNA's data becomes routed, trackable process.",
  },
  {
    id: 'real-time-gis',
    slug: 'real-time-gis',
    code: 'SMART GIS',
    name: 'Real-time mapping',
    outcome:
      'Live geographic infrastructure that updates as conditions on the ground change, not on a quarterly refresh cycle.',
    navDescription: 'Live geographic infrastructure, always current.',
    relatedSectorSlugs: ['agriculture-food-systems', 'climate-environment', 'insurance-risk'],
    panel: {
      seed: 303,
      caption: 'Nairobi metro — live infrastructure layer, updated hourly',
      status: 'ILLUS.',
      coordLabel: 'LIVE',
    },
    whatItDoes: [
      'Real-time mapping keeps the underlying geographic layer current as conditions change on the ground, rather than as a periodic export that is already out of date by the time it is used.',
      'Every other module in the platform reads from this same live layer, so a change captured in one place is visible everywhere else immediately.',
    ],
    fitStatement: 'The live layer underneath the other four — always current, not a periodic export.',
  },
  {
    id: 'incident-emergency-management',
    slug: 'incident-emergency-management',
    code: 'PSIM',
    name: 'Incident & emergency management',
    outcome:
      'A single operating picture for response teams — coordinating people, assets and geography during an incident in real time.',
    navDescription: 'One operating picture during an incident.',
    relatedSectorSlugs: ['utilities-infrastructure', 'government-public-sector'],
    panel: {
      seed: 404,
      caption: 'Flood response — assets and teams on one operating picture',
      status: 'ILLUS.',
      coordLabel: 'ACTIVE',
    },
    whatItDoes: [
      'Incident & emergency management brings people, vehicles, assets and the geography they are operating in onto a single live picture during a response, so a coordinator can see where everything is and direct it from one place.',
      'It draws on the same real-time mapping layer as the rest of the platform, so the picture stays accurate as the incident moves.',
    ],
    fitStatement: 'Where PBPM manages routine workflow, PSIM manages the moment something goes wrong.',
  },
  {
    id: 'rockeye',
    slug: 'rockeye',
    code: 'ROCKEYE',
    name: 'AI-powered operations intelligence',
    outcome:
      "RockEye ERP applies AI to workflow automation, asset tracking and predictive maintenance across an organisation's operations.",
    navDescription: 'Predictive maintenance & workflow automation.',
    relatedSectorSlugs: ['transport-logistics'],
    panel: {
      seed: 505,
      caption: 'Fleet asset — maintenance flagged by predictive model',
      status: 'ILLUS.',
      coordLabel: 'FLAGGED',
    },
    whatItDoes: [
      "RockEye ERP sits above the other four modules and applies AI to the operational data they generate — automating routine workflow steps, tracking assets over their working life, and flagging maintenance before it becomes a failure.",
      'It turns the geospatial data the rest of the platform collects into operational and financial decisions, not just a map of where things are.',
    ],
    fitStatement:
      'The operations layer above the other four — turning geospatial data into asset and workflow intelligence.',
  },
];

export function getPlatformModuleBySlug(slug: string): PlatformModuleContent | undefined {
  return platformModules.find((mod) => mod.slug === slug);
}
