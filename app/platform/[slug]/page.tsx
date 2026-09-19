import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { platformModules, getPlatformModuleBySlug } from '@/content/platform';
import ModuleHeader from '@/components/platform/ModuleHeader';
import SectorChip from '@/components/platform/SectorChip';
import PlatformCtaBand from '@/components/platform/PlatformCtaBand';
import DataPanel from '@/components/ui/DataPanel';
// data-panel.css is already loaded sitewide via app/globals.css (Session 0);
// only the platform-specific stylesheet needs importing here.
import '@/styles/components/module-row.css';

export function generateStaticParams() {
  return platformModules.map((mod) => ({ slug: mod.slug }));
}

// All five module pages come from this session's own data — an unknown
// slug is a genuine 404, not a case that needs client data to resolve.
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const mod = getPlatformModuleBySlug(params.slug);

  if (!mod) {
    return { title: 'Platform | GeoClim East Africa' };
  }

  return {
    title: `${mod.name} | Platform | GeoClim East Africa`,
    description: mod.outcome,
  };
}

export default function PlatformModulePage({ params }: { params: { slug: string } }) {
  const mod = getPlatformModuleBySlug(params.slug);

  if (!mod) {
    notFound();
  }

  return (
    <main>
      <div className="wrap hairline">
        <section>
          <ModuleHeader module={mod} />

          <div className="module-what">
            {mod.whatItDoes.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="module-panel">
            <DataPanel
              seed={mod.panel.seed}
              caption={mod.panel.caption}
              status={mod.panel.status}
              coordLabel={mod.panel.coordLabel}
            />
          </div>

          <div className="module-fit">
            <span className="fit-label">How it fits the platform</span>
            <p>{mod.fitStatement}</p>
          </div>

          <div className="module-sectors">
            <span className="sectors-label">Related sectors</span>
            <div className="sector-chip-list">
              {mod.relatedSectorSlugs.map((slug) => (
                <SectorChip key={slug} slug={slug} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <PlatformCtaBand
        eyebrow="Get in touch"
        heading="Have a spatial problem worth solving properly?"
        sub="Government, enterprise, utility or partnership — tell us the problem and we'll tell you plainly whether GeoClim is the right fit."
        primaryLabel="Government & Public Sector"
        primaryHref="/contact"
        secondaryLabel="Enterprise & Partnerships"
        secondaryHref="/contact"
      />
    </main>
  );
}
