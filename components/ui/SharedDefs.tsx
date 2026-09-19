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
