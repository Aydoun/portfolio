// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with your real domain once you have one
  site: 'https://example.com',
  integrations: [sitemap()],
});
