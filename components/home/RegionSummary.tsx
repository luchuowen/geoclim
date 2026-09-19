import Reveal from './Reveal';
import CountUp from './CountUp';
import WireGlobe from '../ui/WireGlobe';
import { REGIONS, REGION_SUMMARY } from '../../content/home';

/** "Where we work" regional presence — ported verbatim from the reference
 * mockup's `#region` section: count-up readout plus the region variant of
 * `<WireGlobe/>` with all ten country nodes. angle/dist values are
 * hard-coded here pending `content/regions.ts` (Session 4) — see that
 * export's TODO in content/home.ts. */
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
            <WireGlobe width={520} height={460} cy={230} r={190} lat={8} lon={9} nodes={REGIONS} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
