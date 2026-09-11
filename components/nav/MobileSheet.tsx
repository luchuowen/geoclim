'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '/sectors', label: 'Sectors' },
  { href: '/platform', label: 'Platform' },
  { href: '/proof', label: 'Proof' },
  { href: '/company', label: 'Company' },
  { href: '/insights', label: 'Insights' },
];

export interface MobileSheetProps {
  open: boolean;
  onClose: () => void;
}

/** Full-height near-black overlay sheet, ported from the reference
 * mockup's `.mobile-sheet`. Locks body scroll while open and closes on
 * Escape, backdrop link click, or the close button. */
export default function MobileSheet({ open, onClose }: MobileSheetProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className={`mobile-sheet${open ? ' open' : ''}`} id="mobileSheet" aria-hidden={!open}>
      <div className="ms-top">
        <div className="wordmark">
          Geo<span>Clim</span>
        </div>
        <button className="ms-close" aria-label="Close menu" onClick={onClose}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <ul className="ms-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} onClick={onClose}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="ms-cta">
        <Link href="/contact" className="btn btn-primary" onClick={onClose}>
          Request a Briefing
        </Link>
        <Link href="/company/where-we-work" className="btn btn-secondary" onClick={onClose}>
          Where we work
        </Link>
      </div>
    </div>
  );
}
