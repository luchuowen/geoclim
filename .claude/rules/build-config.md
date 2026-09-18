<!-- paths: next.config.js, package.json, package-lock.json, tsconfig.json, app/api/** -->
# Build config & the contact API route (critical path)

These files are `manifest.critical_paths` — changes here go through plan
mode, `/effort high`, and the domain reviewer.

- **Next.js pinned to `14.2.35`**, not `14.2.15` as originally installed and
  not a Next 15/16 major. Closes most known 14-branch CVEs without the
  breaking jump. `npm audit` still reports advisories with no fix inside
  14.x — upgrading to Next 16 to close them is **Owen's decision**, not
  something to do unilaterally mid-build. Don't bump the major on your own.
- **`next.config.js` deliberately omits `output: 'export'`** (gated by
  `no-static-export`): `app/api/contact/route.ts` needs a real Next.js API
  route, and API routes don't work with static export. If static export
  ever comes back, the contact form's transport has to change first (e.g. a
  third-party form endpoint instead of a local API route).
- `app/api/contact/route.ts` validates input and returns success — it does
  not send real email or write to an external service. Keep the
  `// TODO(phase-2): wire to real form handler / email service` marker.
- No Firestore SDK, no GCP credentials, no live infra touched this phase
  (gated by `no-firestore-yet`). Ends at a verified local `next build`, not
  a deployment.
