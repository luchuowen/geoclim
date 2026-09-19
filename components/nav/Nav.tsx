'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileSheet from './MobileSheet';
import BrandLogo from '@/components/brand/Logo';
import { NAV_LINKS } from '@/content/site';
import { INDUSTRY_LINKS } from '@/content/industries';

function IndustryIcon({ icon, color }: { icon: string; color: string }) {
  if (icon === 'circle') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.6}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 L12 21 M3 12 L21 12" />
      </svg>
    );
  }
  if (icon === 'rect') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.6}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10 L20 10" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.6}>
      <path d={icon} />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="site-logo">
          <BrandLogo />
        </Link>
        <div className="site-links">
          {NAV_LINKS.map((link) => {
            const isCurrent = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.href === '/industries') {
              return (
                <div className="nav-dd" key={link.href}>
                  <Link href={link.href} className={`nav-dd-trigger${isCurrent ? ' current' : ''}`}>
                    {link.label}
                    <svg className="nav-dd-chev" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="nav-dd-panel">
                    <div className="nav-dd-grid">
                      {INDUSTRY_LINKS.map((ind) => (
                        <Link href={ind.href} className="nav-dd-item" key={ind.href}>
                          <span className="nav-dd-ic" style={{ background: `${ind.color}24` }}>
                            <IndustryIcon icon={ind.icon} color={ind.color} />
                          </span>
                          <span>
                            <span className="nav-dd-name">{ind.label}</span>
                            <span className="nav-dd-desc">{ind.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="nav-dd-foot">
                      <span>Six industries, one platform</span>
                      <Link href="/industries">View all →</Link>
                    </div>
                  </div>
                </div>
              );
            }

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
