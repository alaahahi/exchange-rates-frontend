import { apiGet } from './client';
import type { GoldRate } from './types';

export function getGoldRates(init?: RequestInit): Promise<GoldRate[]> {
  return apiGet<GoldRate[]>('/gold-rates', init);
}
