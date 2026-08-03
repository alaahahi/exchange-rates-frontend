import type { Lang } from '../i18n/ui';

/** Shape matches a future API payload: GET /api/v1/promo-messages */
export type PromoMessage = {
  id: string;
  text: string;
  lang: Lang;
  is_active: boolean;
  sort_order: number;
};

/**
 * Static fallback until the backend serves promo/announcement messages.
 * Keep this list as the contract for admin-managed content later.
 */
const STATIC_PROMO_MESSAGES: PromoMessage[] = [
  {
    id: 'ar-1',
    lang: 'ar',
    is_active: true,
    sort_order: 1,
    text: 'سعر الصرف في العراق الآن — تابع الدولار والدينار لحظة بلحظة',
  },
  {
    id: 'ar-2',
    lang: 'ar',
    is_active: true,
    sort_order: 2,
    text: 'سعر الذهب وسعر الصرف معاً على dinar-now مع حاسبة تحويل فورية',
  },
  {
    id: 'ar-3',
    lang: 'ar',
    is_active: true,
    sort_order: 3,
    text: 'مرجع السوق الموازي مع روابط المصرف المركزي العراقي والمواقع المهمة',
  },
  {
    id: 'en-1',
    lang: 'en',
    is_active: true,
    sort_order: 1,
    text: 'Iraq exchange rate now — live USD to IQD buy and sell',
  },
  {
    id: 'en-2',
    lang: 'en',
    is_active: true,
    sort_order: 2,
    text: 'Gold price and exchange rates together on dinar-now',
  },
  {
    id: 'en-3',
    lang: 'en',
    is_active: true,
    sort_order: 3,
    text: 'Parallel market reference with Central Bank of Iraq links',
  },
  {
    id: 'ku-1',
    lang: 'ku',
    is_active: true,
    sort_order: 1,
    text: 'نرخی دراو لە عێراق ئێستا — دۆلار و دینار ڕاستەوخۆ',
  },
  {
    id: 'ku-2',
    lang: 'ku',
    is_active: true,
    sort_order: 2,
    text: 'نرخی زێڕ و نرخی دراو پێکەوە لە dinar-now',
  },
  {
    id: 'ku-3',
    lang: 'ku',
    is_active: true,
    sort_order: 3,
    text: 'سەرچاوەی بازاڕی هاوتەریب لەگەڵ لینکی بانکی ناوەندی عێراق',
  },
];

/** Later: fetch from API and fall back to STATIC_PROMO_MESSAGES on failure. */
export function getPromoMessages(lang: Lang): PromoMessage[] {
  return STATIC_PROMO_MESSAGES.filter((item) => item.lang === lang && item.is_active).sort(
    (a, b) => a.sort_order - b.sort_order,
  );
}
