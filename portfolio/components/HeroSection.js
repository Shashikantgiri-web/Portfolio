import Link from 'next/link';

const orbTechs = [
  { label: 'Next.js', angle: 0 },
  { label: 'React', angle: 51 },
  { label: 'JavaScript', angle: 102 },
  { label: 'MongoDB', angle: 154 },
  { label: 'Python', angle: 205 },
  { label: 'SQL', angle: 257 },
  { label: 'Power BI', angle: 308 },
];

export default function HeroSection({ data }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="glow-dot -right-24 -top-48 h-[600px] w-[600px]" />
      <div className="glow-dot -bottom-24 -left-24 h-[400px] w-[400px] bg-warm" />

      <div className="container-custom w-full">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative z-[2]">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_3px_rgba(74,222,128,0.2)] [animation:pulse_2s_infinite]" />
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Available For Hire</span>
            </div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-none text-cream md:text-7xl">
              <span className="block">DATA-DRIVEN</span>
              <span className="block">FULL STACK</span>
              <span className="gradient-text block">DEVELOPER</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-soft">
              I build scalable web applications and transform business data into actionable insights.
              Based in <span className="text-cream">{data.Personl_detail.Loction}</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/web" className="btn-primary">View Projects</Link>
              <Link href="/contact" className="btn-ghost">Contact Me</Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-10">
              {[
                { num: `${data.webDev_projects.length}+`, label: 'Web Projects' },
                { num: `${data.dataAnalysis_projects.length}+`, label: 'Data Dashboards' },
                { num: `${data.certifications.length}+`, label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold leading-none text-accent">{stat.num}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.06em] text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden items-center justify-center md:flex">
            <div className="relative flex h-[420px] w-[420px] items-center justify-center">
              <div className="orb-ring absolute inset-0 border border-dashed border-accent/20" />
              <div className="orb-ring absolute inset-[30px] border border-dashed border-warm/20 [animation-direction:reverse] [animation-duration:18s]" />

              <div className="orb-ring absolute inset-0">
                {orbTechs.map((tech) => {
                  const rad = (tech.angle * Math.PI) / 180;
                  const r = 190;
                  const x = 50 + (r / 420) * 100 * Math.cos(rad);
                  const y = 50 + (r / 420) * 100 * Math.sin(rad);
                  return (
                    <div
                      key={tech.label}
                      className="absolute whitespace-nowrap rounded-lg border border-white/10 bg-panel px-3 py-1.5 text-xs font-bold tracking-wide text-accent shadow-lg"
                      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      {tech.label}
                    </div>
                  );
                })}
              </div>

              <div className="relative z-[2] flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-accent/30 bg-gradient-to-br from-panel-soft to-panel shadow-[0_0_60px_rgba(232,85,58,0.15)]">
                <div className="gradient-text font-display text-6xl font-bold leading-none">SG</div>
                <div className="mt-2 text-xs font-bold tracking-[0.08em] text-muted">FULL STACK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-xs uppercase tracking-[0.1em] text-muted">Scroll</span>
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/10 pt-1.5">
          <div className="h-2 w-1 rounded-full bg-accent [animation:scroll-dot_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
