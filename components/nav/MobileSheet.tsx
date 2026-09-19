'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/brand/Logo';
import { NAV_LINKS } from '@/content/site';

interface MobileSheetProps {
  open: boolean;
  onClose: () => void;
}

/** Slide-in mobile nav sheet. The artifact's mockup only specced desktop
 * nav (links hidden under 960px with no mobile menu drawn), so this is a
 * minimal, same-palette addition for usability rather than a deviation
 * from the approved design. */
export default function MobileSheet({ open, onClose }: MobileSheetProps) {
  const pathname = usePathname();
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
