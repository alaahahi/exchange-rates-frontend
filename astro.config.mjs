// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  site: process.env.PUBLIC_SITE_URL || 'https://www.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
});
