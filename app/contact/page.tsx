import type { Metadata } from 'next';
import RegionStrip from '@/components/ui/RegionStrip';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact — GeoClim East Africa',
  description: 'Route your request to the right team — government, enterprise, partnership, or media.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            Home <span>/</span> Contact
          </div>
          <h1>
            Tell us what you&apos;re <span className="accent">trying to solve.</span>
          </h1>
          <p>Route your request to the right team from the start — government, enterprise, partnership, or media.</p>
        </div>
      </header>

      <div className="contact-grid">
        <ContactForm />

        <div className="contact-info">
          <div className="ci-card loc">
            <div className="ci-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div>
              <h4>Head office</h4>
              <p>{CONTACT.city}</p>
            </div>
          </div>
          <div className="ci-card ph">
            <div className="ci-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2Z" />
              </svg>
            </div>
            <div>
              <h4>Phone</h4>
              <p>{CONTACT.phone}</p>
            </div>
          </div>
          <div className="ci-card em">
            <div className="ci-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 6l10 7 10-7" />
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <p>{CONTACT.email}</p>
            </div>
          </div>
          <div className="ci-card hr">
            <div className="ci-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </div>
            <div>
              <h4>Working hours</h4>
              <p>{CONTACT.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <RegionStrip />
    </div>
  );
}
