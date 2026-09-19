'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileSheet from './MobileSheet';
import { sectors } from '@/content/sectors';
import { platformModules } from '@/content/platform';
import { SECTOR_ICON_PATHS } from '@/components/sectors/sectorIcons';

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
                    {sectors.map((s) => (
                      <Link key={s.slug} className="dd-link" href={`/sectors/${s.slug}`}>
                        <svg className="dd-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
                          <path d={SECTOR_ICON_PATHS[s.iconKey]} />
                        </svg>
                        <span>
                          <strong>{s.name}</strong>
                          <span className="dd-desc">{s.navDescription}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="dd-foot">
                    <span className="mono" style={{ fontSize: 11, color: 'var(--muted-dim)' }}>
                      {sectors.length} SECTORS
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
                    {platformModules.map((m) => (
                      <Link key={m.slug} className="dd-link" href={`/platform/${m.slug}`}>
                        <span className="dd-code">{m.code}</span>
                        <span>
                          <strong>{m.name}</strong>
                          <span className="dd-desc">{m.navDescription}</span>
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
