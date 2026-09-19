// Regional-footprint data (Session 4 — docs/07). Ten countries, `[A]`
// verified in the Company Profile: Kenya (HQ) plus nine others. `angle`/
// `dist` are ported verbatim from reference/geoclim_spatial_register.html's
// `COUNTRIES` array (buildRegionGlobe()) — hand-tuned for visual balance on
// the globe, do not recalculate them.

import type { Region } from './types';

export const REGIONS: Region[] = [
  { id: 'kenya', name: 'Kenya', hub: true, angle: 0, dist: 0 },
  { id: 'uganda', name: 'Uganda', angle: 200, dist: 0.6 },
  { id: 'tanzania', name: 'Tanzania', angle: 258, dist: 0.68 },
  { id: 'rwanda', name: 'Rwanda', angle: 212, dist: 0.85 },
  { id: 'ethiopia', name: 'Ethiopia', angle: 66, dist: 0.68 },
  { id: 'zambia', name: 'Zambia', angle: 250, dist: 0.94 },
  { id: 'malawi', name: 'Malawi', angle: 232, dist: 0.98 },
  { id: 'drc', name: 'DRC', angle: 188, dist: 0.98 },
  { id: 'mozambique', name: 'Mozambique', angle: 277, dist: 0.98 },
  { id: 'zimbabwe', name: 'Zimbabwe', angle: 264, dist: 0.9 },
];
