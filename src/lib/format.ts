/** Latin (English) digits, no thousand separators. */
const NUMBER_LOCALE = 'en-US';
const DATE_LOCALE = 'en-GB';

export function formatNumber(
  value: number,
  options: Intl.NumberFormatOptions = {},
): string {
  return new Intl.NumberFormat(NUMBER_LOCALE, {
    useGrouping: false,
    ...options,
  }).format(value);
}

export function formatInteger(value: number): string {
  return formatNumber(value, { maximumFractionDigits: 0 });
}

export function formatDecimal(value: number, maxDigits = 4): string {
  return formatNumber(value, { maximumFractionDigits: maxDigits });
}

export function formatPercentChange(change: number | null): string {
  if (change === null || Number.isNaN(change)) return '—';
  const sign = change > 0 ? '+' : '';
  return `${sign}${formatNumber(change, { maximumFractionDigits: 2 })}%`;
}

export function formatDateTime(value: string | Date): string {
  const date = typeof value === 'string' ? new Date(value) : value;
  return new Intl.DateTimeFormat(DATE_LOCALE, {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Baghdad',
    numberingSystem: 'latn',
  }).format(date);
}
