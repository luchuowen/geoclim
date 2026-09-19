import type { Metadata } from 'next';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import './globals.css';

const SITE_URL = 'https://geoclim.navac.co.ke';
const SITE_TITLE = 'GeoClim East Africa';
const SITE_DESCRIPTION =
  'Geospatial intelligence, enterprise systems, and AI for East, Central & Southern Africa. Intelligent technologies that bridge data to action.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'GeoClim East Africa — GIS + ERP + AI, unified for East Africa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&family=Playfair+Display:ital,wght@1,700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
