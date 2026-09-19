import Button from '../ui/Button';
import Pill from '../ui/Pill';
import WireGlobe from '../ui/WireGlobe';
import { HERO, HERO_TAGS } from '../../content/home';

function TagIcon({ tag }: { tag: (typeof HERO_TAGS)[number] }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      {tag.iconCircle && <circle cx={tag.iconCircle.cx} cy={tag.iconCircle.cy} r={tag.iconCircle.r} />}
      {tag.iconPaths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/** Homepage hero: pill tags, H1, sub-copy, primary/secondary CTAs and the
 * hero variant of `<WireGlobe/>` — ported verbatim from the reference
 * mockup's `.hero` section. */
export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-tags">
          {HERO_TAGS.map((tag) => (
            <Pill key={tag.label} icon={<TagIcon tag={tag} />} label={tag.label} />
          ))}
        </div>
        <h1>{HERO.h1}</h1>
        <p className="hero-sub">{HERO.sub}</p>
        <div className="hero-ctas">
          <Button variant="primary" href={HERO.ctaPrimary.href}>
            {HERO.ctaPrimary.label}
          </Button>
          <Button variant="secondary" href={HERO.ctaSecondary.href}>
            {HERO.ctaSecondary.label}
          </Button>
        </div>
      </div>
      <div className="hero-globe-wrap">
        <WireGlobe />
      </div>
    </section>
  );
}
