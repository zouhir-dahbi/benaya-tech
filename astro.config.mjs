import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If deploying to a GitHub *project* page (e.g. username.github.io/benaya-tech),
// set SITE to your Pages URL and BASE to '/benaya-tech'.
// For a user page or custom domain, leave BASE as '/'.
const SITE = process.env.SITE_URL || 'https://example.com';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Exclude noindex redirect stubs from the sitemap so it only lists canonical, indexable URLs.
      filter: (page) => !/\/(residential|commercial)\/?$/.test(page),
    }),
  ],
});
