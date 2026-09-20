import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture, HeroPhoto, HeroScan } from '@/components/ui/SharedDefs';
import RegionStrip from '@/components/ui/RegionStrip';

export const metadata: Metadata = {
  title: 'About — GeoClim East Africa',
  description: 'A regional professional services and technology company delivering geospatial intelligence, AI, and digital transformation across Africa, headquartered in Nairobi.',
};

const ADVANTAGES = [
  {
    title: 'GIS + ERP + workflow, one capability',
    body: 'Few regional players can integrate all three under one delivery team.',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  },
  {
    title: 'Regional delivery, global platforms',
    body: 'Local presence across ten markets, running on internationally proven technology.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18M3 12h18" />
      </>
    ),
  },
  {
    title: 'Real-time and AI-driven',
    body: 'Operational intelligence, not static reporting.',
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  },
  {
    title: 'Strong sector specialization',
    body: 'Utilities, agriculture, transport, natural resources, finance, and retail.',
    icon: <path d="M12 2 4 6v6c0 5.5 3.8 9.7 8 10 4.2-.3 8-4.5 8-10V6l-8-4z" />,
  },
  {
    title: 'Secure, multilingual deployments',
    body: 'Built for public-sector and enterprise data requirements from day one.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: 'Local expertise, continental reach',
    body: 'Multidisciplinary teams who understand African operating conditions.',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <SharedDefs />
      <header className="page-hero has-photo">
        <HeroPhoto src="/images/hero-about.jpg" />
        <HeroScan />
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> About
          </div>
          <h1>
            <span className="accent">Built for Africa</span>
          </h1>
          <p>
            GeoClim East Africa is a Nairobi-based technology and professional services company helping
            organisations across Africa use geospatial intelligence, AI and digital technology to work smarter.
          </p>
        </div>
      </header>

      <section className="about-mv">
        <div className="about-mv-col">
          <div className="about-mv-quote" aria-hidden="true">
            &ldquo;
          </div>
          <div className="kicker">Mission</div>
          <h2>Empowering industries and communities with intelligent technologies that bridge data and action.</h2>
        </div>
        <div className="about-mv-col">
          <div className="about-mv-quote" aria-hidden="true">
            &ldquo;
          </div>
          <div className="kicker">Vision</div>
          <h2>
            To be Africa&apos;s leading provider of geo-intelligence and AI-powered solutions for sustainable
            development.
          </h2>
        </div>
      </section>

      <section className="section-head">
        <div className="kicker">Why clients choose GeoClim</div>
        <h2>Competitive advantages</h2>
      </section>
      <div className="about-adv-grid">
        {ADVANTAGES.map((a) => (
          <div className="about-adv-card" key={a.title}>
            <svg className="about-adv-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              {a.icon}
            </svg>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </div>
        ))}
      </div>

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
