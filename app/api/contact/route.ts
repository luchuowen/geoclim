import { NextResponse } from 'next/server';

const SEGMENTS = ['government', 'enterprise', 'partnership', 'general'] as const;
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

/** Validates and acknowledges a `/contact` form submission. Does not send
 * an email or write to Firestore/any external service — this repo is
 * gated `no-firestore-yet` this phase (docs/01, content/types.ts header),
 * and a later integration session wires the real handler. */
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

  // TODO(phase-2): wire to real form handler / email service
  return NextResponse.json({ ok: true }, { status: 200 });
}
