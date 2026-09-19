'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileSheet from './MobileSheet';
import { NAV_LINKS } from '@/content/site';

/** Site nav — "Direction C, Field": wordmark, flat link row (Home /
 * Capabilities / Industries / Work / Partners / About / Contact), pill
 * CTA, and a mobile burger. Ported from the client-approved artifact's
 * `.site-nav` markup, repeated identically on every page there. */
export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="site-logo">
          GeoClim
        </Link>
        <div className="site-links">
          {NAV_LINKS.map((link) => {
            const isCurrent = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} className={isCurrent ? 'current' : ''}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="nav-right">
          <Link href="/contact" className="site-cta">
            Talk to us
          </Link>
          <button className="nav-burger" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>
      <MobileSheet open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
