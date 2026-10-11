import { apiGet } from './client';
import type { ExchangeRate } from './types';

export function getExchangeRates(init?: RequestInit, slug?: string | null): Promise<ExchangeRate[]> {
  const qs = slug ? `?slug=${encodeURIComponent(slug)}` : '';
  return apiGet<ExchangeRate[]>(`/exchange-rates${qs}`, init);
}
