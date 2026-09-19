import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';

export const metadata: Metadata = {
  title: 'Capabilities — GeoClim East Africa',
  description: 'Professional services, software vending, technical advisory, and consulting — on the Penta-B and RockEye platform.',
};

const SERVICE_LINES = [
  { num: '01', title: 'Professional Services', body: 'End-to-end implementation, managed services, and training — from initial deployment through to internal team handover.' },
  { num: '02', title: 'Software Vending', body: 'Authorized regional solutions provider for Penta-B and RockEye platforms, with licensing, deployment, and support.' },
  { num: '03', title: 'Technical Advisory', body: 'GIS, AI, and enterprise architecture modernization strategy — for teams deciding what to build versus buy.' },
  { num: '04', title: 'Consulting', body: 'Sector-specific transformation programs for utilities, transport, natural resources, agriculture, finance, and retail.' },
];

const SOLUTIONS = [
  {
    title: 'SYSTEM INTEGRATION',
    body: 'Seamless enterprise and spatial data integration across existing systems.',
    icon: (
      <>
        <path d="M8 12h8M12 8v8" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    title: 'PRECISION AGRICULTURE',
    body: 'AI-driven crop health, soil monitoring, and yield forecasting.',
    icon: (
      <>
        <path d="M12 3c3 3 4 6 4 9a4 4 0 0 1-8 0c0-3 1-6 4-9z" />
        <path d="M12 21v-6" />
      </>
    ),
  },
  {
    title: 'SPATIAL DATA INTELLIGENCE',
    body: 'Turning large geospatial datasets into decisions teams can act on.',
    icon: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  },
  {
    title: 'AI FUSION',
    body: 'Embedding AI into decision systems for predictive and prescriptive analytics.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </>
    ),
  },
  {
    title: 'CROP MONITORING',
    body: 'Satellite, UAV, and IoT-enabled monitoring for better farm management.',
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
        <path d="M11 7h6a2 2 0 0 1 2 2v4" />
      </>
    ),
  },
  {
    title: 'APP CONFIGURATION',
    body: 'Custom-built apps for field operations, customer engagement, and asset tracking.',
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </>
    ),
  },
  {
    title: 'GEO-FARM PLATFORMS',
    body: 'Digital ecosystems supporting farmers, cooperatives, and agribusinesses.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
      </>
    ),
  },
  {
    title: 'GEO-ANALYTICS',
    body: 'Spatial intelligence for business expansion, policy, and infrastructure planning.',
    icon: <path d="M4 19h16M8 19V9M13 19V5M18 19v-7" />,
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <SharedDefs />
      <header className="page-hero">
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> Capabilities
          </div>
          <h1>
            Four ways we work. <span className="accent">One platform underneath.</span>
          </h1>
          <p>
            Professional services, software vending, technical advisory, and consulting — all delivered on the
            same Penta-B and RockEye foundation, tuned to each client&apos;s operating reality.
          </p>
        </div>
      </header>

      <div className="grid-cards cards-4">
        {SERVICE_LINES.map((s) => (
          <div className="info-card" key={s.num}>
            <div className="ic-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      <section className="triad">
        <div className="triad-head">Eight focused solutions, built to be combined rather than bought one at a time.</div>
        <div className="sol-grid">
          {SOLUTIONS.map((s) => (
            <div className="sol-card" key={s.title}>
              <div className="sol-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">{s.icon}</svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-head" style={{ paddingTop: 90 }}>
        <div className="kicker">The platforms</div>
        <h2>What&apos;s actually running underneath</h2>
        <p>Two named technology partnerships — not a generic &quot;AI-powered&quot; claim.</p>
      </section>

      <div className="partner-pair">
        <div className="partner-card">
          <div className="pc-head pc-penta">
            <div className="pc-name">Penta-B</div>
            <div className="pc-tag">Geo-Enterprise Platforms</div>
          </div>
          <div className="pc-body">
            <p className="pc-desc">
              Advanced geo-enabled enterprise ecosystem for secure, scalable, multilingual GIS applications.
            </p>
            <div className="pc-caps">
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">Maps &amp; Apps</div>
                  <div className="pc-cap-sub">Multi-tenant enterprise GIS</div>
                </div>
              </div>
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">PBPM</div>
                  <div className="pc-cap-sub">Workflow automation</div>
                </div>
              </div>
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">SMART GIS</div>
                  <div className="pc-cap-sub">3D + IoT intelligence</div>
                </div>
              </div>
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">PSIM</div>
                  <div className="pc-cap-sub">Incident management</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partner-card">
          <div className="pc-head pc-rockeye">
            <div className="pc-name">RockEye</div>
            <div className="pc-tag">Intelligent ERP Platform</div>
          </div>
          <div className="pc-body">
            <p className="pc-desc">
              GIS-enabled enterprise resource planning, combining operational systems with spatial intelligence.
            </p>
            <div className="pc-caps">
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">AI Analytics</div>
                  <div className="pc-cap-sub">Predictive ERP insights</div>
                </div>
              </div>
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">Live Dashboards</div>
                  <div className="pc-cap-sub">Real-time visibility</div>
                </div>
              </div>
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">Automation</div>
                  <div className="pc-cap-sub">RPA across workflows</div>
                </div>
              </div>
              <div className="pc-cap">
                <span className="pc-dot" aria-hidden="true" />
                <div>
                  <div className="pc-cap-label">Asset &amp; Supply</div>
                  <div className="pc-cap-sub">Inventory + logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="cta-band">
        <h2>Not sure which service line fits?</h2>
        <p>Most engagements start as advisory and grow into a full platform deployment.</p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Book a scoping call
          </Link>
        </div>
      </section>
    </>
  );
}
