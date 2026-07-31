import { ApiError, messageForStatus } from './errors';
import type { ApiResponse } from './types';

function getBaseUrl(): string {
  const base = import.meta.env.PUBLIC_API_URL;
  if (!base) {
    throw new ApiError('PUBLIC_API_URL غير مضبوط.', 0, 'invalid');
  }
  return base.replace(/\/$/, '');
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${getBaseUrl()}${path.startsWith('/') ? path : `/${path}`}`;

  let response: Response;
  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: 'application/json',
        ...(init?.headers ?? {}),
      },
    });
  } catch {
    throw new ApiError(
      'تعذر الاتصال بالخادم. تحقق من الاتصال وحاول مرة أخرى.',
      0,
      'network',
    );
  }

  let body: ApiResponse<T> | null = null;
  try {
    body = (await response.json()) as ApiResponse<T>;
  } catch {
    body = null;
  }

  if (!response.ok) {
    const message =
      body && 'message' in body && body.message
        ? body.message
        : messageForStatus(response.status);
    throw new ApiError(message, response.status, 'http');
  }

  if (!body || body.success !== true) {
    throw new ApiError(
      body && 'message' in body && body.message
        ? body.message
        : messageForStatus(response.status || 500),
      response.status || 500,
      'invalid',
    );
  }

  return body.data;
}
