import { apiGet, apiGetPayload } from './client';
import type { ExchangeRate, ExchangeRatesMeta } from './types';

export const DEFAULT_MARKET_LOCATION = 'erbil';

function buildQuery(slug?: string | null, location?: string | null): string {
  const params = new URLSearchParams();
  if (slug) params.set('slug', slug);
  if (location) params.set('location', location);
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

export function getExchangeRates(
  init?: RequestInit,
  slug?: string | null,
  location: string = DEFAULT_MARKET_LOCATION,
): Promise<ExchangeRate[]> {
  return apiGet<ExchangeRate[]>(`/exchange-rates${buildQuery(slug, location)}`, init);
}

export async function getExchangeRatesBundle(
  init?: RequestInit,
  slug?: string | null,
  location: string = DEFAULT_MARKET_LOCATION,
): Promise<{ rates: ExchangeRate[]; meta: ExchangeRatesMeta }> {
  const payload = await apiGetPayload<ExchangeRate[]>(
    `/exchange-rates${buildQuery(slug, location)}`,
    init,
  );

  return {
    rates: payload.data,
    meta: (payload.meta ?? {}) as ExchangeRatesMeta,
  };
}
