import Link from 'next/link';
import type { PlatformModuleContent } from '@/content/platform';

export interface ModuleRowProps {
  module: PlatformModuleContent;
  /** Entrance-animation delay, in seconds, matching the reference
   * mockup's staggered `.reveal` rows (e.g. 0.02, 0.08, 0.14 …). The hub
   * page composes this; the class itself is a sitewide primitive from
   * styles/base.css. */
  revealDelay?: number;
}

/** One row of the platform hub's module list: `.module-row` ported from
 * the reference mockup, made into a link to the module's detail page. */
export default function ModuleRow({ module: mod, revealDelay }: ModuleRowProps) {
  const style = revealDelay !== undefined ? { transitionDelay: `${revealDelay}s` } : undefined;

  return (
    <Link href={`/platform/${mod.slug}`} className="module-row reveal" style={style}>
      <span className="module-code">{mod.code}</span>
      <div className="module-body">
        <h3>{mod.name}</h3>
        <p>{mod.outcome}</p>
      </div>
    </Link>
  );
}
