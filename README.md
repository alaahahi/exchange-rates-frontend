# Exchange Rates Frontend

Astro SSR website that displays live exchange rates from the Laravel API. Optimized for Arabic RTL, SEO, and Cloudflare Workers.

## Requirements

- Node.js 22.12+
- npm 10+
- Running Laravel API (`exchange-rates-api`)

## Installation

```bash
cd exchange-rates-frontend
npm install
cp .env.example .env
```

## Environment variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PUBLIC_SITE_URL` | Canonical site URL | `https://www.example.com` |
| `PUBLIC_API_URL` | Laravel API base (v1) | `https://api.example.com/api/v1` |
| `PUBLIC_SITE_NAME` | Brand name in header | `أسعار الصرف` |

All `PUBLIC_*` values are exposed to the browser. Never put secrets here.

## Local development

1. Start the API (from `exchange-rates-api`):

```bash
php -S 127.0.0.1:8000 -t public
# or: php artisan serve
```

2. Point `.env` at the API:

```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_API_URL=http://127.0.0.1:8000/api/v1
```

3. Start Astro:

```bash
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
```

Output is Cloudflare Worker compatible (`dist/` + worker entry).

## Cloudflare deployment

The project uses `@astrojs/cloudflare` and `wrangler.jsonc`.

```bash
npm run build
npx wrangler deploy
```

Or connect the Git repo to Cloudflare Workers/Pages and set build command `npm run build`.

Configure production env vars in Cloudflare dashboard:

- `PUBLIC_SITE_URL`
- `PUBLIC_API_URL`
- `PUBLIC_SITE_NAME`

## Architecture notes

- Server-rendered HTML for the rates table (SEO-friendly, no SPA).
- Central API client: `src/lib/api/`
- SEO config: `src/config/site.ts` + `SeoHead.astro` + JSON-LD
- Refresh button reloads the page (no polling)
- Expandable later: currency pages, history, charts — not included now

## Git workflow

This folder is its own Git repository. Do not initialize Git in the parent `dinar/` folder.

```bash
git add .
git commit -m "Your message"
```
