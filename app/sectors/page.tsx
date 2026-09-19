import type { Metadata } from 'next';
import SectorCard from '@/components/sectors/SectorCard';
import { sectors } from '@/content/sectors';
import '@/styles/components/sector-card.css';

export const metadata: Metadata = {
  title: 'Sectors — GeoClim East Africa',
  description:
    'Geospatial intelligence for the six sectors GeoClim serves across East Africa: agriculture, utilities, government, climate, insurance and transport.',
};

/** `/sectors` hub: eyebrow + heading + intro, then the six-card grid.
 * `.sector-grid`/`.sector-card` are ported verbatim from
 * reference/geoclim_spatial_register.html (see styles/components/sector-card.css). */
export default function SectorsPage() {
  return (
    <main>
      <div className="sector-wash">
        <div className="wrap sector-hub-head">
          <span className="eyebrow">Sectors</span>
          <h1 className="sector-hub-title">Built around the problems that matter here.</h1>
          <p className="sector-hub-lead">
            Most organisations know their problem before they know a product name. Start with yours.
          </p>
        </div>
      </div>
      <div className="wrap hairline">
        <section>
          <div className="sector-grid">
            {sectors.map((sector) => (
              <SectorCard key={sector.slug} sector={sector} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
