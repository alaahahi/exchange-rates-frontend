function normalizeSiteUrl(raw: string): string {
  const fallback = 'https://dinar-now.com';
  try {
    const url = new URL((raw || fallback).trim());
    url.protocol = 'https:';
    url.hash = '';
    url.search = '';
    // Prefer apex without trailing slash for building paths
    return url.origin;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || 'dinar-now',
  tagline: 'سعر الصرف في العراق الآن',
  url: normalizeSiteUrl(import.meta.env.PUBLIC_SITE_URL || 'https://dinar-now.com'),
  locale: 'ar',
  title: 'سعر الصرف في العراق الآن | سعر الدولار والذهب | dinar-now',
  description:
    'سعر الصرف في العراق الآن: سعر الدولار مقابل الدينار العراقي، سعر الذهب، حاسبة تحويل العملات، ومتابعة السوق مع المصرف المركزي العراقي.',
  ogImage: '/og-default.svg',
  twitterCard: 'summary_large_image' as const,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',
};
