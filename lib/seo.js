import apiData from '@/public/api.json';

export const siteUrl = 'https://shashikantgiri.netlify.app';
export const siteName = 'Shashikant Giri Portfolio';
export const personName = 'Shashikant Giri';
export const professionalTitle = 'Data-Driven Full Stack Developer';
export const headline = 'Web Developer & Data Analyst';
export const location = 'Navi Mumbai, Maharashtra, India';
export const email = 'shashikantshankar707@gmail.com';
export const githubUrl = 'https://github.com/Shashikantgiri-web';
export const linkedInUrl = 'https://www.linkedin.com/in/shashikant-giri-7a4549297';

export const seoKeywords = [
  'Shashikant',
  'Shashikant Giri',
  'Shashikant Giri Portfolio',
  'Shashikant Web Developer',
  'Shashikant Data Analyst',
  'Data-Driven Full Stack Developer',
  'Power BI Portfolio',
  'React Developer Portfolio',
  'Next.js Developer India',
  'Data Analyst Portfolio India',
  'Full Stack Developer Navi Mumbai',
  'Web Developer Navi Mumbai',
  'Power BI Developer India',
];

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function createMetadata({
  title = `${personName} | ${professionalTitle}`,
  description = `${personName} is a ${professionalTitle} and ${headline} from ${location}, building Next.js, React, Power BI, and data analytics projects.`,
  path = '/',
  keywords = [],
  type = 'website',
} = {}) {
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    authors: [{ name: personName, url: siteUrl }],
    creator: personName,
    publisher: personName,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'en_IN',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@Shashikantgiri',
    },
  };
}

export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAllRoutes() {
  const staticRoutes = ['/', '/about', '/web', '/analytics', '/contact'];
  const webRoutes = apiData.webDev_projects.map((project) => `/web/${slugify(project.name)}`);
  const analyticsRoutes = apiData.dataAnalysis_projects.map((project) => `/analytics/${slugify(project.name)}`);

  return [...staticRoutes, ...webRoutes, ...analyticsRoutes];
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    alternateName: 'Shashikant',
    jobTitle: professionalTitle,
    description: `${personName} is a ${headline} focused on full stack development, React, Next.js, Power BI, SQL, Python, and business intelligence dashboards.`,
    url: siteUrl,
    email: `mailto:${email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Navi Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [githubUrl, linkedInUrl],
    knowsAbout: [
      'Next.js',
      'React',
      'Full Stack Development',
      'Data Analytics',
      'Power BI',
      'Python',
      'SQL',
      'MongoDB',
      'Business Intelligence',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: `${siteName} showcases full stack web development projects, React developer work, Power BI dashboards, and data analyst portfolio projects in India.`,
    author: {
      '@type': 'Person',
      name: personName,
    },
    inLanguage: 'en-IN',
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    founder: {
      '@type': 'Person',
      name: personName,
    },
    sameAs: [githubUrl, linkedInUrl],
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
