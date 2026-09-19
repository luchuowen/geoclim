import { REGIONAL_OPS } from '@/content/site';

/** `.region-strip` — used on About and Contact, ported verbatim from the
 * artifact. */
export default function RegionStrip() {
  return (
    <div className="region-strip">
      <div className="rs-inner">
        <b>Regional operation</b>
        <span className="region-chip hq">Kenya — HQ</span>
        {REGIONAL_OPS.map((r) => (
          <span key={r} className="region-chip">
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}
