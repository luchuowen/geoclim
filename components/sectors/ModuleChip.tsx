import Link from 'next/link';
import type { SectorModuleRef } from '@/content/sectors';

export interface ModuleChipProps {
  module: SectorModuleRef;
}

/** Small pill linking a sector page to a platform module by slug
 * (`/platform/[slug]`). Renders the code/name carried on the sector's own
 * `relatedModules` entry (content/sectors.ts), which is kept in sync with
 * the real module data in content/platform.ts. Shows just the module's
 * short code and name. */
export default function ModuleChip({ module }: ModuleChipProps) {
  return (
    <Link href={`/platform/${module.slug}`} className="module-chip">
      <span className="module-chip-code mono">{module.code}</span>
      <span className="module-chip-name">{module.name}</span>
    </Link>
  );
}
