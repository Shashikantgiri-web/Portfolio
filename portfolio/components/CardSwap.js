'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';

const projects = [
  {
    name: 'GetMyChap',
    fullName: 'Getmychap---fund-raising-website',
    type: 'web',
    slug: 'getmychap-fund-raising-website',
    description: 'A crowdfunding web platform that enables users to support fundraising campaigns through a modern and responsive interface. Implemented campaign presentation, donation workflows, and mobile-friendly design using modern web technologies.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Next Auth', 'QR Payment'],
    link: '/web/getmychap-fund-raising-website',
    emoji: '💰',
    color: 'rgba(232, 85, 58, 0.1)',
    borderColor: 'rgba(232, 85, 58, 0.3)',
    glowColor: 'rgba(232, 85, 58, 0.15)',
  },
  {
    name: 'Hospital Dashboard',
    fullName: 'Hospital performance dashboard',
    type: 'analytics',
    slug: 'hospital-performance-dashboard',
    description: 'Designed and developed an interactive Power BI dashboard to analyze hospital performance metrics including patient satisfaction, average waiting time, readmission rates, and operational efficiency. Created KPI visualizations and actionable insights to support data-driven decision making.',
    tags: ['Power BI', 'Microsoft Excel', 'Data Cleaning', 'Dashboard Development', 'Business Intelligence'],
    link: '/analytics/hospital-performance-dashboard',
    emoji: '🏥',
    color: 'rgba(212, 165, 116, 0.1)',
    borderColor: 'rgba(212, 165, 116, 0.3)',
    glowColor: 'rgba(212, 165, 116, 0.15)',
  },
  {
    name: 'LinkTree',
    fullName: 'Link Tree',
    type: 'web',
    slug: 'link-tree',
    description: 'Built a personal link aggregation platform that allows users to organize and share multiple social media and website links through a single customizable profile page.',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Rest API', 'Vercel'],
    link: '/web/link-tree',
    emoji: '🔗',
    color: 'rgba(232, 85, 58, 0.1)',
    borderColor: 'rgba(232, 85, 58, 0.3)',
    glowColor: 'rgba(232, 85, 58, 0.15)',
  },
  {
    name: 'Student Dashboard',
    fullName: 'University Student Performance Analytics',
    type: 'analytics',
    slug: 'university-student-performance-analytics',
    description: 'Built a Power BI dashboard to evaluate student academic performance by analyzing attendance, examination scores, and graduation trends. Developed interactive visualizations and KPI tracking to identify performance patterns and support educational decision-making.',
    tags: ['Power BI', 'Microsoft Excel', 'Data Visualisation', 'KPI Analysis', 'Data Cleaning'],
    link: '/analytics/university-student-performance-analytics',
    emoji: '🎓',
    color: 'rgba(212, 165, 116, 0.1)',
    borderColor: 'rgba(212, 165, 116, 0.3)',
    glowColor: 'rgba(212, 165, 116, 0.15)',
  },
];

export default function CardSwap() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const cardsRef = useRef([]);
  const autoSwapRef = useRef(null);

  const activeProject = projects[activeIndex];

  // GSAP 3D stack position calculator
  const updateStackLayout = (animatingCardIndex = -1, isNextDirection = true) => {
    projects.forEach((_, index) => {
      const card = cardsRef.current[index];
      if (!card) return;

      // Calculate relative position in the stack (0 = top/front, 3 = bottom/back)
      const relativeIndex = (index - activeIndex + 4) % 4;

      // Front card styles
      if (relativeIndex === 0) {
        gsap.to(card, {
          z: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotate: 0,
          zIndex: 10,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
      // Stacked cards going deeper
      else {
        const scale = 1 - relativeIndex * 0.06;
        const yOffset = -relativeIndex * 24;
        const zOffset = -relativeIndex * 60;
        const rotateVal = relativeIndex % 2 === 0 ? 2 * relativeIndex : -2 * relativeIndex;

        // Skip animating the card that is currently flying out
        if (index === animatingCardIndex) return;

        gsap.to(card, {
          z: zOffset,
          y: yOffset,
          scale: scale,
          opacity: 0.85 - relativeIndex * 0.15,
          rotate: rotateVal,
          zIndex: 10 - relativeIndex,
          duration: 0.5,
          ease: 'power3.out',
        });
      }
    });
  };

  // Perform card swap animation
  const handleSwap = (nextIndex) => {
    if (isSwapping || nextIndex === activeIndex) return;
    setIsSwapping(true);

    const isNext = (nextIndex - activeIndex + 4) % 4 === 1 || (nextIndex === 0 && activeIndex === 3);
    const topCard = cardsRef.current[activeIndex];

    if (!topCard) {
      setActiveIndex(nextIndex);
      setIsSwapping(false);
      return;
    }

    // GSAP Timeline for swapping top card
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(nextIndex);
        setIsSwapping(false);
      },
    });

    // 1. Top card flies out
    tl.to(topCard, {
      x: isNext ? 360 : -360,
      rotate: isNext ? 12 : -12,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: 'power2.in',
    });

    // 2. Bring card back at the bottom of the stack
    tl.set(topCard, {
      x: 0,
      zIndex: 5,
    });

    // Apply forward animation to other cards midway through
    setTimeout(() => {
      // Calculate layout for new active index
      projects.forEach((_, index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        // The card that flew out goes to the bottom of the stack
        if (index === activeIndex) {
          const relativeIndex = (index - nextIndex + 4) % 4;
          const scale = 1 - relativeIndex * 0.06;
          const yOffset = -relativeIndex * 24;
          const zOffset = -relativeIndex * 60;
          const rotateVal = relativeIndex % 2 === 0 ? 2 * relativeIndex : -2 * relativeIndex;

          gsap.to(card, {
            z: zOffset,
            y: yOffset,
            scale: scale,
            opacity: 0.85 - relativeIndex * 0.15,
            rotate: rotateVal,
            duration: 0.35,
            ease: 'power2.out',
          });
        } else {
          // Other cards move forward
          const relativeIndex = (index - nextIndex + 4) % 4;
          if (relativeIndex === 0) {
            gsap.to(card, {
              z: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
              zIndex: 10,
              duration: 0.45,
              ease: 'power3.out',
            });
          } else {
            const scale = 1 - relativeIndex * 0.06;
            const yOffset = -relativeIndex * 24;
            const zOffset = -relativeIndex * 60;
            const rotateVal = relativeIndex % 2 === 0 ? 2 * relativeIndex : -2 * relativeIndex;

            gsap.to(card, {
              z: zOffset,
              y: yOffset,
              scale: scale,
              opacity: 0.85 - relativeIndex * 0.15,
              rotate: rotateVal,
              zIndex: 10 - relativeIndex,
              duration: 0.45,
              ease: 'power3.out',
            });
          }
        }
      });
    }, 200);
  };

  const nextCard = () => {
    const nextIdx = (activeIndex + 1) % projects.length;
    handleSwap(nextIdx);
  };

  const prevCard = () => {
    const prevIdx = (activeIndex - 1 + projects.length) % projects.length;
    handleSwap(prevIdx);
  };

  // Start auto-swap timer
  const startTimer = () => {
    if (autoSwapRef.current) clearInterval(autoSwapRef.current);
    autoSwapRef.current = setInterval(nextCard, 5000); // swap every 5s
  };

  const stopTimer = () => {
    if (autoSwapRef.current) {
      clearInterval(autoSwapRef.current);
      autoSwapRef.current = null;
    }
  };

  useEffect(() => {
    updateStackLayout();
    startTimer();
    return () => stopTimer();
  }, [activeIndex]);

  const handleCardClick = (index, event) => {
    if (index === activeIndex) {
      // If active card clicked, go to the case study
      router.push(projects[index].link);
    } else {
      // If background card clicked, swap it to front
      handleSwap(index);
    }
  };

  return (
    <section className="section-wrapper" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Visual Accents */}
      <div className="glow-dot" style={{ width: '450px', height: '450px', top: '20%', left: '55%', background: activeProject.glowColor, opacity: 0.15, transition: 'background-color 0.5s' }} />

      <div className="container-custom">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ color: activeProject.type === 'web' ? 'var(--accent)' : 'var(--accent-warm)', borderColor: activeProject.type === 'web' ? 'rgba(232,85,58,0.2)' : 'rgba(212,165,116,0.2)', transition: 'all 0.4s' }}>
            🔄 Spotlight Showcase
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            interactive <span className="gradient-text">Card Swap</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Explore the flagship projects. Click on the active card to view its complete case study.
          </p>
        </div>

        {/* Layout Grid */}
        <div
          className="cardswap-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: Active Project Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 5 }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: activeProject.color,
                  border: `1px solid ${activeProject.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: `0 8px 20px ${activeProject.glowColor}`,
                  transition: 'all 0.5s ease',
                }}
              >
                {activeProject.emoji}
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: activeProject.type === 'web' ? 'var(--accent)' : 'var(--accent-warm)',
                  background: activeProject.type === 'web' ? 'rgba(232,85,58,0.08)' : 'rgba(212,165,116,0.08)',
                  border: `1px solid ${activeProject.type === 'web' ? 'rgba(232,85,58,0.15)' : 'rgba(212,165,116,0.15)'}`,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '9999px',
                  transition: 'all 0.5s ease',
                }}
              >
                {activeProject.type === 'web' ? 'Web Development' : 'Data Analytics'}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'Clash Grotesk, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
              }}
            >
              {activeProject.name}
            </h3>

            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.7,
                transition: 'color 0.3s ease',
              }}
            >
              {activeProject.description}
            </p>

            {/* Tech stack tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0' }}>
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="tech-tag"
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.3rem 0.8rem',
                    color: activeProject.type === 'web' ? 'var(--accent)' : 'var(--accent-warm)',
                    background: activeProject.type === 'web' ? 'rgba(232,85,58,0.07)' : 'rgba(212,165,116,0.07)',
                    borderColor: activeProject.type === 'web' ? 'rgba(232,85,58,0.15)' : 'rgba(212,165,116,0.15)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <Link href={activeProject.link} className="btn-primary" style={{ padding: '0.9rem 2.2rem', gap: '0.6rem' }}>
                View Case Study 
                <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>→</span>
              </Link>
              
              {/* Stack Controls */}
              <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                <button
                  onClick={prevCard}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--surface-light)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  ←
                </button>
                <button
                  onClick={nextCard}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--surface-light)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Perspective Stack */}
          <div
            style={{
              position: 'relative',
              height: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            <div className="card-swap-container">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={project.name}
                    ref={(el) => (cardsRef.current[index] = el)}
                    onClick={(e) => handleCardClick(index, e)}
                    className={`card-swap-item ${isActive ? 'active' : ''}`}
                    style={{
                      transformOrigin: 'bottom center',
                      userSelect: 'none',
                    }}
                  >
                    {/* Top Row inside card */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '16px',
                          background: project.color,
                          border: `1px solid ${project.borderColor}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.8rem',
                          boxShadow: `0 8px 24px ${project.glowColor}`,
                        }}
                      >
                        {project.emoji}
                      </div>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: project.type === 'web' ? 'var(--accent)' : 'var(--accent-warm)',
                          background: project.type === 'web' ? 'rgba(232,85,58,0.06)' : 'rgba(212,165,116,0.06)',
                          border: `1px solid ${project.type === 'web' ? 'rgba(232,85,58,0.12)' : 'rgba(212,165,116,0.12)'}`,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {project.type === 'web' ? 'Web Dev' : 'Analytics'}
                      </span>
                    </div>

                    {/* Middle title & text inside card */}
                    <div style={{ margin: '1.5rem 0' }}>
                      <h4
                        style={{
                          fontFamily: 'Clash Grotesk, sans-serif',
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          letterSpacing: '-0.01em',
                          color: 'var(--text-primary)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {project.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'Satoshi, sans-serif',
                          fontSize: '0.82rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Footer inside card */}
                    <div
                      style={{
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.3rem' }}>
                        {project.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '0.65rem',
                              color: 'var(--muted)',
                              border: '1px solid var(--border)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                        }}
                      >
                        {isActive ? 'Case Study →' : 'View'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
