import type { CapabilityArea } from '@/content/company';

/** Plain list of GeoClim's four capability areas — deliberately not styled
 * as clickable cards/CTAs. docs/08: this is the business-model layer (how
 * work is organised and delivered), not a top-level buyer-facing nav. */
export default function CapabilityList({ areas }: { areas: CapabilityArea[] }) {
  return (
    <ul className="capability-list">
      {areas.map((area, i) => (
        <li key={area.id}>
          <span className="capability-index mono">{String(i + 1).padStart(2, '0')}</span>
          <span className="capability-name">{area.name}</span>
        </li>
      ))}
    </ul>
  );
}
