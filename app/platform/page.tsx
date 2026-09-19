import type { Metadata } from 'next';
import { platformModules } from '@/content/platform';
import ModuleRow from '@/components/platform/ModuleRow';
import '@/styles/components/module-row.css';

export const metadata: Metadata = {
  title: 'Platform | GeoClim East Africa',
  description:
    'Five geospatial and operations-intelligence modules — Maps & Apps, Geo-enabled workflow, Real-time mapping, Incident & emergency management and RockEye ERP — that make up the GeoClim platform.',
};

export default function PlatformPage() {
  return (
    <main>
      <div className="wrap hairline">
        <section>
          <span className="eyebrow">Platform</span>
          <div className="platform-intro">
            <h1>One platform, five capabilities.</h1>
            <p className="lead">
              GeoClim&rsquo;s platform is built on Penta-B &mdash; Maps &amp; Apps, Geo-enabled workflow,
              Real-time mapping and Incident &amp; emergency management &mdash; paired with RockEye ERP for
              operations intelligence. The five capabilities below are how that stack shows up in an
              engagement, from a single mapping app on a field officer&rsquo;s phone to organisation-wide
              asset and workflow intelligence.
            </p>
          </div>

          <div className="modules">
            {platformModules.map((mod, i) => (
              <ModuleRow key={mod.id} module={mod} revealDelay={0.02 + i * 0.06} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
