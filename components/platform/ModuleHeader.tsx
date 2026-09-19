import type { PlatformModuleContent } from '@/content/platform';

export interface ModuleHeaderProps {
  module: PlatformModuleContent;
}

/** Module detail page header: mono product code, module name as the page's
 * `<h1>`, and the one-sentence outcome statement. */
export default function ModuleHeader({ module: mod }: ModuleHeaderProps) {
  return (
    <div className="module-header">
      <span className="module-code">{mod.code}</span>
      <h1>{mod.name}</h1>
      <p className="outcome">{mod.outcome}</p>
    </div>
  );
}
