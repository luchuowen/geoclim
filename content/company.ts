// Session 5 content — Company overview, sub-navigation, and the four
// capability areas. Local interfaces only: content/types.ts is Session 0/6
// owned and is not edited here (docs/08 "Files you must NOT touch").
//
// Evidence discipline (docs/01, .claude/rules/content-discipline.md): every
// string below is [A] verified from the approved copy. Nothing here is
// paraphrased or extended with invented detail — the Vision and Mission
// strings in particular are shipped verbatim and must not be reworded.

export interface CapabilityArea {
  id: string;
  /** [A] verified name — verbatim, do not rename or add invented detail. */
  name: string;
}

export interface CompanySubNavCard {
  id: string;
  title: string;
  /** Short navigational framing sentence — describes the linked page, makes
   * no claim about content (names, certifications, etc.) that page doesn't
   * itself make. */
  description: string;
  href: string;
  /** True for a page owned by another session (Where We Work / Session 4) —
   * linked to, never built, from this session. */
  ownedElsewhere?: boolean;
}

/** [A] verified, verbatim. Do not reword. */
export const VISION =
  "To be Africa's leading provider of geo-intelligence and AI-powered solutions for sustainable development.";

/** [A] verified, verbatim. Do not reword. */
export const MISSION =
  'Empowering industries and communities with intelligent technologies that bridge data and action.';

/** [A] verified. GeoClim's four capability areas — the business-model
 * layer, not a buyer-facing product nav. Presented as a plain list per
 * docs/08; no invented descriptions are added beyond the verified names. */
export const CAPABILITY_AREAS: CapabilityArea[] = [
  { id: 'professional-services', name: 'Professional Services' },
  { id: 'software-vending', name: 'Software Vending' },
  { id: 'technical-advisory', name: 'Technical Advisory' },
  { id: 'consulting', name: 'Consulting' },
];

export const COMPANY_SUB_NAV: CompanySubNavCard[] = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: "How GeoClim's team is organised.",
    href: '/company/leadership',
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    description: "The platform partnerships behind GeoClim's technology.",
    href: '/company/partnerships',
  },
  {
    id: 'where-we-work',
    title: 'Where We Work',
    description: "GeoClim's presence across East Africa.",
    href: '/company/where-we-work',
    ownedElsewhere: true,
  },
  {
    id: 'governance-and-trust',
    title: 'Governance & Trust',
    description: 'How client data and engagements are handled.',
    href: '/company/governance-and-trust',
  },
];
