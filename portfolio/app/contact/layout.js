import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Contact Shashikant Giri | Full Stack Developer India',
  description:
    'Contact Shashikant Giri for full stack web development, React and Next.js projects, Power BI dashboards, data analytics work, and portfolio collaboration opportunities.',
  path: '/contact',
});

export default function ContactLayout({ children }) {
  return children;
}
