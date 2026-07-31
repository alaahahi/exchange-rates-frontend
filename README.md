# dinar-now Frontend

Astro SSR website for **dinar-now** — live exchange rates from the Laravel API. Arabic RTL, SEO-first, Cloudflare Workers.

## Brand

- Logo: `public/logo.png`
- Navy: `#0D2149`
- Gold: `#C29953`

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
| `PUBLIC_SITE_NAME` | Brand name | `dinar-now` |

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
PUBLIC_SITE_NAME=dinar-now
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

Output is Cloudflare Worker compatible (`dist/` + worker entry via `wrangler.jsonc`).

## Cloudflare deployment

```bash
npm run build
npx wrangler deploy
```

Or connect the Git repo to Cloudflare and set build command `npm run build`.

Configure production env vars:

- `PUBLIC_SITE_URL`
- `PUBLIC_API_URL`
- `PUBLIC_SITE_NAME`

## Architecture notes

- Server-rendered HTML for the rates table (SEO-friendly, no SPA)
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
