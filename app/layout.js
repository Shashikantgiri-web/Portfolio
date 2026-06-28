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
  metadataBase: new URL("https://shashikantgiri.netlify.app"),

  title: {
    default: "Shashikant Giri | Data-Driven Full Stack Developer",
    template: "%s | Shashikant Giri",
  },

  description:
    "Shashikant Giri is a Data-Driven Full Stack Developer specializing in Next.js, React, JavaScript, Node.js, MongoDB, SQL, Python, Power BI, and Data Analytics. Explore projects, dashboards, and professional experience.",

  keywords: [
    "Shashikant Giri",
    "Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript",
    "Data Analyst",
    "Power BI",
    "Python",
    "SQL",
    "MongoDB",
    "Frontend Developer",
    "Web Developer",
    "Business Intelligence"
  ],

  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/fovicon.jpg",
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
    <head>
      <meta name="google-site-verification" content="btS2bvsqJOYXPFkyJ9AY6IpmS5egLUhVRIFrTHgK6wI"></meta>
    </head>
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
