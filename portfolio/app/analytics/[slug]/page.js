import apiData from '@/public/api.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateStaticParams() {
  return apiData.dataAnalysis_projects.map((p) => ({ slug: slugify(p.name) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = apiData.dataAnalysis_projects.find((p) => slugify(p.name) === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Analytics | Shashikant Giri`,
    description: project.description,
  };
}

const kpisByProject = {
  'hospital-performance-dashboard': [
    { label: 'Patient Satisfaction', value: '87%', icon: '😊' },
    { label: 'Avg Wait Time', value: '-23%', icon: '⏱️' },
    { label: 'Readmission Rate', value: '12%', icon: '🏥' },
  ],
  'university-student-performance-analytics': [
    { label: 'Attendance Rate', value: '91%', icon: '📋' },
    { label: 'Pass Rate', value: '78%', icon: '🎓' },
    { label: 'Trend Insights', value: '5+', icon: '📈' },
  ],
  'website-traffic-analysis': [
    { label: 'Visitor Segments', value: '4', icon: '👥' },
    { label: 'Traffic Sources', value: '6+', icon: '🌐' },
    { label: 'KPIs Tracked', value: '10+', icon: '📊' },
  ],
};

export default async function AnalyticsProjectPage({ params }) {
  const { slug } = await params;
  const project = apiData.dataAnalysis_projects.find((p) => slugify(p.name) === slug);
  if (!project) notFound();

  const stack = project.TechStack || [];
  const kpis = kpisByProject[slug] || [];
  const allProjects = apiData.dataAnalysis_projects;
  const currentIndex = allProjects.findIndex((p) => slugify(p.name) === slug);
  const prev = allProjects[currentIndex - 1];
  const next = allProjects[currentIndex + 1];

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section style={{
        padding: '5rem 0 4rem',
        background: 'linear-gradient(180deg, rgba(212,165,116,0.07) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="glow-dot" style={{ width: '350px', height: '350px', top: '-100px', left: '5%', background: 'var(--accent-warm)', opacity: 0.1 }} />
        <div className="container-custom">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
            <span>/</span>
            <Link href="/analytics" style={{ color: 'var(--muted)' }}>Analytics</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>{project.name}</span>
          </div>

          <div className="section-label" style={{ color: 'var(--accent-warm)', background: 'rgba(212,165,116,0.1)', borderColor: 'rgba(212,165,116,0.25)', marginBottom: '1.25rem' }}>
            📊 Analytics Dashboard
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1.25rem', lineHeight: 1.05 }}>
            {project.name}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '620px', lineHeight: 1.8, marginBottom: '2rem' }}>
            {project.description}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project['powerBi-link'] && (
              <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Dashboard ↗
              </a>
            )}
            <Link href="/analytics" className="btn-ghost">
              ← All Dashboards
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-wrapper">
        <div className="container-custom">
          {/* KPI Row */}
          {kpis.length > 0 && (
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {kpis.map((kpi) => (
                <div key={kpi.label} style={{
                  background: 'var(--surface)', border: '1px solid rgba(212,165,116,0.2)',
                  borderRadius: '16px', padding: '1.5rem 2rem',
                  display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1, minWidth: '200px',
                }}>
                  <span style={{ fontSize: '1.8rem' }}>{kpi.icon}</span>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-warm)', fontFamily: 'Clash Grotesk', lineHeight: 1 }}>{kpi.value}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{kpi.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 items-start">
            {/* Left */}
            <div>
              {/* Overview */}
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2.5rem', marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>Project Overview</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.description}</p>
              </div>

              {/* Problem / Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: '❓', label: 'Business Problem', color: 'var(--accent-warm)', content: 'Organizations needed a clear, real-time view of performance metrics to support data-driven decision-making and identify operational inefficiencies.' },
                  { icon: '💡', label: 'Data Solution', color: '#4ade80', content: `Built an interactive Power BI dashboard using ${stack.slice(0, 3).join(', ')} — transforming raw datasets into actionable KPIs and visual narratives.` },
                ].map((item) => (
                  <div key={item.label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px', marginBottom: '1rem',
                      background: `${item.color}12`, border: `1px solid ${item.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                    }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: item.color }}>{item.label}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Power BI Embed */}
              {project['powerBi-link'] && (
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700 }}>Live Dashboard</h3>
                      <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '0.2rem' }}>interactive Power BI Dashboard</p>
                    </div>
                    <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}>
                      Full View ↗
                    </a>
                  </div>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={project['powerBi-link']}
                      title={project.name}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Insights */}
              <div style={{ background: 'linear-gradient(135deg, var(--surface), rgba(212,165,116,0.04))', border: '1px solid rgba(212,165,116,0.15)', borderRadius: '20px', padding: '2.5rem' }}>
                <h2 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>📈 Business Insights</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Identified key performance bottlenecks through data visualization',
                    'Enabled stakeholders to make faster, data-backed decisions',
                    'Revealed hidden patterns in dataset using statistical analysis',
                    'Designed intuitive KPI cards for executive-level reporting',
                    'Implemented drill-through filtering for granular data exploration',
                  ].map((insight) => (
                    <li key={insight} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent-warm)', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '80px' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.25rem' }}>
                <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Tools Used</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {stack.map((tech) => (
                    <span key={tech} style={{
                      background: 'rgba(212,165,116,0.08)', color: 'var(--accent-warm)',
                      border: '1px solid rgba(212,165,116,0.2)', padding: '0.3rem 0.75rem',
                      borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 600,
                    }}>{tech}</span>
                  ))}
                </div>
              </div>

              {project['powerBi-link'] && (
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Links</h3>
                  <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-warm)', fontSize: '0.875rem', fontWeight: 600 }}>
                    📊 Power BI Dashboard ↗
                  </a>
                </div>
              )}

              <Link href="/analytics" className="btn-ghost" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                ← All Dashboards
              </Link>
            </div>
          </div>

          {/* Prev/Next */}
          <div className={`grid gap-4 mt-16 pt-10 border-t border-custom ${prev && next ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`} style={{ borderTop: '1px solid var(--border)' }}>
            {prev && (
              <Link href={`/analytics/${slugify(prev.name)}`} className="hover-slide-left-warm" style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.25rem',
                textDecoration: 'none',
              }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>← Previous</div>
                <div style={{ fontFamily: 'Clash Grotesk', fontWeight: 700, fontSize: '0.95rem' }}>{prev.name}</div>
              </Link>
            )}
            {next && (
              <Link href={`/analytics/${slugify(next.name)}`} className="hover-slide-right-warm" style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.25rem',
                textDecoration: 'none', textAlign: 'right',
              }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>Next →</div>
                <div style={{ fontFamily: 'Clash Grotesk', fontWeight: 700, fontSize: '0.95rem' }}>{next.name}</div>
              </Link>
            )}
          </div>
        </div>

      </section>
    </div>
  );
}
