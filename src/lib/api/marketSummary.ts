import { apiGet } from './client';
import type { MarketSummary } from './types';

export function getMarketSummary(init?: RequestInit): Promise<MarketSummary> {
  return apiGet<MarketSummary>('/market-summary', init);
}
