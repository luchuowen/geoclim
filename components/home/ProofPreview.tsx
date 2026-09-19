import Reveal from './Reveal';
import { PROOF_ENTRIES, PROOF_PREVIEW } from '../../content/home';

const DELAY_STEP = 0.08;
const DELAY_START = 0.02;

// TODO: swap `.proof-status` for the shared components/ui/StatusMarker.tsx
// once Session 4 lands (.claude/rules/content-discipline.md) — every entry
// here is `[C]` (ILLUSTRATIVE · PENDING CONFIRMATION) and already ships
// with a visible mono status marker per that rule, just not yet the shared
// component.
/** Three-entry proof preview — ported verbatim from the reference mockup's
 * `#proof` section. Entries are hard-coded here pending `content/proof.ts`
 * (Session 4). */
export default function ProofPreview() {
  return (
    <div className="wrap hairline" id="proof">
      <section>
        <span className="eyebrow">{PROOF_PREVIEW.eyebrow}</span>
        <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '20ch' }}>{PROOF_PREVIEW.heading}</h2>
        <p className="lead" style={{ marginTop: 16, maxWidth: '60ch', color: 'var(--muted)', fontSize: 16 }}>
          {PROOF_PREVIEW.lead}
        </p>
        <div className="proof-list">
          {PROOF_ENTRIES.map((entry, i) => (
            <Reveal key={entry.id} className="proof-item" delay={`${(DELAY_START + i * DELAY_STEP).toFixed(2)}s`}>
              <span className="proof-sector">{entry.sector}</span>
              <span className="proof-copy">{entry.copy}</span>
              <span className="proof-status">{entry.status}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
