import { SECTOR_ICON_PATHS } from './sectorIcons';

export interface SectorHeaderProps {
  name: string;
  iconKey: string;
  /** One-sentence problem statement (docs/05 content table, evidence tier
   * [B]) shown as the header's sub-headline. No stock image here by
   * design — wash-gradient background only. */
  problemStatement: string;
}

/** Sector detail page header: eyebrow, sector name as H1, problem statement
 * sub-headline, on the shared `.sector-wash` gradient band (values ported
 * verbatim from reference/geoclim_spatial_register.html's `.hero`
 * background — see styles/components/sector-card.css). */
export default function SectorHeader({ name, iconKey, problemStatement }: SectorHeaderProps) {
  const iconPath = SECTOR_ICON_PATHS[iconKey];

  return (
    <div className="sector-wash">
      <div className="wrap sector-header">
        <span className="eyebrow">Sectors</span>
        {iconPath && (
          <svg
            className="sector-header-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.3}
            aria-hidden="true"
          >
            <path d={iconPath} />
          </svg>
        )}
        <h1 className="sector-header-title">{name}</h1>
        <p className="sector-header-sub">{problemStatement}</p>
      </div>
    </div>
  );
}
