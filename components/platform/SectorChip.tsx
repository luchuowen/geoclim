import Link from 'next/link';

export interface SectorChipProps {
  slug: string;
}

// Session 2 owns `content/sectors.ts` and it does not exist yet in this
// worktree, so this is a local, presentational-only label map — not a
// content source. It links by slug string alone, per docs/06 / the
// file-ownership rule ("link to /sectors/[slug] by slug string only, never
// import it"). The labels mirror the six sector names as they already
// appear, verbatim, in the nav mega-menu markup in
// reference/geoclim_spatial_register.html, so the chip text matches the
// eventual sector page title even before Session 2's content lands.
const SECTOR_LABELS: Record<string, string> = {
  'agriculture-food-systems': 'Agriculture & Food Systems',
  'utilities-infrastructure': 'Utilities & Infrastructure',
  'government-public-sector': 'Government & Public Sector',
  'climate-environment': 'Climate & Environment',
  'insurance-risk': 'Insurance & Risk',
  'transport-logistics': 'Transport & Logistics',
};

function fallbackLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Chip linking to a related sector's page by slug (`.seg-tag` visual
 * pattern from the reference mockup, made clickable). */
export default function SectorChip({ slug }: SectorChipProps) {
  const label = SECTOR_LABELS[slug] ?? fallbackLabel(slug);

  return (
    <Link href={`/sectors/${slug}`} className="sector-chip">
      {label}
    </Link>
  );
}
