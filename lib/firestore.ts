import { getApps, initializeApp, applicationDefault, type App } from 'firebase-admin/app';
import { getFirestore, Timestamp, type Firestore } from 'firebase-admin/firestore';

/**
 * Server-only Firestore access for lead capture. Never import this from a
 * Client Component ('use client') or anything that ends up in a browser
 * bundle — it pulls in firebase-admin, which assumes a Node runtime and
 * (on Firebase App Hosting / Cloud Run) Application Default Credentials.
 * No service-account JSON is read, generated, or committed here, ever.
 *
 * The only consumer is app/api/contact/route.ts. This module has no read
 * function by design — leads are read from the Firebase console, not an
 * admin UI in this repo (docs/DECISIONS Session 7).
 */

export type ContactSegment = 'government' | 'enterprise' | 'partnership' | 'general';

export interface ContactSubmission {
  id?: string;
  segment: ContactSegment;
  name: string;
  email: string;
  organisation?: string;
  message: string;
  submittedAt: Timestamp;
  status: 'new';
}

const CONTACT_SUBMISSIONS_COLLECTION = 'contactSubmissions';

let app: App | undefined;
let db: Firestore | undefined;

/**
 * Lazily initializes the firebase-admin app exactly once per process.
 * Uses Application Default Credentials, which Firebase App Hosting and
 * Cloud Run provide natively via their attached runtime service account —
 * no key file, no env var pointing at one. Locally (outside App Hosting),
 * ADC falls back to `gcloud auth application-default login` or the
 * `GOOGLE_APPLICATION_CREDENTIALS` env var if a developer has set one up
 * themselves; neither is required or assumed by this repo.
 */
function getDb(): Firestore {
  if (!db) {
    const existing = getApps();
    app =
      existing[0] ??
      (process.env.FIRESTORE_EMULATOR_HOST
        ? initializeApp({ projectId: process.env.GOOGLE_CLOUD_PROJECT })
        : initializeApp({ credential: applicationDefault() }));
    db = getFirestore(app);
    // `organisation` is optional and arrives as `undefined` when the
    // submitter left it blank. The Admin SDK rejects `undefined` field
    // values by default — this makes it drop them instead of throwing.
    db.settings({ ignoreUndefinedProperties: true });
  }
  return db;
}

export type NewContactSubmission = Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>;

/**
 * Writes a new contact form submission to the `contactSubmissions`
 * collection and returns the new document's id. Throws on any Firestore
 * error — callers (the API route) are responsible for catching, logging
 * server-side, and returning a generic error to the client.
 */
export async function saveContactSubmission(data: NewContactSubmission): Promise<string> {
  const submission: Omit<ContactSubmission, 'id'> = {
    ...data,
    submittedAt: Timestamp.now(),
    status: 'new',
  };

  const docRef = await getDb().collection(CONTACT_SUBMISSIONS_COLLECTION).add(submission);
  return docRef.id;
}
