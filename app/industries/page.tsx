import Link from 'next/link';
import type { Metadata } from 'next';
import SharedDefs, { HeroTexture, HeroPhoto, HeroScan } from '@/components/ui/SharedDefs';

export const metadata: Metadata = {
  title: 'Industries — GeoClim East Africa',
  description: 'Utilities, agriculture, transportation, natural resources, retail & FMCG, and insurance & finance — on one GIS + ERP + AI foundation.',
};

const SECTORS = [
  {
    title: 'Utilities',
    body: 'Water, electric, gas, and petroleum. Smart metering, predictive asset management, and leakage reduction.',
    icon: 'M12 2 L12 22 M4 8 L20 8 M4 16 L20 16',
    href: '/industries/utilities',
    linkLabel: 'Explore Utilities →',
  },
  {
    title: 'Agriculture',
    body: 'Climate analytics, crop monitoring, and early warning — satellite, UAV, and IoT-enabled.',
    icon: 'circle',
    href: '/industries/agriculture',
    linkLabel: 'Explore Agriculture →',
  },
  {
    title: 'Transportation',
    body: 'Roads, rail, and airports. Intelligent mobility, traffic management, logistics optimization.',
    icon: 'M3 17 L9 11 L13 15 L21 7',
    href: '/industries/transportation',
    linkLabel: 'Explore Transportation →',
  },
  {
    title: 'Natural Resources',
    body: 'Environmental monitoring, mining exploration, and land-use optimization.',
    icon: 'M12 2 L20 7 L20 17 L12 22 L4 17 L4 7 Z',
    href: '/industries/natural-resources',
    linkLabel: 'Explore Natural Resources →',
  },
  {
    title: 'Retail & FMCG',
    body: 'Geo-marketing, supply chain visibility, and market expansion analytics.',
    icon: 'rect',
  },
  {
    title: 'Insurance & Finance',
    body: 'Risk modelling, fraud detection, claims validation, and credit scoring.',
    icon: 'M3 12 L8 7 L13 13 L21 5 M21 5 L21 11',
  },
];

function SectorIcon({ icon }: { icon: string }) {
  if (icon === 'circle') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6ee7c7" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 L12 21 M3 12 L21 12" />
      </svg>
    );
  }
  if (icon === 'rect') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6ee7c7" strokeWidth={1.5}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10 L20 10" />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6ee7c7" strokeWidth={1.5}>
      <path d={icon} />
    </svg>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <SharedDefs />
      <header className="page-hero has-photo">
        <HeroPhoto src="/images/hero-industries.jpg" />
        <HeroScan />
        <HeroTexture />
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> Industries
          </div>
          <h1>
            Six industries. <span className="accent">One way of working.</span>
          </h1>
          <p>Every sector below runs on the same GIS + ERP + AI foundation — tuned to that industry&apos;s data, regulation, and pace.</p>
        </div>
      </header>

      <div className="sector-grid">
        {SECTORS.map((s) => (
          <div className="sector-card" key={s.title}>
            <div className="sc-ic">
              <SectorIcon icon={s.icon} />
            </div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <Link className="sc-links" href={s.href ?? '/work'}>
                {s.linkLabel ?? 'See related work →'}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="cta-band">
        <h2>Don&apos;t see your sector listed?</h2>
        <p>The underlying platform — GIS, ERP, and AI reconciled into one layer — applies well beyond these six.</p>
        <div className="actions">
          <Link className="pill-cta" href="/contact">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
