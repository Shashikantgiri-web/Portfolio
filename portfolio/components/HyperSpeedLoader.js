'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function HyperSpeedLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState('idle'); // 'initial' | 'transition' | 'idle'
  const prevPathnameRef = useRef(pathname);

  // Speed lines state
  const [speedLines, setSpeedLines] = useState([]);

  // Generate randomized speed lines
  useEffect(() => {
    if (mode === 'idle') return;

    const generateLines = () => {
      const lines = [];
      const lineCount = mode === 'initial' ? 25 : 18;
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          width: Math.random() * 200 + 50,
          speed: Math.random() * 0.8 + 0.4,
          delay: Math.random() * 0.5,
        });
      }
      setSpeedLines(lines);
    };

    generateLines();
    const interval = setInterval(generateLines, 800);
    return () => clearInterval(interval);
  }, [mode]);

  // Handle initial visit loader and page transitions
  useEffect(() => {
    const isFirstVisit = !sessionStorage.getItem('hasLoadedPortfolio');

    if (isFirstVisit) {
      // Run full loader on first visit
      setMode('initial');
      setVisible(true);
      setProgress(0);

      let currentProgress = 0;
      const duration = 1800; // 1.8 seconds
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = 100 / totalSteps;

      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= 100) {
          setProgress(100);
          clearInterval(timer);
          sessionStorage.setItem('hasLoadedPortfolio', 'true');
          
          // Fade out
          setTimeout(() => {
            setVisible(false);
            setMode('idle');
          }, 300);
        } else {
          setProgress(Math.floor(currentProgress));
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else {
      // Not first visit, keep hidden initially
      setMode('idle');
      setVisible(false);
    }
  }, []);

  // Listen to path changes for page transition loader
  useEffect(() => {
    // If it's a pathname change, run a quick speed line transition
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Only run transition if the initial loader has finished
      if (sessionStorage.getItem('hasLoadedPortfolio') === 'true') {
        setMode('transition');
        setVisible(true);
        setProgress(100);

        // Run transition speed lines for 700ms, then fade out
        const timer = setTimeout(() => {
          setVisible(false);
          setMode('idle');
        }, 700);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0C0C0C',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: 'all',
        overflow: 'hidden',
      }}
    >
      {/* Noise background */}
      <div
        style={{
          content: "''",
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          opacity: 0.03,
          zIndex: 1,
        }}
      />

      {/* Speed lines */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 2 }}>
        {speedLines.map((line) => (
          <div
            key={line.id}
            className="loader-line-horizontal"
            style={{
              top: `${line.top}%`,
              left: `${line.left}%`,
              width: `${line.width}px`,
              animation: `speedLine ${line.speed}s linear infinite`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Loader Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          maxWidth: '90%',
          textAlign: 'center',
        }}
      >
        {/* Floating Loader Central Element */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1C1C1C, #141414)',
            border: '2px solid rgba(232, 85, 58, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            boxShadow: '0 0 50px rgba(232, 85, 58, 0.25)',
            animation: 'floatLoader 3s ease-in-out infinite',
          }}
        >
          <span
            style={{
              fontFamily: 'Clash Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '2.2rem',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-warm))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}
          >
            SG
          </span>
          <span style={{ fontSize: '0.55rem', color: 'var(--muted)', marginTop: '0.2rem', letterSpacing: '0.1em', fontWeight: 700 }}>
            SYSTEMS
          </span>
        </div>

        {mode === 'initial' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h2
              style={{
                fontFamily: 'Clash Grotesk, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Initializing Portfolio Experience
            </h2>
            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                maxWidth: '420px',
                lineHeight: 1.6,
              }}
            >
              Loading projects, dashboards and interactive experiences...
            </p>
          </div>
        )}

        {mode === 'transition' && (
          <div>
            <h2
              style={{
                fontFamily: 'Clash Grotesk, sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              TRANSITIONING...
            </h2>
          </div>
        )}

        {/* Progress bar and indicator */}
        {mode === 'initial' && (
          <div style={{ width: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-warm))',
                  transition: 'width 0.1s linear',
                  boxShadow: '0 0 10px var(--accent)',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: 'Clash Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--accent)',
                letterSpacing: '0.05em',
              }}
            >
              {progress}%
            </span>
          </div>
        )}
      </div>

    </div>
  );
}
