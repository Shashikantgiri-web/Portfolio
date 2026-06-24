import apiData from '@/public/api.json';

export const metadata = {
  title: 'About | Shashikant Giri',
  description: 'Learn about Shashikant Giri — Full Stack Developer & Data Analyst from Navi Mumbai. B.Sc. IT graduate passionate about data-driven web applications.',
};

const skillCategories = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: 'var(--accent)',
    items: ['HTML', 'CSS', 'JavaScript', 'React Js', 'Next Js', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'var(--accent-warm)',
    items: ['Node JS', 'Express Js', 'REST API', 'Nodemon'],
  },
  {
    label: 'Database',
    icon: '🗄️',
    color: '#4ade80',
    items: ['MongoDB', 'MySQL', 'MongoDB Compass'],
  },
  {
    label: 'Data & Analytics',
    icon: '📊',
    color: '#818cf8',
    items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Excel', 'SQL'],
  },
  {
    label: 'Tools & Platforms',
    icon: '🛠️',
    color: '#fb923c',
    items: ['VS Code', 'Figma', 'Postman', 'GitHub', 'Vercel', 'Netlify', 'Cursor'],
  },
];

export default function AboutPage() {
  const data = apiData;

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '5rem 0 4rem',
          background: 'linear-gradient(180deg, rgba(232,85,58,0.04) 0%, transparent 100%)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
        }}
      >
        <div className="glow-dot" style={{ width: '350px', height: '350px', top: '-100px', right: '10%', opacity: 0.1 }} />
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <div className="section-label">👋 About Me</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1.5rem', lineHeight: 1.05 }}>
                {data.name}
              </h1>
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1rem', marginBottom: '1.25rem', fontFamily: 'Clash Grotesk, sans-serif' }}>
                {data.Professional_Title}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                {data.Info}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`mailto:${data.Personl_detail.Email.WEbDev_email}`} className="btn-primary">
                  Email Me →
                </a>
                <a href={`https://${data.Linkedli}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Right — Info card */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2rem',
            }}>
              {[
                { label: 'Location', value: data.Personl_detail.Loction, icon: '📍' },
                { label: 'Phone', value: data.Personl_detail.Contack_no, icon: '📞' },
                { label: 'Email (Web)', value: data.Personl_detail.Email.WEbDev_email, icon: '📧' },
                { label: 'Email (Data)', value: data.Personl_detail.Email.dataAnalysis_email, icon: '📊' },
                { label: 'GitHub (Web)', value: 'Shashikantgiri-web', icon: '🐙', href: data.Github.WebDev_Github_Link },
                { label: 'GitHub (Data)', value: 'shashikant-ds636', icon: '🔬', href: data.Github.dataAnalysis_Github_Link },
                { label: 'LinkedIn', value: 'shashikant-giri', icon: '💼', href: `https://${data.Linkedli}` },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '0.9rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 500, wordBreak: 'break-all' }}>
                        {item.value} ↗
                      </a>
                    ) : (
                      <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem', wordBreak: 'break-all' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Mission & Objective */}
      <section className="section-wrapper">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🎯', label: 'Mission', title: 'My Mission', content: data.Mission, color: 'var(--accent)' },
              { icon: '🚀', label: 'Career Objective', title: 'Career Objective', content: data.Career_Objective, color: 'var(--accent-warm)' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: '-40px', right: '-40px', width: '140px', height: '140px',
                  background: `radial-gradient(circle, ${item.color}14, transparent)`,
                  borderRadius: '50%', pointerEvents: 'none',
                }} />
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', marginBottom: '1.25rem',
                  background: `${item.color}14`, border: `1px solid ${item.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '0.72rem', color: item.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {item.label}
                </div>
                <h3 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Technical Skills */}
      <section className="section-wrapper" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-custom">
          <div className="section-label">⚡ Skills</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '3rem' }}>
            Technical Expertise
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                className="hover-lift-warm"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{
                    width: '40px', height: '40px', borderRadius: '10px', fontSize: '1.1rem',
                    background: `${cat.color}12`, border: `1px solid ${cat.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {cat.icon}
                  </span>
                  <h4 style={{ fontFamily: 'Clash Grotesk', fontSize: '0.95rem', fontWeight: 700, color: cat.color }}>{cat.label}</h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: `${cat.color}08`,
                        color: 'var(--text-secondary)',
                        border: `1px solid ${cat.color}15`,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-wrapper">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Education */}
            <div>
              <div className="section-label">🎓 Education</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
                Academic Background
              </h2>
              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
                {data.EDUCATION.map((edu, i) => (
                  <div key={i} className="timeline-item" style={{ position: 'relative', marginBottom: i < data.EDUCATION.length - 1 ? '2.5rem' : 0 }}>
                    <div className="hover-slide-right-accent-lg" style={{
                      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.5rem',
                    }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)',
                          background: 'rgba(232,85,58,0.1)', border: '1px solid rgba(232,85,58,0.2)',
                          padding: '0.2rem 0.6rem', borderRadius: '9999px', letterSpacing: '0.06em',
                        }}>{edu.year}</span>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: edu.status === 'Graduated' ? '#4ade80' : 'var(--accent-warm)' }}>
                          {edu.status}
                        </span>
                      </div>
                      <h4 style={{ fontFamily: 'Clash Grotesk', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{edu.course}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{edu.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="section-label">🏆 Certifications</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>
                Professional Credentials
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.certifications.map((cert, i) => (
                  <div key={i} className="hover-lift-accent" style={{
                    background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px',
                    padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  }}
                  >
                    <div style={{
                      width: '48px', height: '48px', flexShrink: 0, borderRadius: '12px',
                      background: cert.currently ? 'rgba(212,165,116,0.1)' : 'rgba(232,85,58,0.1)',
                      border: `1px solid ${cert.currently ? 'rgba(212,165,116,0.2)' : 'rgba(232,85,58,0.2)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                    }}>
                      {cert.currently ? '🔄' : '🏆'}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Clash Grotesk', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>{cert.name}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
                        Issued by <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{cert.issuedBy}</span>
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{cert.year}</span>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '9999px',
                          background: cert.currently ? 'rgba(212,165,116,0.1)' : 'rgba(74,222,128,0.1)',
                          color: cert.currently ? 'var(--accent-warm)' : '#4ade80',
                          border: `1px solid ${cert.currently ? 'rgba(212,165,116,0.2)' : 'rgba(74,222,128,0.2)'}`,
                        }}>
                          {cert.currently ? '● Pursuing' : '✓ ' + cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
