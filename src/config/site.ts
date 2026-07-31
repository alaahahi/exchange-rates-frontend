export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || 'أسعار الصرف',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.example.com',
  locale: 'ar',
  title: 'أسعار صرف العملات اليوم',
  description:
    'تعرف على أسعار صرف العملات مقابل الدينار العراقي مع آخر تحديث للأسعار.',
  ogImage: '/og-default.svg',
  twitterCard: 'summary_large_image' as const,
  robots: 'index, follow',
};
