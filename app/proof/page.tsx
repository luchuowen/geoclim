import type { Metadata } from 'next';
import '@/styles/components/proof-item.css';
import '@/styles/components/cta-band.css';
import Button from '@/components/ui/Button';
import ProofItem from '@/components/proof/ProofItem';
import { PROOF_ENTRIES } from '@/content/proof';

export const metadata: Metadata = {
  title: 'Proof | GeoClim East Africa',
  description:
    "Shown honestly, not oversold: GeoClim's engagements, each carrying a visible status marker rather than an unverified claim.",
};

/** `/proof` — the honesty-device page. Every engagement listed here is
 * `[C]`, needs client confirmation, so every one ships with a visible
 * `StatusMarker` reading `ILLUSTRATIVE · PENDING CONFIRMATION` (via
 * `ProofItem`) — see .claude/rules/content-discipline.md. Nothing here is
 * upgraded to `VERIFIED` until a real, cleared case exists. */
export default function ProofPage() {
  return (
    <>
      <div className="wrap hairline" id="proof">
        <section>
          <span className="eyebrow">Proof</span>
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginTop: 18, maxWidth: '20ch' }}>
            Shown honestly, not oversold.
          </h2>
          <p className="lead" style={{ marginTop: 16, maxWidth: '60ch', color: 'var(--muted)', fontSize: 16 }}>
            Every engagement below carries a status marker. Where GeoClim has client-confirmed outcomes, they will
            say so plainly. Where a figure is representative pending confirmation, the site will say that too.
          </p>

          <div className="proof-explainer">
            <p>
              Every engagement on this page carries a status marker. We would rather tell you plainly that a figure
              is illustrative than let a placeholder read as a claim.
            </p>
          </div>

          <div className="proof-list">
            {PROOF_ENTRIES.map((entry) => (
              <ProofItem key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      </div>

      <div className="hairline">
        <div className="cta-band">
          <div className="wrap">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>
              Get in touch
            </span>
            <h2 style={{ marginTop: 18 }}>Have a spatial problem worth solving properly?</h2>
            <p className="cta-sub">
              Government, enterprise, utility or partnership — tell us the problem and we&rsquo;ll tell you plainly
              whether GeoClim is the right fit.
            </p>
            <div className="cta-actions">
              <Button variant="primary" href="/contact">
                Government &amp; Public Sector
              </Button>
              <Button variant="secondary" href="/contact">
                Enterprise &amp; Partnerships
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
