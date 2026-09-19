import Button from './Button';

export interface CtaBandButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface CtaBandProps {
  eyebrow: string;
  heading: string;
  sub: string;
  buttons: CtaBandButton[];
}

/** Segmented CTA band — ported verbatim from the reference mockup's
 * `.cta-band` section (eyebrow, heading, sub-copy, a row of buttons).
 * Contributed by Session 1 (components/home) as a new shared component
 * under `components/ui/`, not an edit to a Session-0-owned file — see
 * docs/04_session_1_homepage.md and CLAUDE.md "File ownership". Sessions 2
 * and 3 can reuse this directly for their own page-foot CTA bands. */
export default function CtaBand({ eyebrow, heading, sub, buttons }: CtaBandProps) {
  return (
    <div id="cta" className="hairline">
      <div className="cta-band">
        <div className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            {eyebrow}
          </span>
          <h2 style={{ marginTop: 18 }}>{heading}</h2>
          <p className="hero-sub">{sub}</p>
          <div className="hero-ctas">
            {buttons.map((btn) => (
              <Button key={btn.label} variant={btn.variant} href={btn.href}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
