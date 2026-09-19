import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture } from '@/components/ui/SharedDefs';
import RegionStrip from '@/components/ui/RegionStrip';

export const metadata: Metadata = {
  title: 'About — GeoClim East Africa',
  description: 'A regional professional services and technology company delivering geospatial intelligence, AI, and digital transformation across Africa, headquartered in Nairobi.',
};

const ADVANTAGES = [
  { title: 'GIS + ERP + workflow, one capability', body: 'Few regional players can integrate all three under one delivery team.' },
  { title: 'Regional delivery, global platforms', body: 'Local presence across ten markets, running on internationally proven technology.' },
  { title: 'Real-time and AI-driven', body: 'Operational intelligence, not static reporting.' },
  { title: 'Strong sector specialization', body: 'Utilities, agriculture, transport, natural resources, finance, and retail.' },
  { title: 'Secure, multilingual deployments', body: 'Built for public-sector and enterprise data requirements from day one.' },
  { title: 'Local expertise, continental reach', body: 'Multidisciplinary teams who understand African operating conditions.' },
];

export default function AboutPage() {
  return (
    <>
      <SharedDefs />
      <header className="page-hero">
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> About
          </div>
          <h1>
            A regional company, <span className="accent">built for the long delivery.</span>
          </h1>
          <p>
            GeoClim East Africa is a professional services and technology company delivering geospatial
            intelligence, AI, and digital transformation across Africa, headquartered in Nairobi.
          </p>
        </div>
      </header>

      <section className="glass">
        <div>
          <div className="kicker">Mission</div>
          <h2>Empowering industries and communities with intelligent technologies that bridge data and action.</h2>
        </div>
        <div>
          <div className="kicker">Vision</div>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}>
            To be Africa&apos;s leading provider of geo-intelligence and AI-powered solutions for sustainable
            development.
          </h2>
        </div>
      </section>

      <section className="section-head">
        <div className="kicker">Why clients choose GeoClim</div>
        <h2>Competitive advantages</h2>
      </section>
      <div className="grid-cards">
        {ADVANTAGES.map((a) => (
          <div className="info-card" key={a.title}>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </div>
        ))}
      </div>

      <section className="section-head">
        <div className="kicker">Leadership</div>
        <h2>Bios to come</h2>
        <p>
          This section is reserved for leadership profiles, headshots, and governance detail — a gap the current
          site also has. We need names, titles, and short bios from GeoClim to complete it; we won&apos;t invent
          them.
        </p>
      </section>

      <RegionStrip />

      <section className="cta-band">
        <h2>Want the full company profile?</h2>
        <p>Download the company profile, or talk to our team directly.</p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Download company profile
          </Link>
          <Link className="ghost-cta" href="/contact">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
