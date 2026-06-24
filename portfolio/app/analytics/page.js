import apiData from '@/public/api.json';
import ProjectCard from '@/components/ProjectCard';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const metadata = {
  title: 'Data Analytics Projects | Shashikant Giri',
  description: 'Interactive Power BI dashboards and data analytics projects by Shashikant Giri.',
};

const kpiData = [
  { label: 'Dashboards Built', value: '3+' },
  { label: 'Tools Mastered', value: '6+' },
  { label: 'Business Insights', value: '20+' },
];

export default function AnalyticsPage() {
  const projects = apiData.dataAnalysis_projects;
  const skills = apiData.Data_Analytics_Skills;

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-warm/10 to-transparent py-20">
        <div className="glow-dot -top-36 left-[5%] h-[400px] w-[400px] bg-warm opacity-10" />
        <div className="container-custom">
          <div className="section-label border-warm/25 bg-warm/10 text-warm">Data Analytics</div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-cream md:text-6xl">
            Data & Analytics<br />
            <span className="gradient-text">Dashboards</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-soft">
            Interactive Power BI dashboards and data-driven solutions that transform raw business data into actionable insights.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {kpiData.map((kpi) => (
              <div key={kpi.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel px-7 py-5">
                <div className="font-display text-3xl font-bold leading-none text-warm">{kpi.value}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">{kpi.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-warm/20 bg-warm/10 px-4 py-2 text-sm font-bold text-warm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-custom">
          <div className="mb-16 grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,360px),1fr))]">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} type="analytics" slug={slugify(project.name)} />
            ))}
          </div>

          <div>
            <div className="section-label mb-6 border-warm/25 bg-warm/10 text-warm">Live Dashboards</div>
            <h2 className="mb-8 font-display text-3xl font-bold text-cream md:text-4xl">View Interactive Dashboards</h2>
            <div className="flex flex-col gap-8">
              {projects.filter((p) => p['powerBi-link']).map((project) => (
                <article key={project.name} className="overflow-hidden rounded-2xl border border-white/10 bg-panel">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-6">
                    <div>
                      <h3 className="font-display font-bold text-cream">{project.name}</h3>
                      <p className="mt-1 text-sm text-muted">Power BI interactive dashboard</p>
                    </div>
                    <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-xs">
                      Open Full View
                    </a>
                  </div>
                  <div className="relative aspect-video">
                    <iframe src={project['powerBi-link']} title={project.name} className="absolute inset-0 h-full w-full border-0" allowFullScreen />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
