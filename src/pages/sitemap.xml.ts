import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { alternateUrls } from '../i18n/utils';

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const { ar, en, ku } = alternateUrls(siteConfig.url);
  const arLoc = ar.endsWith('/') ? ar : `${ar}/`;

  const alternates = `
    <xhtml:link rel="alternate" hreflang="ar" href="${arLoc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ckb" href="${ku}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${arLoc}" />`;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${arLoc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
    ${alternates}
  </url>
  <url>
    <loc>${en}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
    ${alternates}
  </url>
  <url>
    <loc>${ku}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
    ${alternates}
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600',
    },
  });
};
