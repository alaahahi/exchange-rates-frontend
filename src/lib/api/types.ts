export type ExchangeRate = {
  currency: string;
  name: string;
  buy: number;
  sell: number;
  /** Board quote is for this many units (100 for FX, 1 for IQD). */
  quote_unit?: number;
  change: number | null;
  source?: string | null;
  updated_at: string | null;
};

export type GoldRate = {
  code: string;
  name: string;
  unit: string;
  buy: number;
  sell: number;
  change: number | null;
  updated_at: string | null;
};

export type MarketSummary = {
  is_open: boolean;
  status: 'open' | 'closed' | string;
  status_label: string;
  timezone: string;
  local_time: string;
  usd: {
    buy: number;
    sell: number;
    spread: number;
    change: number | null;
    updated_at: string | null;
  } | null;
};

export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiFailure = {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
