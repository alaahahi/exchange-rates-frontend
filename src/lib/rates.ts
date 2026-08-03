/** Market board quotes foreign currencies per this many units (Iraqi convention). */
export const FOREIGN_QUOTE_UNIT = 100;

export function quoteUnitFor(currency: string, quoteUnit?: number): number {
  if (typeof quoteUnit === 'number' && quoteUnit > 0) return quoteUnit;
  return currency === 'IQD' ? 1 : FOREIGN_QUOTE_UNIT;
}

/** Convert board price (per quote_unit) into price of 1 currency unit in IQD terms. */
export function unitPrice(boardPrice: number, currency: string, quoteUnit?: number): number {
  const unit = quoteUnitFor(currency, quoteUnit);
  return unit > 0 ? boardPrice / unit : boardPrice;
}
