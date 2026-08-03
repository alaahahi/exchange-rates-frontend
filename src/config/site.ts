export const siteConfig = {
  name: import.meta.env.PUBLIC_SITE_NAME || 'dinar-now',
  tagline: 'سعر الصرف في العراق الآن',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.example.com',
  locale: 'ar',
  title: 'سعر الصرف في العراق الآن | سعر الدولار والذهب | dinar-now',
  description:
    'سعر الصرف في العراق الآن: سعر الدولار مقابل الدينار العراقي، سعر الذهب، حاسبة تحويل العملات، ومتابعة السوق مع المصرف المركزي العراقي.',
  ogImage: '/og-default.svg',
  twitterCard: 'summary_large_image' as const,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};
