import type { Metadata } from 'next';
import '@/styles/components/region.css';
import WireGlobe from '@/components/ui/WireGlobe';
import RegionSummary from '@/components/regions/RegionSummary';
import { REGIONS } from '@/content/regions';
import type { RegionGlobeInput } from '@/lib/svg-devices';

export const metadata: Metadata = {
  title: 'Where We Work | GeoClim East Africa',
  description: "GeoClim's ten-country regional footprint, anchored by our operating base in Nairobi.",
};

// The region globe draws country labels verbatim from `nodes[].name`
// (lib/svg-devices.ts `buildRegionGlobeNodes`) — uppercased here to match
// the reference mockup's globe labels, while `content/regions.ts` itself
// keeps the readable, Title Case form used by `RegionSummary` and the rest
// of the site.
const GLOBE_NODES: RegionGlobeInput[] = REGIONS.map((region) => ({
  name: region.hub ? region.name : region.name.toUpperCase(),
  hub: region.hub,
  angle: region.angle,
  dist: region.dist,
}));

/** `/company/where-we-work` — the regional-footprint page. Ten countries,
 * `[A]` verified in the Company Profile; what "operation" means per
 * non-Kenya country is `[C]`, not yet confirmed, so the copy here says
 * "regional footprint" and never implies equal delivery depth across all
 * ten (docs/01 §7.4). */
export default function WhereWeWorkPage() {
  return (
    <div className="wrap hairline" id="region">
      <section>
        <span className="eyebrow">Where we work</span>
        <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '20ch' }}>
          Ten countries. One operating base in Nairobi.
        </h2>
        <p className="lead" style={{ marginTop: 16, maxWidth: '60ch', color: 'var(--muted)', fontSize: 16 }}>
          GeoClim&rsquo;s footprint spans ten countries across East and Southern Africa, anchored by our operating
          base in Nairobi. We describe this as a regional footprint deliberately, not ten equal operations — the
          shape and depth of what we do varies by country, and we would rather say that plainly than let one map
          suggest the same thing everywhere.
        </p>

        <div className="region-wrap">
          <RegionSummary regions={REGIONS} />
          <div className="globe-panel">
            <WireGlobe width={520} height={460} cy={230} r={190} lat={8} lon={9} nodes={GLOBE_NODES} />
          </div>
        </div>
      </section>
    </div>
  );
}
