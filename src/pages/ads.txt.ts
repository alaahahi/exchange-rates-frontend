import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Google AdSense ads.txt — served at /ads.txt
 * PUBLISHER_ID comes from PUBLIC_ADSENSE_CLIENT (ca-pub-XXXX → pub-XXXX).
 */
export const GET: APIRoute = async () => {
  const client = (import.meta.env.PUBLIC_ADSENSE_CLIENT || '').trim();
  const pubId = client.replace(/^ca-/, '');

  const body = pubId
    ? `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
    : '# Set PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxx after AdSense approval\n';

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
