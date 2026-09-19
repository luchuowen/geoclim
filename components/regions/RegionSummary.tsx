import '@/styles/components/region.css';
import type { Region } from '@/content/types';

export interface RegionSummaryProps {
  regions: Region[];
}

/** Mono "region-readout" block: a big country count followed by the
 * mono country list, hub (Nairobi) called out as "(HQ)". Ported from the
 * reference mockup's `.region-readout` — the mockup's count-up-on-scroll
 * animation is decorative, client-only progressive enhancement and is
 * intentionally not reproduced here, matching how `WireGlobe` renders its
 * sphere at its settled, final state. */
export default function RegionSummary({ regions }: RegionSummaryProps) {
  return (
    <div className="region-readout">
      <span className="big">{regions.length}</span>
      <span>COUNTRIES OF REGIONAL FOOTPRINT</span>
      <span className="region-list">
        {regions.map((region, i) => (
          <span key={region.id}>
            {region.name}
            {region.hub ? ' (HQ)' : ''}
            {i < regions.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </span>
    </div>
  );
}
