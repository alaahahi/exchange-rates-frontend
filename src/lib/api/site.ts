import { apiGet } from './client';
import type { SiteBrand } from './types';

export function getSiteBrand(slug?: string | null, init?: RequestInit): Promise<SiteBrand> {
  const qs = slug ? `?slug=${encodeURIComponent(slug)}` : '';
  return apiGet<SiteBrand>(`/site${qs}`, init);
}
