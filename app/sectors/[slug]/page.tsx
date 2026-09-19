import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DataPanel from '@/components/ui/DataPanel';
import SectorHeader from '@/components/sectors/SectorHeader';
import ModuleChip from '@/components/sectors/ModuleChip';
import SectorCtaBand from '@/components/sectors/SectorCtaBand';
import { sectors, getSectorBySlug } from '@/content/sectors';
import '@/styles/components/sector-card.css';

export const dynamicParams = false;

export async function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug);
  if (!sector) return {};

  return {
    title: `${sector.name} — GeoClim East Africa`,
    description: sector.problemStatement,
  };
}

/** `/sectors/[slug]` — the sector page template, statically generated for
 * all six sectors (docs/05 §3 structure, followed exactly):
 * header → the problem → GeoClim's approach → relevant platform module(s)
 * → data panel + image slot → proof status → CTA band. */
export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) notFound();

  return (
    <main>
      <SectorHeader name={sector.name} iconKey={sector.iconKey} problemStatement={sector.problemStatement} />

      <div className="wrap hairline">
        <section className="sector-copy-section">
          <div className="sector-copy-block">
            <span className="eyebrow">The problem</span>
            <p className="sector-lead">{sector.problemExpanded}</p>
          </div>
          <div className="sector-copy-block">
            <span className="eyebrow">GeoClim&rsquo;s approach</span>
            <p className="sector-lead">{sector.approach}</p>
          </div>
        </section>
      </div>

      <div className="wrap hairline">
        <section>
          <span className="eyebrow">Relevant platform module{sector.relatedModules.length > 1 ? 's' : ''}</span>
          <h2 className="sector-h2">Where this sits in the GeoClim platform.</h2>
          <div className="sector-modules">
            {sector.relatedModules.map((module) => (
              <ModuleChip key={module.slug} module={module} />
            ))}
          </div>
        </section>
      </div>

      <div className="wrap hairline">
        <section>
          <span className="eyebrow">Illustrative view</span>
          <h2 className="sector-h2">What this looks like on the ground.</h2>
          <div className="sector-media-grid">
            <DataPanel seed={sector.panel.seed} caption={sector.panel.caption} status="ILLUS." coordLabel={sector.panel.coordLabel} />
            <figure className="sector-photo">
              {/* Placeholder slot: the file at /images/sector-{slug}-01.jpg doesn't
                  exist yet and ships later via the NanoBanana image pack (docs/05,
                  .claude/rules/content-discipline.md). Rendered as a plain
                  panel with an accessible label rather than an <img> pointing at
                  a missing file, which would show a broken-image icon on every
                  sector page — same "never a broken <img>" rule ImageSlot follows. */}
              <div className="sector-photo-img" role="img" aria-label={sector.imageAlt} data-future-src={`/images/sector-${sector.slug}-01.jpg`} />
              <figcaption className="sector-photo-caption mono">{sector.imageAlt}</figcaption>
            </figure>
          </div>
        </section>
      </div>

      <div className="wrap hairline">
        <section>
          <span className="eyebrow">Proof</span>
          <h2 className="sector-h2">Shown honestly, not oversold.</h2>
          <div className="sector-proof-row">
            <span className="sector-proof-label mono">{sector.name.toUpperCase()}</span>
            <span className="sector-proof-copy">No verified engagement in this sector yet.</span>
            <span className="sector-proof-status mono">AWAITING FIRST ENGAGEMENT</span>
          </div>
        </section>
      </div>

      <SectorCtaBand
        heading={`${sector.name} — a problem worth solving properly?`}
        sub="Government, enterprise, utility or partnership — tell us the problem and we'll tell you plainly whether GeoClim is the right fit."
        primary={{ href: '/contact', label: 'Government & Public Sector' }}
        secondary={{ href: '/contact', label: 'Enterprise & Partnerships' }}
      />
    </main>
  );
}
