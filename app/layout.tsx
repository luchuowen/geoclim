import type { Metadata } from 'next';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'GeoClim East Africa',
  description:
    'Geospatial intelligence, enterprise systems, and AI for East, Central & Southern Africa. Intelligent technologies that bridge data to action.',
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
