'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/brand/Logo';
import { NAV_LINKS } from '@/content/site';
import { INDUSTRY_LINKS } from '@/content/industries';

interface MobileSheetProps {
  open: boolean;
  onClose: () => void;
}

/** Slide-in mobile nav sheet. The artifact's mockup only specced desktop
 * nav (links hidden under 960px with no mobile menu drawn), so this is a
 * minimal, same-palette addition for usability rather than a deviation
 * from the approved design. The Industries row expands into the same
 * six industry links the desktop mega-dropdown offers. */
export default function MobileSheet({ open, onClose }: MobileSheetProps) {
  const pathname = usePathname();
  const [industriesOpen, setIndustriesOpen] = useState(false);
  if (!open) return null;

  return (
    <div className="mobile-sheet" onClick={onClose}>
      <div className="mobile-sheet-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-sheet-top">
          <div className="site-logo">
            <BrandLogo />
          </div>
          <button className="nav-burger" aria-label="Close menu" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {NAV_LINKS.map((link) => {
          const isCurrent = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

          if (link.href === '/industries') {
            return (
              <div className="msheet-industries" key={link.href}>
                <div className={`msheet-link msheet-ind-row${isCurrent ? ' current' : ''}`}>
                  <Link href={link.href} onClick={onClose}>
                    {link.label}
                  </Link>
                  <button
                    className={`msheet-ind-toggle${industriesOpen ? ' open' : ''}`}
                    aria-label="Toggle industries list"
                    onClick={() => setIndustriesOpen((v) => !v)}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                {industriesOpen && (
                  <div className="msheet-ind-list">
                    {INDUSTRY_LINKS.map((ind) => (
                      <Link href={ind.href} className="msheet-ind-link" key={ind.href} onClick={onClose}>
                        <span className="msheet-ind-dot" style={{ background: ind.color }} />
                        {ind.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`msheet-link${isCurrent ? ' current' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/contact" className="site-cta" onClick={onClose}>
          Talk to us
        </Link>
      </div>
    </div>
  );
}
