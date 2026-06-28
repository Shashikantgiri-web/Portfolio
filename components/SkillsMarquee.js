const skills = [
  { name: 'HTML', icon: 'HTML' },
  { name: 'CSS', icon: 'CSS' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'React', icon: 'RX' },
  { name: 'Next.js', icon: 'NX' },
  { name: 'Node.js', icon: 'ND' },
  { name: 'MongoDB', icon: 'DB' },
  { name: 'Python', icon: 'PY' },
  { name: 'SQL', icon: 'SQL' },
  { name: 'Excel', icon: 'XL' },
  { name: 'Power BI', icon: 'BI' },
  { name: 'Tailwind', icon: 'TW' },
  { name: 'Figma', icon: 'FG' },
  { name: 'Express.js', icon: 'EX' },
];

function SkillPill({ skill }) {
  return (
    <div className="flex cursor-default items-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-panel px-6 py-3 transition-colors hover:border-accent/30 hover:bg-accent/10">
      <span className="font-display text-xs font-bold text-accent">{skill.icon}</span>
      <span className="font-display text-sm font-semibold text-soft">{skill.name}</span>
    </div>
  );
}

export default function SkillsMarquee() {
  const doubled = [...skills, ...skills];

  return (
    <section className="section-wrapper overflow-hidden py-12">
      <div className="container-custom mb-8">
        <div className="section-label">Technical Stack</div>
        <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">Skills & Technologies</h2>
      </div>

      <div className="marquee-wrapper mb-4">
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <SkillPill key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track [animation-direction:reverse] [animation-duration:30s]">
          {[...doubled].reverse().map((skill, i) => (
            <SkillPill key={`${skill.name}-reverse-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
