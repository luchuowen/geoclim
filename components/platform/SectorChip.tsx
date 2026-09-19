import Link from 'next/link';
import { getSectorBySlug } from '@/content/sectors';

export interface SectorChipProps {
  slug: string;
}

function fallbackLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Chip linking to a related sector's page by slug (`.seg-tag` visual
 * pattern from the reference mockup, made clickable). Label comes straight
 * from `content/sectors.ts` (Session 2, now wired in) rather than a
 * duplicated local copy, so it can never drift from the sector's real
 * name; `fallbackLabel` only covers a slug that somehow doesn't resolve. */
export default function SectorChip({ slug }: SectorChipProps) {
  const sector = getSectorBySlug(slug);
  const label = sector?.name ?? fallbackLabel(slug);

  return (
    <Link href={`/sectors/${slug}`} className="sector-chip">
      {label}
    </Link>
  );
}
