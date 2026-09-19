import Button from '@/components/ui/Button';

// `components/ui/CtaBand.tsx` is not guaranteed to exist in this worktree
// (docs/06 / .claude/rules/file-ownership.md — a sibling session may add
// it, but this branch can't see that). This is a minimal local fallback
// scoped to `components/platform/**`, which this session owns; it is not
// the shared component and nothing here creates that shared file.
export interface PlatformCtaBandProps {
  eyebrow: string;
  heading: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export default function PlatformCtaBand({
  eyebrow,
  heading,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PlatformCtaBandProps) {
  return (
    <div className="hairline">
      <div className="platform-cta">
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p className="cta-sub">{sub}</p>
          <div className="cta-actions">
            <Button variant="primary" href={primaryHref}>
              {primaryLabel}
            </Button>
            <Button variant="secondary" href={secondaryHref}>
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
