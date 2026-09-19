'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FOOTER_COMPANY_LINKS, CONTACT, REGIONAL_OPS } from '@/content/site';

type SectionKey = 'company' | 'contact' | 'regional';

function ChevronIcon() {
  return (
    <svg className="sf-acc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Site footer — "Direction C, Field". Desktop keeps the original
 * always-expanded four-column layout unchanged (enforced in globals.css,
 * which ignores this component's accordion state above 640px). On mobile,
 * the Company / Contact / Regional operation columns become tap-to-expand
 * accordions, collapsed by default. */
export default function Footer() {
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    company: false,
    contact: false,
    regional: false,
  });

  function toggle(key: SectionKey) {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <footer className="site-footer">
      <div className="sf-inner">
        <div>
          <div className="sf-brand">GeoClim East Africa</div>
          <p className="sf-desc">
            Professional services and technology company delivering geospatial intelligence, AI, and digital
            transformation across Africa. Intelligent technologies that bridge data to action.
          </p>
        </div>

        <div className="sf-col sf-accordion">
          <button
            type="button"
            className="sf-acc-toggle"
            aria-expanded={open.company}
            aria-controls="sf-acc-company"
            onClick={() => toggle('company')}
          >
            <h4>Company</h4>
            <ChevronIcon />
          </button>
          <div id="sf-acc-company" className={`sf-acc-body${open.company ? ' open' : ''}`}>
            {FOOTER_COMPANY_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="sf-col sf-accordion">
          <button
            type="button"
            className="sf-acc-toggle"
            aria-expanded={open.contact}
            aria-controls="sf-acc-contact"
            onClick={() => toggle('contact')}
          >
            <h4>Contact</h4>
            <ChevronIcon />
          </button>
          <div id="sf-acc-contact" className={`sf-acc-body${open.contact ? ' open' : ''}`}>
            <p>{CONTACT.city}</p>
            <p>{CONTACT.phone}</p>
            <p>{CONTACT.email}</p>
          </div>
        </div>

        <div className="sf-col sf-accordion">
          <button
            type="button"
            className="sf-acc-toggle"
            aria-expanded={open.regional}
            aria-controls="sf-acc-regional"
            onClick={() => toggle('regional')}
          >
            <h4>Regional operation</h4>
            <ChevronIcon />
          </button>
          <div id="sf-acc-regional" className={`sf-acc-body${open.regional ? ' open' : ''}`}>
            <p>{REGIONAL_OPS.slice(0, 3).join(' · ')}</p>
            <p>{REGIONAL_OPS.slice(3, 6).join(' · ')}</p>
            <p>{REGIONAL_OPS.slice(6, 9).join(' · ')}</p>
          </div>
        </div>
      </div>
      <div className="sf-bottom">
        <span>© 2026 GeoClim East Africa. All rights reserved.</span>
        <span>
          Designed by{' '}
          <a href="https://navac.co.ke" target="_blank" rel="noopener noreferrer">
            NAVAC GLOBAL
          </a>
        </span>
      </div>
    </footer>
  );
}
