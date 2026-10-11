import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const apiBase = (import.meta.env.PUBLIC_API_URL || '').replace(/\/$/, '');
  if (!apiBase) {
    return new Response(JSON.stringify({ success: false, message: 'PUBLIC_API_URL missing' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const slug = (url.searchParams.get('slug') || '').trim();
  const qs = slug ? `?slug=${encodeURIComponent(slug)}` : '';

  try {
    const response = await fetch(`${apiBase}/exchange-rates${qs}`, {
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
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
