/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOT using `output: 'export'`. The build plan (docs/02 §1) floats static
  // export as the default recommendation, but Session 5 (docs/08) requires
  // a real Next.js API route at app/api/contact/route.ts for the contact
  // form handler, and API routes are incompatible with `output: 'export'`.
  // Default (Node) output keeps that route buildable without a rewrite
  // later; see CLAUDE.md "Stack decisions" for the full rationale.
  reactStrictMode: true,
};

module.exports = nextConfig;
