import apiData from '@/public/api.json';
import ProjectCard from '@/components/ProjectCard';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const metadata = {
  title: 'Web Development Projects | Shashikant Giri',
  description: 'Explore full-stack web development projects built with Next.js, React, MongoDB and more by Shashikant Giri.',
};

export default function WebPage() {
  const projects = apiData.webDev_projects;
  const skills = apiData.WebDev_Skills;

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-accent/10 to-transparent py-20">
        <div className="glow-dot -top-36 right-[5%] h-[400px] w-[400px]" />
        <div className="container-custom">
          <div className="section-label">Portfolio</div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-tight text-cream md:text-6xl">
            Web Development<br />
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-soft">
            Full-stack web applications built with modern technologies. From crowdfunding platforms to password managers, each project solves a real problem.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[...skills.frontEnd, ...skills.backend, ...skills.database].map((s) => (
              <span key={s} className="skill-badge">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-custom">
          <p className="mb-8 text-sm text-soft">
            Showing <span className="font-bold text-accent">{projects.length}</span> projects
          </p>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr))]">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} type="web" slug={slugify(project.name)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
