import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiBase = (import.meta.env.PUBLIC_API_URL || '').replace(/\/$/, '');
  if (!apiBase) {
    return new Response(JSON.stringify({ success: false, message: 'PUBLIC_API_URL missing' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  try {
    const response = await fetch(`${apiBase}/exchange-rates`, {
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
      // Always hit origin API for fresh board data; Cloudflare/browser can still cache this proxy briefly.
      cache: 'no-store',
    });

    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=15, s-maxage=15',
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'تعذر الاتصال بمصدر الأسعار' }),
      {
        status: 502,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      },
    );
  }
};
