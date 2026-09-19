'use client';

import { useId, useState, type FormEvent } from 'react';

export interface ContactSegment {
  id: 'government' | 'enterprise' | 'partnership' | 'general';
  label: string;
  /** One-line framing sentence shown above the form for this segment.
   * Deliberately carries no SLA/response-time commitment (none is
   * confirmed — .claude/rules/content-discipline.md). */
  framing: string;
}

export const CONTACT_SEGMENTS: ContactSegment[] = [
  {
    id: 'government',
    label: 'Government & Public Sector',
    framing: "For ministries, agencies, and public-sector teams evaluating GeoClim's platform and services.",
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    framing: "For enterprise teams exploring GeoClim's geospatial and AI-powered solutions.",
  },
  {
    id: 'partnership',
    label: 'Partnership',
    framing: 'For organisations interested in exploring a platform or delivery partnership with GeoClim.',
  },
  {
    id: 'general',
    label: 'General',
    framing: "For any other enquiry about GeoClim's work.",
  },
];

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

/** Segmented contact form: four enquiry-type tabs (styled on the sitewide
 * `.btn` pattern, matching the CTA band on the homepage), each with a
 * one-line framing sentence and a short name/organisation/email/message
 * form. Submits to the local `/api/contact` route — see
 * app/api/contact/route.ts for what that route does and deliberately does
 * not do. */
export default function ContactForm() {
  const [activeId, setActiveId] = useState<ContactSegment['id']>(CONTACT_SEGMENTS[0].id);
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<SubmitState>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const statusId = useId();

  const active = CONTACT_SEGMENTS.find((s) => s.id === activeId) ?? CONTACT_SEGMENTS[0];

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
          message: message.trim(),
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
    <div className="contact-panel">
      <div className="contact-segments" role="tablist" aria-label="Choose an enquiry type">
        {CONTACT_SEGMENTS.map((segment) => (
          <button
            key={segment.id}
            type="button"
            role="tab"
            aria-selected={segment.id === activeId}
            className={`btn ${segment.id === activeId ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setActiveId(segment.id);
              setState('idle');
            }}
          >
            {segment.label}
          </button>
        ))}
      </div>

      <p className="contact-framing">{active.framing}</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${statusId}-name-error` : undefined}
          />
          {errors.name && (
            <span id={`${statusId}-name-error`} className="contact-field-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="contact-field">
          <label htmlFor="contact-org">Organisation</label>
          <input
            id="contact-org"
            name="organisation"
            type="text"
            autoComplete="organization"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${statusId}-email-error` : undefined}
          />
          {errors.email && (
            <span id={`${statusId}-email-error`} className="contact-field-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${statusId}-message-error` : undefined}
          />
          {errors.message && (
            <span id={`${statusId}-message-error`} className="contact-field-error">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Sending…' : 'Send message'}
        </button>

        <div role="status" aria-live="polite" id={statusId} className="contact-status">
          {state === 'success' && 'Thanks — your message has been received. GeoClim will be in touch.'}
          {state === 'error' && Object.keys(errors).length === 0 && 'Something went wrong sending your message. Please try again.'}
        </div>
      </form>
    </div>
  );
}
