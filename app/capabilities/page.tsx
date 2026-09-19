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
  { title: 'SYSTEM INTEGRATION', body: 'Seamless enterprise and spatial data integration across existing systems.' },
  { title: 'PRECISION AGRICULTURE', body: 'AI-driven crop health, soil monitoring, and yield forecasting.' },
  { title: 'SPATIAL DATA INTELLIGENCE', body: "Turning large geospatial datasets into decisions teams can act on." },
  { title: 'AI FUSION', body: 'Embedding AI into decision systems for predictive and prescriptive analytics.' },
  { title: 'CROP MONITORING', body: 'Satellite, UAV, and IoT-enabled monitoring for better farm management.' },
  { title: 'APP CONFIGURATION', body: 'Custom-built apps for field operations, customer engagement, and asset tracking.' },
  { title: 'GEO-FARM PLATFORMS', body: 'Digital ecosystems supporting farmers, cooperatives, and agribusinesses.' },
  { title: 'GEO-ANALYTICS', body: 'Spatial intelligence for business expansion, policy, and infrastructure planning.' },
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

      <div className="grid-cards">
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
        <div className="triad-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {SOLUTIONS.map((s) => (
            <div className="triad-card" key={s.title}>
              <h3>{s.title}</h3>
              <p className="sub" style={{ marginTop: 12 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-head" style={{ paddingTop: 90 }}>
        <div className="kicker">The platforms</div>
        <h2>What&apos;s actually running underneath</h2>
        <p>Two named technology partnerships — not a generic &quot;AI-powered&quot; claim.</p>
      </section>

      <div className="partner-block">
        <div className="partner-mark">
          <div>
            <div className="pm-word">Penta-B</div>
            <div className="pm-tag">Geo-Enterprise Platforms</div>
          </div>
          <p className="pm-desc">Advanced geo-enabled enterprise ecosystem for secure, scalable, multilingual GIS applications.</p>
        </div>
        <div className="partner-detail">
          <h3>Included platforms</h3>
          <ul>
            <li>
              <b>Maps &amp; Apps (MNA)</b> — multi-tenant enterprise GIS application platform
            </li>
            <li>
              <b>PBPM</b> — geo-enabled business process and workflow automation suite
            </li>
            <li>
              <b>SMART &amp; Real-Time GIS</b> — real-time, 3D, and IoT spatial intelligence
            </li>
            <li>
              <b>PSIM</b> — geo-enabled incident and emergency management platform
            </li>
          </ul>
        </div>
      </div>

      <div className="partner-block">
        <div className="partner-mark">
          <div>
            <div className="pm-word">RockEye</div>
            <div className="pm-tag">Intelligent ERP Platform</div>
          </div>
          <p className="pm-desc">GIS-enabled enterprise resource planning, combining operational systems with spatial intelligence.</p>
        </div>
        <div className="partner-detail">
          <h3>Capabilities</h3>
          <ul>
            <li>AI-powered ERP analytics</li>
            <li>Real-time operational dashboards</li>
            <li>Workflow automation &amp; RPA</li>
            <li>Asset &amp; inventory intelligence</li>
            <li>Supply chain &amp; logistics optimization</li>
            <li>Predictive maintenance</li>
            <li>Multi-sector ERP suites — Oil &amp; Gas, Manufacturing, Supply Chain, Enterprise Operations</li>
          </ul>
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
