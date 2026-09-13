# Benaya Tech — Website

Marketing site for Benaya Tech, a smart-home, Wi-Fi, security, and technology installation company serving homeowners and small businesses throughout Northern Virginia.

Built with **Astro** + **Tailwind CSS**, with light interactivity from **Alpine.js** (CDN). Ships as a static site to GitHub Pages.

## Tech stack

- **Astro** — component-based static site generator (no per-page duplication; header/footer/sections written once)
- **Tailwind CSS** — compiled via Astro's built-in PostCSS support (`postcss.config.mjs`), not the CDN
- **Alpine.js** — small runtime for the mobile menu and FAQ accordions, and the dynamic contact form
- **Space Grotesk** (display) + **Inter** (body) via Google Fonts

## Project structure

```
benaya-tech/
├── src/
│   ├── layouts/BaseLayout.astro       # <head>, header, footer, global scripts
│   ├── components/                    # Header, Footer, Hero sections, ProcessSteps,
│   │                                  #   CtaBanner, FaqAccordion, PageHeader
│   ├── data/
│   │   ├── site.ts                    # single source of truth for brand name, tagline, phone
│   │   ├── nav.ts                     # single source of truth for header navigation
│   │   └── serviceAreas.ts            # all city pages' differentiated content
│   ├── pages/
│   │   ├── index.astro                # home
│   │   ├── smart-home.astro / wifi-networking.astro / security.astro / installation.astro
│   │   ├── small-business.astro / about.astro / contact.astro
│   │   └── service-areas/
│   │       ├── index.astro            # service-area hub
│   │       └── [city].astro           # ONE template -> city pages from serviceAreas.ts
│   └── styles/global.css              # Tailwind layers + component classes
├── public/images/                     # logo + photography (served as-is)
├── .github/workflows/deploy.yml       # GitHub Pages build + deploy
└── astro.config.mjs
```

Adding or editing a service-area page = editing `src/data/serviceAreas.ts`. No new file needed.

The header nav is intentionally compact (Smart Home, Wi-Fi, Security, Installation, About, plus a Request Service CTA) — Small Business, Service Areas, and Contact stay one click away via the footer and the mobile menu.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the built site
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and publishes `./dist`. In the repo settings, set **Pages → Source → GitHub Actions**.

- **User/organization page or custom domain:** no changes needed (`base` stays `/`).
- **Project page** (`username.github.io/benaya-tech`): set `SITE_URL` and `BASE_PATH` env vars in the workflow's build step, e.g. `BASE_PATH=/benaya-tech`. All internal links and asset paths are already `base`-aware.

## Before publishing — regulatory / content checklist

This site intentionally ships without certain content until real, verified information exists. **Do not replace these with fabricated info:**

- [x] Formspree wired to a real form (`PUBLIC_FORMSPREE_ID`, set in `.github/workflows/deploy.yml`) — confirm the first-submission email from Formspree to fully activate it.
- [x] Phone and email wired in (header, footer, contact page) — single-sourced in `src/data/site.ts`.
- [x] Production domain set (`benayatech.com` via `public/CNAME` + `SITE_URL`) — sitemap and canonical/OG URLs follow automatically.
- [ ] Replace the social placeholders in `src/data/site.ts` (`social.facebook/instagram/youtube`) with real profile URLs once those accounts exist, and add them to the `LocalBusiness` JSON-LD `sameAs` in `BaseLayout.astro`. Don't publish placeholder URLs as structured data.
- [ ] Do **not** add "Licensed," "Insured," "Certified," "Bonded," "Authorized," or "Approved" anywhere until verified documentation exists.
- [ ] Do **not** add reviews/testimonials until they are real.
- [ ] Do **not** add a street address or "located in [city]" language unless a real business location is confirmed.
- [ ] Confirm which service-area cities are actually authorized/intended before launch.
- [ ] Add analytics / Google Business Profile once accounts exist.

## Notes

- The previous hand-written static HTML version is preserved in `_legacy-static/` (git-ignored) for reference and can be deleted once you're happy with the Astro build.

## License

Copyright 2026 Benaya Tech. All rights reserved.
