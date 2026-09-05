# Shashikant Giri — Portfolio

Live: [shashikantgiri.netlify.app](https://shashikantgiri.netlify.app/)

Personal portfolio for **Shashikant Giri** — Web Developer & Data Analyst based in Navi Mumbai, India. Built with Next.js and Tailwind CSS, it showcases full-stack web development projects and Power BI / data analytics work side by side, with SEO metadata, structured data (JSON-LD), and a contact form wired to email.

## ✨ Features

- **Dual project tracks** — dedicated `/web` and `/analytics` sections for full-stack apps and Power BI dashboards, each with individual case-study pages (`/web/[slug]`, `/analytics/[slug]`)
- **Data-driven content** — all copy, skills, and projects are sourced from a single `public/api.json`, so updating content never requires touching component code
- **Animated UI** — hero section, skills marquee, card-swap showcase, and a hyperspeed loading intro built with Framer Motion / GSAP
- **SEO-ready** — per-page metadata, Open Graph/Twitter cards, JSON-LD (`Person`, `WebSite`, `Organization`, `BreadcrumbList`), auto-generated `sitemap.xml` and `robots.txt`
- **Contact form** — serverless API route (`app/api/contact`) sending messages via Nodemailer
- **Responsive, dark-themed design** with a custom color system and Clash Grotesk / Satoshi type

## 🧱 Tech Stack

| Category | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4 |
| Animation | Framer Motion, GSAP |
| Email | Nodemailer |
| Deployment | Netlify (`@netlify/plugin-nextjs`) |

## 📂 Project Structure

```
app/
  page.js                   # Home
  about/page.js              # About, skills, education, certifications
  web/page.js                 # Web dev projects listing
  web/[slug]/page.js           # Web project case study
  analytics/page.js           # Data analytics projects listing
  analytics/[slug]/page.js     # Analytics project case study
  contact/page.js             # Contact form
  api/contact/                # Contact form API route
components/                  # Reusable UI (Hero, Navbar, Footer, ProjectCard, etc.)
lib/
  data.js                    # Reads/derives project data from api.json
  seo.js                     # Metadata + JSON-LD helpers
public/
  api.json                   # Single source of truth for all site content
```

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# open http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

## ✏️ Updating Content

All personal info, skills, projects, education, and certifications live in **`public/api.json`**. To add a new project, drop an entry into `webDev_projects` or `dataAnalysis_projects` — a case-study page and sitemap entry are generated automatically from the project `name`. No component code needs to change.

## 📦 Deployment

Configured for **Netlify** (see `netlify.toml`) using `@netlify/plugin-nextjs`. Push to the connected branch and Netlify handles the build.

## 📬 Contact

- Web Dev: [shashikantshankar707@gmail.com](mailto:shashikantshankar707@gmail.com)
- Data Analysis: [shashikantds090@gmail.com](mailto:shashikantds090@gmail.com)
- LinkedIn: [linkedin.com/in/shashikantshankargiri](https://www.linkedin.com/in/shashikantshankargiri)
- GitHub (Web Dev): [@Shashikantgiri-web](https://github.com/Shashikantgiri-web)
- GitHub (Data): [@shashikant-ds636](https://github.com/shashikant-ds636)

---

Built and maintained by Shashikant Giri.
