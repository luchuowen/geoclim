import Link from 'next/link';
import type { SectorModuleRef } from '@/content/sectors';

export interface ModuleChipProps {
  module: SectorModuleRef;
}

/** Small pill linking a sector page to a platform module by slug only
 * (`/platform/[slug]`) — the module's own content belongs to Session 3's
 * `content/platform.ts`, which does not exist yet and is never imported
 * here. Shows just the module's short code and name. */
export default function ModuleChip({ module }: ModuleChipProps) {
  return (
    <Link href={`/platform/${module.slug}`} className="module-chip">
      <span className="module-chip-code mono">{module.code}</span>
      <span className="module-chip-name">{module.name}</span>
    </Link>
  );
}
