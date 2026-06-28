'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/web', label: 'Web Dev' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] flex h-16 items-center transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink/85 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-base font-bold text-white">
            SG
          </div>
          <span className="font-display text-lg font-bold text-cream">Shashikant</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium ${active ? 'active text-accent' : 'text-soft hover:text-accent'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary px-5 py-2 text-sm">
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-5 bg-cream transition-transform duration-300 ${
                menuOpen && i === 0
                  ? 'translate-y-2 rotate-45'
                  : menuOpen && i === 1
                    ? 'scale-x-0'
                    : menuOpen && i === 2
                      ? '-translate-y-2 -rotate-45'
                      : ''
              }`}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-16 flex flex-col gap-5 border-b border-white/10 bg-[#0e0e0e]/95 px-8 py-6 backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-medium ${pathname === link.href ? 'text-accent' : 'text-soft'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-2">
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
