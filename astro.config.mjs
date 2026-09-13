import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
    tailwind({ applyBaseStyles: false }),
  ],
});
