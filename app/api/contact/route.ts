import { NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/firestore';

const SEGMENTS = ['government', 'enterprise', 'partnership', 'media'] as const;
type Segment = (typeof SEGMENTS)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  segment?: string;
  name?: string;
  organisation?: string;
  email?: string;
  message?: string;
}

function isSegment(value: unknown): value is Segment {
  return typeof value === 'string' && (SEGMENTS as readonly string[]).includes(value);
}

/** Validates a `/contact` form submission and writes it to Firestore
 * (`contactSubmissions` collection, via lib/firestore.ts) as a lead for
 * the site owner to read from the Firebase console. Does not send email —
 * that remains a future integration. */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: 'Invalid JSON body.' } }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ ok: false, errors: { form: 'Invalid request body.' } }, { status: 400 });
  }

  const { segment, name, organisation, email, message } = body as Record<string, unknown>;

  const errors: FieldErrors = {};

  if (!isSegment(segment)) {
    errors.segment = 'Choose a valid enquiry type.';
  }
  if (typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Enter your name.';
  }
  if (organisation !== undefined && typeof organisation !== 'string') {
    errors.organisation = 'Invalid organisation value.';
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'Enter a message (at least 10 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    await saveContactSubmission({
      segment: segment as Segment,
      name: (name as string).trim(),
      organisation: typeof organisation === 'string' && organisation.trim() ? organisation.trim() : undefined,
      email: (email as string).trim(),
      message: (message as string).trim(),
    });
  } catch (error) {
    // Log server-side only — never leak stack traces, project IDs, or
    // other internal detail to the client.
    console.error('[contact] Failed to save submission to Firestore:', error);
    return NextResponse.json(
      { ok: false, errors: { form: 'Something went wrong. Please try again.' } },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
