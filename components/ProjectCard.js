'use client';

import Link from 'next/link';

export default function ProjectCard({ project, type = 'web', slug }) {
  const stack = project.techStack || project.TechStack || [];
  const isAnalytics = type === 'analytics';

  return (
    <article className="project-card group flex h-full flex-col">
      <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-panel-soft to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,85,58,0.12),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(212,165,116,0.08),transparent_50%)]" />
        <div className="relative z-[1] bg-gradient-to-br from-accent to-warm bg-clip-text font-display text-5xl font-bold text-transparent">
          {isAnalytics ? 'BI' : project.name.charAt(0).toUpperCase()}
        </div>

        <div className="absolute inset-0 z-[2] flex items-center justify-center gap-4 bg-ink/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-xs">
              Live Demo
            </a>
          )}
          {project['powerBi-link'] && (
            <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-xs">
              Power BI
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2 text-xs">
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span
            className={`rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${
              isAnalytics
                ? 'border-warm/20 bg-warm/10 text-warm'
                : 'border-accent/20 bg-accent/10 text-accent'
            }`}
          >
            {isAnalytics ? 'Analytics' : 'Web Dev'}
          </span>
          {slug && (
            <Link href={`/${type === 'web' ? 'web' : 'analytics'}/${slug}`} className="text-sm font-semibold text-muted transition-colors hover:text-accent">
              Details
            </Link>
          )}
        </div>

        <h3 className="mb-3 font-display text-lg font-bold text-cream">{project.name}</h3>
        <p className="mb-5 flex-1 text-sm leading-7 text-soft">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {stack.length > 5 && <span className="self-center text-xs text-muted">+{stack.length - 5} more</span>}
        </div>
      </div>
    </article>
  );
}
