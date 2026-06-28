'use client';

import { useState } from 'react';

const contactCards = [
  { label: 'Email Web Dev', value: 'shashikantshankar707@gmail.com', href: 'mailto:shashikantshankar707@gmail.com', tone: 'accent' },
  { label: 'Email Data', value: 'shashikantds090@gmail.com', href: 'mailto:shashikantds090@gmail.com', tone: 'warm' },
  { label: 'LinkedIn', value: 'shashikant-giri-7a4549297', href: 'https://www.linkedin.com/in/shashikant-giri-7a4549297', tone: 'accent' },
  { label: 'GitHub Web', value: 'Shashikantgiri-web', href: 'https://github.com/Shashikantgiri-web', tone: 'warm' },
  { label: 'GitHub Data', value: 'shashikant-ds636', href: 'https://github.com/shashikant-ds636', tone: 'accent' },
  { label: 'Phone', value: '+91 7873059283', href: 'tel:+917873059283', tone: 'warm' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-accent/10 to-transparent py-20 text-center">
        <div className="glow-dot -top-36 right-[5%] h-[400px] w-[400px]" />
        <div className="container-custom">
          <div className="section-label mx-auto mb-6">Get In Touch</div>
          <h1 className="font-display text-5xl font-bold leading-tight text-cream md:text-6xl">
            Let&apos;s Work<br />
            <span className="gradient-text">Together</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-soft">
            I&apos;m currently open to full-time roles, freelance projects, and collaborations in web development and data analytics.
          </p>
        </div>
      </section>

      <section className="section-wrapper pb-8">
        <div className="container-custom">
          <div className="mb-16 grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-panel p-6 transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  card.tone === 'warm' ? 'hover:border-warm/40' : 'hover:border-accent/40'
                }`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-display text-xs font-bold ${card.tone === 'warm' ? 'border-warm/25 bg-warm/10 text-warm' : 'border-accent/25 bg-accent/10 text-accent'}`}>
                  {card.label.split(' ')[0]}
                </div>
                <div className="min-w-0">
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-muted">{card.label}</div>
                  <div className="truncate text-sm font-semibold text-cream">{card.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="section-label mb-6">Send a Message</div>
            <h2 className="mb-10 font-display text-3xl font-bold text-cream md:text-4xl">Drop Me a Line</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              </div>

              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className="mb-5" />

              <div className="mb-8">
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-muted">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, role, or anything you'd like to discuss..."
                  className="form-input"
                  rows={6}
                />
              </div>

              {status === 'success' && (
                <div className="mb-6 rounded-xl border border-green-400/25 bg-green-400/10 p-4 text-sm font-semibold text-green-400">
                  Message sent successfully. I&apos;ll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 rounded-xl border border-accent/25 bg-accent/10 p-4 text-sm font-semibold text-accent">
                  Something went wrong. Please try emailing me directly at shashikantshankar707@gmail.com.
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-4 text-base disabled:opacity-70">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, className = '', ...props }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-muted">{label} *</label>
      <input required className="form-input" {...props} />
    </div>
  );
}
