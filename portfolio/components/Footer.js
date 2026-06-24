import Link from 'next/link';
import apiData from '@/public/api.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] border-t border-white/10 bg-panel py-12">
      <div className="container-custom">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display font-bold text-white">SG</div>
              <span className="font-display text-lg font-bold text-cream">Shashikant Giri</span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-soft">
              Data-Driven Full Stack Developer building modern web applications powered by analytics and business intelligence.
            </p>
          </div>

          <FooterGroup title="Navigation">
            {[['/', 'Home'], ['/web', 'Web Dev'], ['/analytics', 'Analytics'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-soft transition-colors hover:text-accent">{label}</Link>
            ))}
          </FooterGroup>

          <FooterGroup title="Contact">
            <a href={`mailto:${apiData.Personl_detail.Email.WEbDev_email}`} className="break-all text-sm text-soft transition-colors hover:text-accent">
              {apiData.Personl_detail.Email.WEbDev_email}
            </a>
            <a href={`tel:${apiData.Personl_detail.Contack_no}`} className="text-sm text-soft transition-colors hover:text-accent">
              {apiData.Personl_detail.Contack_no}
            </a>
            <span className="text-sm text-soft">{apiData.Personl_detail.Loction}</span>
          </FooterGroup>

          <FooterGroup title="Connect">
            <a href={`https://${apiData.Linkedli}`} target="_blank" rel="noopener noreferrer" className="text-sm text-soft transition-colors hover:text-accent">LinkedIn</a>
            <a href={apiData.Github.WebDev_Github_Link} target="_blank" rel="noopener noreferrer" className="text-sm text-soft transition-colors hover:text-accent">GitHub Web</a>
            <a href={apiData.Github.dataAnalysis_Github_Link} target="_blank" rel="noopener noreferrer" className="text-sm text-soft transition-colors hover:text-accent">GitHub Data</a>
          </FooterGroup>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted">
          <p>© {year} Shashikant Giri. All rights reserved.</p>
          <p>Built with <span className="text-accent">Next.js</span> + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }) {
  return (
    <div>
      <h4 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.1em] text-muted">{title}</h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
