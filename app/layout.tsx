import type { Metadata } from 'next';
import './globals.css';

// PLACEHOLDER — owned by Session 0 (docs/03_session_0_foundation.md).
// Session 0 replaces this with the real root layout: Google Fonts <link>
// tags for Crimson Pro / Inter / IBM Plex Mono, and the ported globals.css
// import chain (styles/tokens.css, styles/base.css, styles/components/*).
// Do not build on top of this file until Session 0 has landed.

export const metadata: Metadata = {
  title: 'GeoClim East Africa',
  description: 'Geospatial intelligence for East Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
