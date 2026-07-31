export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || 'dinar-now',
  tagline: 'أسعار الصرف الآن',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.example.com',
  locale: 'ar',
  title: 'أسعار صرف العملات اليوم | dinar-now',
  description:
    'تعرف على أسعار صرف العملات مقابل الدينار العراقي مع آخر تحديث للأسعار عبر dinar-now.',
  ogImage: '/og-default.svg',
  twitterCard: 'summary_large_image' as const,
  robots: 'index, follow',
};
