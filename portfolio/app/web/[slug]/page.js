import apiData from '@/public/api.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function generateStaticParams() {
  return apiData.webDev_projects.map((p) => ({ slug: slugify(p.name) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = apiData.webDev_projects.find((p) => slugify(p.name) === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Web Project | Shashikant Giri`,
    description: project.description,
    openGraph: { title: project.name, description: project.description },
  };
}

export default async function WebProjectPage({ params }) {
  const { slug } = await params;
  const project = apiData.webDev_projects.find((p) => slugify(p.name) === slug);
  if (!project) notFound();

  const stack = project.techStack || [];
  const allProjects = apiData.webDev_projects;
  const currentIndex = allProjects.findIndex((p) => slugify(p.name) === slug);
  const prev = allProjects[currentIndex - 1];
  const next = allProjects[currentIndex + 1];

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero Banner */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, rgba(232,85,58,0.07) 0%, transparent 100%)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="glow-dot" style={{ width: '350px', height: '350px', top: '-100px', right: '5%', opacity: 0.12 }} />
        <div className="container-custom">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span>/</span>
            <Link href="/web" style={{ color: 'var(--muted)' }}>Web Dev</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>{project.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
            <div>
              <div className="section-label" style={{ marginBottom: '1.25rem' }}>💻 Web Project</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1.25rem', lineHeight: 1.05 }}>
                {project.name}
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.8 }}>
                {project.description}
              </p>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Live Demo ↗
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-wrapper">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">
            {/* Left: Overview */}
            <div>
              {/* Overview card */}
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px',
                padding: '2.5rem', marginBottom: '2rem',
              }}>
                <h2 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                  Project Overview
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                  {project.description}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: '❓', label: 'Problem Statement', color: 'var(--accent)',
                    content: `This project addresses the need for a modern, accessible solution that helps users efficiently manage and interact with the core functionality — built to solve real-world workflow challenges.`,
                  },
                  {
                    icon: '✅', label: 'Solution', color: '#4ade80',
                    content: `Built with ${stack.slice(0, 3).join(', ')}, this project delivers a responsive, performant, and user-friendly interface with a solid backend architecture and clean code structure.`,
                  },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px', marginBottom: '1rem',
                      background: `${item.color}12`, border: `1px solid ${item.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                    }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: item.color }}>
                      {item.label}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2.5rem', marginBottom: '2rem',
              }}>
                <h2 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Responsive mobile-first design',
                    'Clean and intuitive UI/UX',
                    'RESTful API integration',
                    'Optimized performance',
                    'Secure data handling',
                    'Deployed on Vercel / Netlify',
                  ].map((feat) => (
                    <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div style={{
                background: 'linear-gradient(135deg, var(--surface), rgba(232,85,58,0.04))',
                border: '1px solid rgba(232,85,58,0.15)', borderRadius: '20px', padding: '2.5rem',
              }}>
                <h2 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>💡 Lessons Learned</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  Building this project reinforced best practices in modern web development — from component architecture in React/Next.js to database schema design in MongoDB. It highlighted the importance of thoughtful UX decisions and performance optimization for real-world deployment.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div style={{ position: 'sticky', top: '80px' }}>
              {/* Tech Stack */}
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.25rem',
              }}>
                <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Tech Stack</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {stack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.25rem',
              }}>
                <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Links</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
                      🌐 Live Demo ↗
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600 }}>
                      🐙 GitHub Repository ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Back button */}
              <Link href="/web" className="btn-ghost" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                ← All Web Projects
              </Link>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className={`grid gap-4 mt-16 pt-10 border-t border-custom ${prev ? next ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-[1fr_auto]' : 'grid-cols-1 md:grid-cols-[auto_1fr]'}`} style={{ borderTop: '1px solid var(--border)' }}>
            {prev && (
              <Link href={`/web/${slugify(prev.name)}`} className="hover-slide-left-accent" style={{
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.25rem',
                textDecoration: 'none',
              }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>← Previous</div>
                <div style={{ fontFamily: 'Clash Grotesk', fontWeight: 700, fontSize: '0.95rem' }}>{prev.name}</div>
              </Link>
            )}
            {next && (
              <Link href={`/web/${slugify(next.name)}`} className="hover-slide-right-accent" style={{
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
