import Reveal from './Reveal';
import CountUp from './CountUp';
import WireGlobe from '../ui/WireGlobe';
import { REGIONS, REGION_SUMMARY } from '../../content/home';

// The region globe draws country labels verbatim from `nodes[].name`
// (lib/svg-devices.ts `buildRegionGlobeNodes`) — uppercased here to match
// the reference mockup's globe labels, while `content/regions.ts` itself
// keeps the readable, Title Case form (same approach as
// app/company/where-we-work/page.tsx's `GLOBE_NODES`).
const GLOBE_NODES = REGIONS.map((region) => ({
  ...region,
  name: region.hub ? region.name : region.name.toUpperCase(),
}));

/** "Where we work" regional presence — ported verbatim from the reference
 * mockup's `#region` section: count-up readout plus the region variant of
 * `<WireGlobe/>` with all ten country nodes, sourced from
 * `content/regions.ts` (Session 4) via `content/home.ts`'s re-export. */
export default function RegionSummary() {
  return (
    <div className="wrap hairline" id="region">
      <section>
        <span className="eyebrow">{REGION_SUMMARY.eyebrow}</span>
        <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '20ch' }}>{REGION_SUMMARY.heading}</h2>
        <div className="region-wrap">
          <Reveal className="region-readout">
            <CountUp className="big" target={REGIONS.length} />
            <span>{REGION_SUMMARY.countLabel}</span>
            <span style={{ color: 'var(--muted-dim)', marginTop: 14 }}>{REGION_SUMMARY.countryList}</span>
          </Reveal>
          <Reveal className="globe-panel" delay="0.1s">
            <WireGlobe width={520} height={460} cy={230} r={190} lat={8} lon={9} nodes={GLOBE_NODES} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
