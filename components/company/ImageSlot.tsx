export interface ImageSlotProps {
  /** Eventual asset path, following the `/images/{slot-name}-01.jpg`
   * convention (.claude/rules/content-discipline.md) — the NanoBanana pack
   * (docs/11) will drop the real file in at this exact path later. Not
   * rendered as a `src` yet since the file doesn't exist: a real `<img>`
   * pointing at a missing file renders a broken-image icon, which the
   * content-discipline rule explicitly forbids. */
  futureSrc: string;
  /** Describes the real photograph this slot will hold once the asset pack
   * lands — used as the placeholder's accessible label now, and is the
   * `alt` text the future `<img>` should ship with. */
  alt: string;
  /** CSS aspect-ratio value, e.g. "3 / 2". */
  aspectRatio?: string;
  className?: string;
}

/** Honest placeholder for an image slot whose asset doesn't exist yet.
 * Renders a `var(--panel)` box sized to the real aspect ratio with the
 * intended alt text as a visible caption — never a stock photo standing in,
 * never a broken `<img>`. Swap for a real `next/image`/`<img
 * src={futureSrc}>` with zero layout change once the file lands. */
export default function ImageSlot({ futureSrc, alt, aspectRatio = '3 / 2', className }: ImageSlotProps) {
  return (
    <figure
      className={['img-slot', className].filter(Boolean).join(' ')}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
      data-future-src={futureSrc}
    >
      <span className="img-slot-caption mono">Image pending — {alt}</span>
    </figure>
  );
}
