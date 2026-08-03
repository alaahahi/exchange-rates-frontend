import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const origin = siteConfig.url.replace(/\/$/, '');
  const sitemapUrl = `${origin}/sitemap.xml`;
  const body = `User-agent: *
Allow: /
Allow: /en
Allow: /ku

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
