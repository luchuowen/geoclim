/** The approved brand mark: a solid teal disc with a diagonal cut (the
 * abstracted successor to the old stock-globe/ribbon logo), paired with
 * "GeoClim" set in Inter (no italic) and, where there's room, a small
 * "EAST AFRICA" caption letter-spaced to justify to the exact width of
 * the wordmark above it. See BrandLogo's `tagline` prop. */

const CAPTION_CHARS = ['E', 'A', 'S', 'T', 'gap', 'A', 'F', 'R', 'I', 'C', 'A'] as const;

export function BrandIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" className="brand-icon" aria-hidden="true">
      <circle cx="22" cy="22" r="18" className="brand-icon-fill" />
      <rect x="-6" y="18.5" width="56" height="7.5" className="brand-icon-cut" transform="rotate(-18 22 22)" />
      <rect x="-6" y="17.8" width="56" height="1.3" className="brand-icon-edge" transform="rotate(-18 22 22)" />
    </svg>
  );
}

interface BrandLogoProps {
  /** Show the small justified "EAST AFRICA" caption under the name.
   * Off by default for tight chrome (nav bar, mobile sheet header);
   * turn on for the footer or anywhere the lockup has room to breathe. */
  tagline?: boolean;
  size?: number;
}

export default function BrandLogo({ tagline = false, size = 26 }: BrandLogoProps) {
  return (
    <span className="brand-lockup">
      <BrandIcon size={size} />
      <span className="brand-text">
        <span className="brand-name">GeoClim</span>
        {tagline && (
          <span className="brand-caption">
            {CAPTION_CHARS.map((ch, i) =>
              ch === 'gap' ? <span key={i} className="brand-caption-gap" /> : <span key={i}>{ch}</span>,
            )}
          </span>
        )}
      </span>
    </span>
  );
}
