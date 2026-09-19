import '@/styles/components/proof-item.css';
import StatusMarker from '@/components/ui/StatusMarker';
import type { ProofEntry } from '@/content/proof';

export interface ProofItemProps {
  entry: ProofEntry;
}

/** One row of the `/proof` engagement list: sector tag, one-sentence
 * outcome, and a `StatusMarker` — never rendered without the marker (see
 * .claude/rules/content-discipline.md). When `entry.fullNarrative` exists
 * (no seed entry has it yet — all three are illustrative pending
 * confirmation) this also renders a "read the engagement" expansion into
 * `.proof-expand`; until then that slot stays reserved but empty, so the
 * grid layout doesn't need to change when real case detail lands.
 *
 * Deliberately does not use the shared `.reveal` scroll-in utility: its
 * `opacity:0` starting state depends on page-level IntersectionObserver
 * wiring this session doesn't own (see styles/base.css), and a status
 * marker must never depend on client JS running to become visible. */
export default function ProofItem({ entry }: ProofItemProps) {
  return (
    <div className="proof-item">
      <span className="proof-sector mono">{entry.sector}</span>
      <span className="proof-copy">{entry.copy}</span>
      <span className="proof-status">
        <StatusMarker status={entry.status} />
      </span>
      {entry.fullNarrative && (
        <div className="proof-expand">
          <p>{entry.fullNarrative}</p>
        </div>
      )}
    </div>
  );
}
