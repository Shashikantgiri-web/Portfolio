import Link from 'next/link';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function FeaturedProjects({ webProjects, analyticsProjects }) {
  const featured = [...webProjects.slice(0, 2), ...analyticsProjects.slice(0, 2)];

  return (
    <section className="section-wrapper">
      <div className="container-custom">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="section-label">Featured Work</div>
            <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
              Projects that <span className="gradient-text">matter</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/web" className="btn-ghost px-5 py-2 text-sm">Web Projects</Link>
            <Link href="/analytics" className="btn-ghost px-5 py-2 text-sm">Analytics</Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {featured.map((project, i) => {
            const isWeb = i < 2;
            const stack = project.techStack || project.TechStack || [];
            const href = `/${isWeb ? 'web' : 'analytics'}/${slugify(project.name)}`;
            const wide = i === 0 || i === 3;

            return (
              <article key={project.name} className={`project-card group relative min-h-72 ${wide ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <div className={`absolute -right-16 -top-16 h-52 w-52 rounded-full ${isWeb ? 'bg-accent/10' : 'bg-warm/10'} blur-xl`} />
                <div className="relative z-[1] flex h-full flex-col p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border font-display text-lg font-bold ${isWeb ? 'border-accent/20 bg-accent/10 text-accent' : 'border-warm/20 bg-warm/10 text-warm'}`}>
                      {isWeb ? 'WEB' : 'BI'}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${isWeb ? 'border-accent/20 bg-accent/10 text-accent' : 'border-warm/20 bg-warm/10 text-warm'}`}>
                      {isWeb ? 'Web Dev' : 'Analytics'}
                    </span>
                  </div>

                  <h3 className="mb-3 font-display text-xl font-bold text-cream">{project.name}</h3>
                  <p className="mb-6 flex-1 text-sm leading-7 text-soft">{project.description.slice(0, 130)}...</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag text-xs">{tech}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-sm font-semibold">
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-cream">Live Demo</a>}
                    {project['powerBi-link'] && <a href={project['powerBi-link']} target="_blank" rel="noopener noreferrer" className="text-warm hover:text-cream">Power BI</a>}
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cream">GitHub</a>}
                    <Link href={href} className="ml-auto text-muted hover:text-accent">Case Study</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
