import { REGIONAL_OPS } from '@/content/site';

const FLAGS: Record<string, string> = {
  Kenya: '🇰🇪',
  Uganda: '🇺🇬',
  Tanzania: '🇹🇿',
  Rwanda: '🇷🇼',
  Ethiopia: '🇪🇹',
  Zambia: '🇿🇲',
  Malawi: '🇲🇼',
  DRC: '🇨🇩',
  Mozambique: '🇲🇿',
  Zimbabwe: '🇿🇼',
};

/** `.region-strip` — used on About and Contact, ported verbatim from the
 * artifact. */
export default function RegionStrip() {
  return (
    <div className="region-strip">
      <div className="rs-inner">
        <b>Regional operation</b>
        <div className="rs-flags">
          <span className="rs-flag hq" data-tip="Kenya — HQ" tabIndex={0}>
            <span className="rs-flag-inner" aria-hidden="true">
              {FLAGS.Kenya}
            </span>
            <span className="sr-only">Kenya — HQ</span>
          </span>
          {REGIONAL_OPS.map((r) => (
            <span key={r} className="rs-flag" data-tip={r} tabIndex={0}>
              <span className="rs-flag-inner" aria-hidden="true">
                {FLAGS[r]}
              </span>
              <span className="sr-only">{r}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
