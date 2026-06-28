import { absoluteUrl, getAllRoutes } from '@/lib/seo';

export default function sitemap() {
  return getAllRoutes().map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('/web/') || route.includes('/analytics/') ? 0.7 : 0.8,
  }));
}
