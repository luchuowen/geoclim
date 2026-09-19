import Link from 'next/link';
import { SECTOR_ICON_PATHS } from './sectorIcons';
import type { SectorContent } from '@/content/sectors';

export interface SectorCardProps {
  sector: SectorContent;
}

/** `.sector-card` — one tile in the `/sectors` hub grid. Ported from
 * reference/geoclim_spatial_register.html's `.sector-card` markup, made
 * clickable (the mockup's card was static) since it now links through to
 * the sector's own page. */
export default function SectorCard({ sector }: SectorCardProps) {
  const iconPath = SECTOR_ICON_PATHS[sector.iconKey];

  return (
    <Link href={`/sectors/${sector.slug}`} className="sector-card">
      {iconPath && (
        <svg className="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
          <path d={iconPath} />
        </svg>
      )}
      <h3>{sector.name}</h3>
      <p>{sector.description}</p>
      <div className="sector-tags">
        {sector.tags.map((tag) => (
          <span key={tag} className="seg-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
