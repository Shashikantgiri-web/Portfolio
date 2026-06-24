import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="section-wrapper">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl border border-accent/15 bg-gradient-to-br from-panel to-accent/10 px-6 py-14 text-center md:px-16 md:py-20">
          <div className="absolute left-1/2 top-[-80px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,85,58,0.12),transparent)]" />

          <div className="section-label relative z-[1] mx-auto mb-6">Let&apos;s Connect</div>
          <h2 className="relative z-[1] mb-5 font-display text-4xl font-bold leading-tight text-cream md:text-6xl">
            Have a project in mind?<br />
            <span className="gradient-text">Let&apos;s build it together.</span>
          </h2>
          <p className="relative z-[1] mx-auto mb-10 max-w-xl text-lg leading-8 text-soft">
            I&apos;m currently open to full-time roles and freelance opportunities in web development and data analytics.
          </p>

          <div className="relative z-[1] flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-10 py-4 text-base">Get In Touch</Link>
            <a href="mailto:shashikantshankar707@gmail.com" className="btn-ghost px-10 py-4 text-base">Send Email</a>
          </div>

          <div className="relative z-[1] mt-12 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
            {['Response within 24 hours', 'Remote-friendly', 'Available immediately'].map((label) => (
              <div key={label} className="text-sm text-soft">{label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
