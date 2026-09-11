'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileSheet from './MobileSheet';

// TODO: import from content/sectors.ts once Session 2 lands. Hard-coded
// here (matching the approved mockup exactly) so Session 0 doesn't block
// on Session 2 — see CLAUDE.md "File ownership".
const SECTORS: { slug: string; name: string; desc: string; iconPath: string }[] = [
  {
    slug: 'agriculture-food-systems',
    name: 'Agriculture & Food Systems',
    desc: 'Crop & land monitoring for real-time planning.',
    iconPath: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6',
  },
  {
    slug: 'utilities-infrastructure',
    name: 'Utilities & Infrastructure',
    desc: 'Asset & network intelligence across territory.',
    iconPath: 'M13 2 3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    slug: 'government-public-sector',
    name: 'Government & Public Sector',
    desc: 'Procurement-grade transparency & delivery data.',
    iconPath: 'M12 3 3 7v2h18V7l-9-4zM5 10v9M9 10v9M15 10v9M19 10v9M3 21h18',
  },
  {
    slug: 'climate-environment',
    name: 'Climate & Environment',
    desc: 'Change detection for water, forest & land.',
    iconPath: 'M12 2C8 6 5 9.5 5 13.5a7 7 0 0 0 14 0C19 9.5 16 6 12 2z',
  },
  {
    slug: 'insurance-risk',
    name: 'Insurance & Risk',
    desc: 'Location-based ground-truth for underwriting.',
    iconPath: 'M12 2 4 6v6c0 5 3.5 8.7 8 10 4.5-1.3 8-5 8-10V6l-8-4z',
  },
  {
    slug: 'transport-logistics',
    name: 'Transport & Logistics',
    desc: 'Route & corridor intelligence at scale.',
    iconPath: 'M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4',
  },
];

// TODO: import from content/platform.ts once Session 3 lands.
const PLATFORM_MODULES = [
  { slug: 'maps-and-apps', code: 'MNA', name: 'Maps & Apps', desc: 'Field-ready mapping tools for decision-makers.' },
  { slug: 'geo-enabled-workflow', code: 'PBPM', name: 'Geo-enabled workflow', desc: 'Business processes anchored to location.' },
  { slug: 'real-time-gis', code: 'SMART', name: 'Real-time GIS', desc: 'Live geographic infrastructure, always current.' },
  {
    slug: 'incident-emergency-management',
    code: 'PSIM',
    name: 'Incident & emergency management',
    desc: 'One operating picture during an incident.',
  },
  { slug: 'rockeye', code: 'ROCKEYE', name: 'AI operations intelligence', desc: 'Predictive maintenance & workflow automation.' },
];

const COMPANY_LINKS = [
  { href: '/company', label: 'About GeoClim' },
  { href: '/company/leadership', label: 'Leadership & Team' },
  { href: '/company/partnerships', label: 'Partnerships' },
  { href: '/company/where-we-work', label: 'Where We Work' },
  { href: '/company/governance-and-trust', label: 'Governance & Trust' },
];

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** Site nav: wordmark, mega-menu dropdowns (Sectors/Platform/Company),
 * plain links (Proof/Insights), CTA button and mobile burger. Client
 * component for the scroll-solid shell and the mobile-sheet toggle;
 * dropdown open/close itself is pure CSS (:hover/:focus-within). */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`nav-shell${scrolled ? ' scrolled' : ''}`} id="navShell">
        <div className="wrap">
          <nav className="site-nav">
            <Link href="/" className="wordmark">
              Geo<span>Clim</span>
            </Link>
            <ul className="nav-links">
              <li className="nav-item">
                <button aria-haspopup="true">
                  Sectors <Chevron />
                </button>
                <div className="dropdown dd-sectors">
                  <div className="dd-grid">
                    {SECTORS.map((s) => (
                      <Link key={s.slug} className="dd-link" href={`/sectors/${s.slug}`}>
                        <svg className="dd-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
                          <path d={s.iconPath} />
                        </svg>
                        <span>
                          <strong>{s.name}</strong>
                          <span className="dd-desc">{s.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="dd-foot">
                    <span className="mono" style={{ fontSize: 11, color: 'var(--muted-dim)' }}>
                      6 SECTORS
                    </span>
                    <Link href="/sectors">View all sectors →</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <button aria-haspopup="true">
                  Platform <Chevron />
                </button>
                <div className="dropdown dd-sectors" style={{ width: 420 }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {PLATFORM_MODULES.map((m) => (
                      <Link key={m.slug} className="dd-link" href={`/platform/${m.slug}`}>
                        <span className="dd-code">{m.code}</span>
                        <span>
                          <strong>{m.name}</strong>
                          <span className="dd-desc">{m.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="dd-foot">
                    <span className="mono" style={{ fontSize: 11, color: 'var(--muted-dim)' }}>
                      PENTA-B + ROCKEYE ERP
                    </span>
                    <Link href="/platform">See the platform →</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/proof">Proof</Link>
              </li>
              <li className="nav-item">
                <button aria-haspopup="true">
                  Company <Chevron />
                </button>
                <div className="dropdown dd-simple" style={{ left: 'auto', right: -16 }}>
                  {COMPANY_LINKS.map((c) => (
                    <Link key={c.href} className="dd-link" href={c.href}>
                      <span>
                        <strong>{c.label}</strong>
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
              <li className="nav-item">
                <Link href="/insights">Insights</Link>
              </li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Link href="/contact" className="btn btn-primary nav-cta">
                Request a Briefing
              </Link>
              <button className="nav-burger" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <MobileSheet open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
