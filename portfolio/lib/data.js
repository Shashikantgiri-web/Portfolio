import apiData from '@/public/api.json';

export function getData() {
  return apiData;
}

export function getWebProjects() {
  return apiData.webDev_projects || [];
}

export function getAnalyticsProjects() {
  return apiData.dataAnalysis_projects || [];
}

export function getProjectBySlug(slug, type = 'web') {
  const projects = type === 'web' ? getWebProjects() : getAnalyticsProjects();
  return projects.find(
    (p) => slugify(p.name) === slug
  );
}

export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
