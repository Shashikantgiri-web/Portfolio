import Link from 'next/link';

export const metadata = {
  title: '404 – Page Not Found | Shashikant Giri',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="glow-dot" style={{ width: '400px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.08 }} />
      <div>
        <div
          style={{
            fontSize: '8rem',
            fontFamily: 'Clash Grotesk, sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.06em',
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-warm))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '400px', lineHeight: 1.7, margin: '0 auto 2.5rem' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">
            Go Home →
          </Link>
          <Link href="/web" className="btn-ghost">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
