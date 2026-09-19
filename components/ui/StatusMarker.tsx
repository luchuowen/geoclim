import '@/styles/components/status-marker.css';
import type { EvidenceStatus } from '@/content/types';

export interface StatusMarkerProps {
  status: EvidenceStatus;
  className?: string;
}

/** GeoClim's sitewide "honesty device": a visible, mono-font tag reading
 * `VERIFIED` or `ILLUSTRATIVE · PENDING CONFIRMATION`. Every `[C]`-tagged
 * claim ships with one of these attached, in place, never as a bare
 * number or statement — this is a deliberate brand mechanism, not a legal
 * caveat, so it is never hidden, softened or shrunk (see
 * .claude/rules/content-discipline.md). Shared under `components/ui/`
 * because every future session that ships an unconfirmed figure reuses
 * this same component. */
export default function StatusMarker({ status, className }: StatusMarkerProps) {
  const verified = status === 'VERIFIED';
  const cls = ['status-marker', verified ? 'status-marker--verified' : 'status-marker--illustrative', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={cls} role="status">
      {status}
    </span>
  );
}
