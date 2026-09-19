import type { Metadata } from 'next';
import Link from 'next/link';
import '../../../styles/components/company.css';

export const metadata: Metadata = {
  title: 'Partnerships | GeoClim East Africa',
  description: "GeoClim's platform partnerships.",
};

// Evidence discipline (docs/08, .claude/rules/content-discipline.md): the
// only partnerships evidenced anywhere in source material are Penta-B and
// RockEye, which the platform is built on. No other partner names or logos
// exist in any source reviewed. The current live site fills this page with
// four empty "partnership category" cards and zero real names — that is
// called out explicitly as a failure not to repeat here. Do not add
// category tiles or placeholder logos; state what's real and stop.
export default function PartnershipsPage() {
  return (
    <main>
      <section>
        <div className="wrap co-quiet">
          <span className="eyebrow">Company</span>
          <h1>Partnerships</h1>
          <p>
            GeoClim&rsquo;s platform is built on two named technology partnerships: Penta-B and RockEye. Together
            they underpin the mapping, workflow, real-time GIS, incident-management, and AI operations-intelligence
            capabilities described on the{' '}
            <Link href="/platform" style={{ color: 'var(--accent)' }}>
              platform
            </Link>{' '}
            page.
          </p>
          <div className="co-partner-name">
            <span>Penta-B</span>
            <span>RockEye</span>
          </div>
          <p className="co-note">
            Additional partnerships will be listed here as they are confirmed. GeoClim does not list unnamed or
            placeholder partners.
          </p>
        </div>
      </section>
    </main>
  );
}
