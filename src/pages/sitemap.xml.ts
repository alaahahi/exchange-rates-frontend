import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { alternateUrls } from '../i18n/utils';

export const prerender = false;

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const { ar, en, ku } = alternateUrls(siteConfig.url);
  const arLoc = ar.endsWith('/') ? ar : `${ar}/`;

  const pages = [
    { loc: arLoc, priority: '1.0' },
    { loc: en, priority: '0.9' },
    { loc: ku, priority: '0.9' },
  ] as const;

  const alternatesXml = `
    <xhtml:link rel="alternate" hreflang="ar" href="${arLoc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ckb" href="${ku}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${arLoc}" />`;

  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>${page.priority}</priority>${alternatesXml}
  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=600',
    },
  });
};
