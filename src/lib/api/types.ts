export type ExchangeRate = {
  currency: string;
  name: string;
  buy: number;
  sell: number;
  change: number | null;
  updated_at: string | null;
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
