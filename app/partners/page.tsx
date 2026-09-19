import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';

export const metadata: Metadata = {
  title: 'Partners — GeoClim East Africa',
  description: 'Named technology partnerships with Penta-B and RockEye ERP, plus the wider public sector, private sector, and research ecosystem.',
};

export default function PartnersPage() {
  return (
    <>
      <SharedDefs />
      <header className="page-hero">
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> Partners
          </div>
          <h1>
            Who we build <span className="accent">with.</span>
          </h1>
          <p>
            Two named technology partnerships anchor the platform. Everyone else we work alongside is grouped
            honestly, by relationship — not padded with logos we can&apos;t stand behind.
          </p>
        </div>
      </header>

      <section className="section-head">
        <div className="kicker">Technology partners</div>
        <h2>Named, not implied</h2>
      </section>
      <div className="partner-block">
        <div className="partner-mark">
          <div>
            <div className="pm-word">Penta-B</div>
            <div className="pm-tag">Geo-Enterprise Platforms</div>
          </div>
          <p className="pm-desc">Maps &amp; Apps, PBPM, SMART Real-Time GIS, and PSIM — GeoClim is a regional delivery partner for the full suite.</p>
        </div>
        <div className="partner-detail">
          <h3>Where it shows up</h3>
          <ul>
            <li>Enterprise GIS deployments</li>
            <li>Workflow &amp; incident management</li>
            <li>Multilingual public-sector applications</li>
            <li>Real-time 3D + IoT spatial systems</li>
          </ul>
        </div>
      </div>
      <div className="partner-block">
        <div className="partner-mark">
          <div>
            <div className="pm-word">RockEye</div>
            <div className="pm-tag">Intelligent ERP Platform</div>
          </div>
          <p className="pm-desc">GIS-enabled ERP — GeoClim integrates RockEye into operational systems across utilities, agriculture, and enterprise clients.</p>
        </div>
        <div className="partner-detail">
          <h3>Where it shows up</h3>
          <ul>
            <li>Asset &amp; inventory intelligence</li>
            <li>Predictive maintenance programs</li>
            <li>Supply chain &amp; logistics optimization</li>
            <li>Oil &amp; Gas, Manufacturing, Enterprise Operations suites</li>
          </ul>
        </div>
      </div>

      <section className="section-head" style={{ paddingTop: 20 }}>
        <div className="kicker">The wider ecosystem</div>
        <h2>Public sector, private sector, research</h2>
      </section>
      <div className="grid-cards cards-3">
        <div className="info-card">
          <h3>Public Sector</h3>
          <p>Governments, regulators, and utilities across our ten operating markets.</p>
        </div>
        <div className="info-card">
          <h3>Private Sector</h3>
          <p>Retail, agriculture, banking, and energy companies building on the platform.</p>
        </div>
        <div className="info-card">
          <h3>Research &amp; Academia</h3>
          <p>Collaboration on innovation and talent development with regional institutions.</p>
        </div>
      </div>

      <section className="cta-band">
        <h2>Interested in partnering with GeoClim?</h2>
        <p>Technology providers, public agencies, and research institutions — reach out directly.</p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
