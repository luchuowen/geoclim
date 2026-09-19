/** Hero carousel content — three slides summarizing GeoClim's actual
 * platform, grounded in the site's own "three disciplines" framing
 * (see the Home page's .triad section) rather than invented copy. */
export interface HeroSlide {
  id: string;
  kicker: string;
  heading: string;
  body: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'spatial',
    kicker: '01 — Spatial Intelligence',
    heading: 'See the ground truth, live',
    body: "GIS, satellite, UAV and IoT — powered by Penta-B's Maps & Apps and SMART Real-Time GIS platforms.",
  },
  {
    id: 'enterprise',
    kicker: '02 — Enterprise Integration',
    heading: 'Turn findings into work orders',
    body: 'RockEye ERP and PBPM connect that intelligence to your asset records, maintenance, and supply chain.',
  },
  {
    id: 'ai',
    kicker: '03 — AI & Automation',
    heading: 'Faster reads, every cycle',
    body: 'AI-powered ERP analytics and robotic process automation applied to real-time dashboards — not a bolt-on chatbot.',
  },
];
