import { apiGet } from './client';
import type { ExchangeRate } from './types';

export function getExchangeRates(init?: RequestInit): Promise<ExchangeRate[]> {
  return apiGet<ExchangeRate[]>('/exchange-rates', init);
}
