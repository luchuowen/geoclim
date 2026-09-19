import Button from '@/components/ui/Button';

export interface SectorCtaBandProps {
  heading: string;
  sub: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}

/** TODO: replace with the shared `components/ui/CtaBand.tsx` once Session 1
 * publishes it (see docs/05 §3.8, .claude/rules/file-ownership.md). That
 * file did not exist in this worktree when this session ran, so this is a
 * minimal local fallback scoped to sector pages only — its CSS classes are
 * `sector-cta-*` (not the reference mockup's `.cta-band`/`.hero-sub`/
 * `.hero-ctas` names) specifically so it can't collide with the shared
 * component's own styling once that lands. Reuses the shared `Button`
 * component (components/ui/Button.tsx, Session 0) rather than re-styling
 * buttons locally. */
export default function SectorCtaBand({ heading, sub, primary, secondary }: SectorCtaBandProps) {
  return (
    <div className="hairline">
      <div className="sector-cta-band">
        <div className="wrap">
          <span className="eyebrow sector-cta-eyebrow">Get in touch</span>
          <h2 className="sector-cta-heading">{heading}</h2>
          <p className="sector-cta-sub">{sub}</p>
          <div className="sector-cta-actions">
            <Button href={primary.href} variant="primary">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
