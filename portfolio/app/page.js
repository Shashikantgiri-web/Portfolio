import apiData from '@/public/api.json';
import HeroSection from '@/components/HeroSection';
import SkillsMarquee from '@/components/SkillsMarquee';
import FeaturedProjects from '@/components/FeaturedProjects';
import CardSwap from '@/components/CardSwap';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Shashikant Giri | Data-Driven Full Stack Developer',
  description: 'Portfolio of Shashikant Giri — Full Stack Developer & Data Analyst. Building scalable web applications and Power BI dashboards.',
};

export default function HomePage() {
  const data = apiData;

  return (
    <>
      <HeroSection data={data} />
      <SkillsMarquee />
      <FeaturedProjects webProjects={data.webDev_projects} analyticsProjects={data.dataAnalysis_projects} />
      <CardSwap />

      <section className="section-wrapper bg-panel">
        <div className="container-custom">
          <div className="grid items-start gap-16 md:grid-cols-2">
            <div>
              <div className="section-label">Education</div>
              <h2 className="mb-10 mt-4 font-display text-3xl font-bold text-cream md:text-4xl">Academic Journey</h2>
              <div className="relative border-l border-white/10 pl-8">
                {data.EDUCATION.map((edu, i) => (
                  <div key={`${edu.course}-${i}`} className={`timeline-item relative ${i < data.EDUCATION.length - 1 ? 'mb-10' : ''}`}>
                    <div className="rounded-2xl border border-white/10 bg-panel-soft p-6 transition-colors hover:border-accent/30">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-accent">
                          {edu.year}
                        </span>
                        <span className={`text-xs font-bold ${edu.status === 'Graduated' ? 'text-green-400' : 'text-warm'}`}>{edu.status}</span>
                      </div>
                      <h4 className="mb-1 font-display font-bold text-cream">{edu.course}</h4>
                      <p className="text-sm text-soft">{edu.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-label">Certifications</div>
              <h2 className="mb-10 mt-4 font-display text-3xl font-bold text-cream md:text-4xl">Credentials</h2>
              <div className="flex flex-col gap-4">
                {data.certifications.map((cert, i) => (
                  <article key={`${cert.name}-${i}`} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-panel p-6 transition-all hover:-translate-y-1 hover:border-accent/30">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-display text-xs font-bold ${cert.currently ? 'border-warm/20 bg-warm/10 text-warm' : 'border-accent/20 bg-accent/10 text-accent'}`}>
                      {cert.currently ? 'NOW' : 'OK'}
                    </div>
                    <div>
                      <h4 className="mb-1 font-display font-bold text-cream">{cert.name}</h4>
                      <p className="mb-2 text-sm text-soft">{cert.issuedBy}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted">{cert.year}</span>
                        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${cert.currently ? 'border-warm/20 bg-warm/10 text-warm' : 'border-green-400/20 bg-green-400/10 text-green-400'}`}>
                          {cert.currently ? 'Pursuing' : cert.status}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
