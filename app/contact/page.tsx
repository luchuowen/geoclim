import type { Metadata } from 'next';
import '../../styles/components/company.css';
import '../../styles/components/contact.css';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | GeoClim East Africa',
  description: 'Get in touch with GeoClim East Africa.',
};

// docs/08: four segmented entry points, each with a short framing sentence
// and a name/organisation/email/message form submitting to the local
// app/api/contact/route.ts. No Government-specific SLA/response-time
// commitment is stated — none is confirmed
// (.claude/rules/content-discipline.md).
export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero hairline">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p className="co-lead" style={{ marginTop: 18 }}>
            Choose the option closest to your enquiry.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
