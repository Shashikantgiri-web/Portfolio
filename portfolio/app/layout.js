import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HyperSpeedLoader from '@/components/HyperSpeedLoader';

export const metadata = {
  title: 'Shashikant Giri | Data-Driven Full Stack Developer',
  description:
    'Portfolio of Shashikant Giri — Full Stack Developer & Data Analyst. Building scalable web applications and interactive data dashboards with Next.js, React, Python, and Power BI.',
  keywords: ['Full Stack Developer', 'Data Analyst', 'React', 'Next.js', 'Power BI', 'Portfolio'],
  openGraph: {
    title: 'Shashikant Giri | Data-Driven Full Stack Developer',
    description: 'Building modern web applications powered by data and business insights.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <HyperSpeedLoader />
        </Suspense>
        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
