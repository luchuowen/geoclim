import Link from 'next/link';
import { FOOTER_COMPANY_LINKS, CONTACT, REGIONAL_OPS } from '@/content/site';

/** Site footer — "Direction C, Field". Ported from the artifact's
 * `.site-footer` markup (identical on every page there): brand + one-line
 * description, Company links, Contact, and Regional operation list. */
export default function Footer() {
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
        <div className="sf-col">
          <h4>Company</h4>
          {FOOTER_COMPANY_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="sf-col">
          <h4>Contact</h4>
          <p>{CONTACT.city}</p>
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.email}</p>
        </div>
        <div className="sf-col">
          <h4>Regional operation</h4>
          <p>{REGIONAL_OPS.slice(0, 3).join(' · ')}</p>
          <p>{REGIONAL_OPS.slice(3, 6).join(' · ')}</p>
          <p>{REGIONAL_OPS.slice(6, 9).join(' · ')}</p>
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
