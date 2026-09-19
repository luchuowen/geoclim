/** Shared SVG <defs> (hero glow gradient + noise texture filter) used by
 * every page's hero via <div class="hero-tex">. Rendered once per page,
 * referenced by id="glow" / id="tex" — matches the artifact 1:1. */
export default function SharedDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#1c2340" />
          <stop offset="55%" stopColor="#0e1020" />
          <stop offset="100%" stopColor="#0a0c10" />
        </radialGradient>
        <filter id="tex">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves={3} seed={7} result="n" />
          <feColorMatrix
            in="n"
            type="matrix"
            values="0 0 0 0 0.43  0 0 0 0 0.9  0 0 0 0 0.78  0 0 0 0.05 0"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function HeroTexture() {
  return (
    <div className="hero-tex">
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="url(#glow)" />
        <rect width="100%" height="100%" filter="url(#tex)" />
      </svg>
    </div>
  );
}

/** Photographic hero background — rendered before <HeroTexture /> so the
 * glow/noise layer sits on top and blends with it (see .has-photo rules in
 * globals.css). Pass the /images/*.jpg path. */
export function HeroPhoto({ src }: { src: string }) {
  return <div className="hero-photo" style={{ backgroundImage: `url(${src})` }} aria-hidden="true" />;
}

/** One-shot animated contour/grid overlay for photographic heroes — a set of
 * survey contour lines draw themselves in, a few data points pulse on, and a
 * soft light sweep crosses once. Purely decorative, purposeful (reads as
 * "mapping the terrain"), respects prefers-reduced-motion via CSS. Render
 * between <HeroPhoto /> and <HeroTexture />. */
export function HeroScan() {
  return (
    <div className="hero-scan" aria-hidden="true">
      <svg className="hs-svg" viewBox="0 0 1200 700" preserveAspectRatio="none">
        <g fill="none" stroke="#6ee7c7" strokeWidth={1.1}>
          <path className="hs-line" style={{ animationDelay: '0.1s' }} pathLength={1} d="M-50,540 C 220,500 420,580 660,520 S 1120,460 1300,500" />
          <path className="hs-line" style={{ animationDelay: '0.35s' }} pathLength={1} d="M-50,440 C 260,400 460,460 720,410 S 1080,360 1300,400" />
          <path className="hs-line" style={{ animationDelay: '0.6s' }} pathLength={1} d="M-50,610 C 300,590 520,650 800,600 S 1160,550 1300,590" />
        </g>
        <g fill="#6ee7c7">
          <circle className="hs-pt" style={{ animationDelay: '1.05s' }} cx="340" cy="210" r="3.2" />
          <circle className="hs-pt" style={{ animationDelay: '1.25s' }} cx="760" cy="150" r="3.2" />
          <circle className="hs-pt" style={{ animationDelay: '1.45s' }} cx="980" cy="300" r="3.2" />
        </g>
      </svg>
      <div className="hs-sweep" />
    </div>
  );
}
