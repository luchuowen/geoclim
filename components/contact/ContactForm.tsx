'use client';

import { useId, useState, type FormEvent } from 'react';

export interface ContactSegment {
  id: 'government' | 'enterprise' | 'partnership' | 'media';
  label: string;
}

export const CONTACT_SEGMENTS: ContactSegment[] = [
  { id: 'government', label: 'Government' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'media', label: 'Media' },
];

const COUNTRIES = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia', 'Zambia', 'Malawi', 'DRC', 'Mozambique', 'Zimbabwe', 'Other'];

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

/** Contact form — "Direction C, Field": four enquiry-type pills, name /
 * organisation / email / country, and a single "what are you trying to
 * solve" message field. Ported to `.form-panel` / `.f-row` / `.f-pill`
 * markup from the artifact; submit logic unchanged, posting to
 * /api/contact (see app/api/contact/route.ts). */
export default function ContactForm() {
  const [activeId, setActiveId] = useState<ContactSegment['id']>(CONTACT_SEGMENTS[0].id);
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [message, setMessage] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const statusId = useId();

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Enter a valid email address.';
    if (message.trim().length < 10) next.message = 'Enter a message (at least 10 characters).';
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validate();
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setState('error');
      return;
    }

    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segment: activeId,
          name: name.trim(),
          organisation: organisation.trim() || undefined,
          email: email.trim(),
          message: `[${country}] ${message.trim()}`,
        }),
      });

      if (!res.ok) {
        setState('error');
        return;
      }

      setState('success');
      setName('');
      setOrganisation('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch {
      setState('error');
    }
  }

  return (
    <div className="form-panel">
      <h3>Request a consultation</h3>
      <p>Tell us who you are and what you need — we&apos;ll route it to the right team.</p>

      <div className="f-pills" role="tablist" aria-label="Choose an enquiry type">
        {CONTACT_SEGMENTS.map((segment) => (
          <button
            key={segment.id}
            type="button"
            role="tab"
            aria-selected={segment.id === activeId}
            className={`f-pill${segment.id === activeId ? ' on' : ''}`}
            onClick={() => {
              setActiveId(segment.id);
              setState('idle');
            }}
          >
            {segment.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="f-row">
          <div className="f-field">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Jane Wanjiru"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${statusId}-name-error` : undefined}
            />
            {errors.name && (
              <span id={`${statusId}-name-error`} className="f-field-error">
                {errors.name}
              </span>
            )}
          </div>
          <div className="f-field">
            <label htmlFor="contact-org">Organization</label>
            <input
              id="contact-org"
              name="organisation"
              type="text"
              placeholder="Ministry / Company"
              autoComplete="organization"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
            />
          </div>
        </div>

        <div className="f-row">
          <div className="f-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="jane@organization.org"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${statusId}-email-error` : undefined}
            />
            {errors.email && (
              <span id={`${statusId}-email-error`} className="f-field-error">
                {errors.email}
              </span>
            )}
          </div>
          <div className="f-field">
            <label htmlFor="contact-country">Country</label>
            <select id="contact-country" name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
              {COUNTRIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="f-field" style={{ marginBottom: 20 }}>
          <label htmlFor="contact-message">What are you trying to solve?</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="A short description of the problem or opportunity"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${statusId}-message-error` : undefined}
          />
          {errors.message && (
            <span id={`${statusId}-message-error`} className="f-field-error">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="form-submit" disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Sending…' : 'Submit request'}
        </button>

        <div role="status" aria-live="polite" id={statusId} className={`form-status${state === 'error' ? ' error' : ''}`}>
          {state === 'success' && 'Thanks — your message has been received. GeoClim will be in touch.'}
          {state === 'error' && Object.keys(errors).length === 0 && 'Something went wrong sending your message. Please try again.'}
        </div>
      </form>
    </div>
  );
}
