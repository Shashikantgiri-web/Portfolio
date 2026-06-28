import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HyperSpeedLoader from '@/components/HyperSpeedLoader';
import {
  breadcrumbJsonLd,
  createMetadata,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from '@/lib/seo';

export const metadata = {
  ...createMetadata(),
  verification: {
    google: "btS2bvsqJOYXPFkyJ9AY6IpmS5egLUhVRIFrTHgK6wI",
  },
};

export default function RootLayout({ children }) {
  const structuredData = [
    personJsonLd(),
    websiteJsonLd(),
    organizationJsonLd(),
    breadcrumbJsonLd([{ name: 'Home', path: '/' }]),
  ];

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Suspense fallback={null}>
          <HyperSpeedLoader />
        </Suspense>
        <Navbar />
        <main className="relative z-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
