export const languages = {
  ar: 'العربية',
  en: 'English',
  ku: 'کوردی',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ar';

export const localeMeta: Record<
  Lang,
  { code: string; href: string; dir: 'rtl' | 'ltr'; hreflang: string; htmlLang: string }
> = {
  ar: { code: 'AR', href: '/', dir: 'rtl', hreflang: 'ar', htmlLang: 'ar' },
  en: { code: 'EN', href: '/en', dir: 'ltr', hreflang: 'en', htmlLang: 'en' },
  ku: { code: 'KU', href: '/ku', dir: 'rtl', hreflang: 'ckb', htmlLang: 'ckb' },
};

type UiStrings = {
  tagline: string;
  navHome: string;
  navUsd: string;
  navGold: string;
  navConverter: string;
  navCurrencies: string;
  refresh: string;
  marketOpen: string;
  marketClosed: string;
  usdSpread: string;
  iqd: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  perHundredUsd: string;
  perHundredUnit: string;
  buy: string;
  sell: string;
  noChange: string;
  lastUpdate: string;
  spreadLabel: string;
  converterTitle: string;
  converterSubtitle: string;
  amount: string;
  result: string;
  fromCurrency: string;
  toCurrency: string;
  swap: string;
  converterHint: string;
  otherCurrencies: string;
  currency: string;
  change: string;
  goldTitle: string;
  goldSubtitle: string;
  perGram: string;
  perOunce: string;
  quickStatsSell: string;
  quickStatsBuy: string;
  quickStatsSpread: string;
  quickStatsCoverage: string;
  currenciesCount: string;
  goldCount: string;
  quickUsdTitle: string;
  quickUsdHint: string;
  approxIqd: string;
  weatherTitle: string;
  weatherBaghdad: string;
  weatherBasra: string;
  weatherErbil: string;
  weatherSulaymaniyah: string;
  weatherKarbala: string;
  faqTitle: string;
  insightBuySellTitle: string;
  insightBuySellBody: string;
  insightRemitTitle: string;
  insightRemitBody: string;
  insightGoldTitle: string;
  insightGoldBody: string;
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  faq3q: string;
  faq3a: string;
  faq4q: string;
  faq4a: string;
  faq5q: string;
  faq5a: string;
  emptyRates: string;
  emptyUsd: string;
  emptyOther: string;
  loadError: string;
  liveMarket: string;
  darkMode: string;
  lightMode: string;
  languageMenu: string;
  footerTag: string;
  partnersTitle: string;
  opensNewTab: string;
  colorPanel: string;
  colorBrand: string;
  colorAccent: string;
  colorUp: string;
  colorDown: string;
  colorPresets: string;
  colorPresetDefault: string;
  colorPresetMarket: string;
  colorPresetSoft: string;
  colorReset: string;
  keywords: string;
  seoIraqTitle: string;
  seoIraqBody: string;
  seoGoldTitle: string;
  seoGoldBody: string;
  seoCbiTitle: string;
  seoCbiBody: string;
  titleFallback: string;
  descriptionFallback: string;
  titleWithPrice: (sell: number) => string;
  descriptionWithPrice: (buy: number, sell: number) => string;
};

export const ui: Record<Lang, UiStrings> = {
  ar: {
    tagline: 'أسعار الصرف الآن',
    navHome: 'الرئيسية',
    navUsd: 'الدولار',
    navGold: 'الذهب',
    navConverter: 'الحاسبة',
    navCurrencies: 'العملات',
    refresh: 'تحديث',
    marketOpen: 'السوق مفتوح',
    marketClosed: 'السوق مغلق',
    usdSpread: 'فرق الدولار (مبيع − شراء):',
    iqd: 'د.ع',
    heroEyebrow: 'السعر الأهم اليوم',
    heroTitle: 'دولار / دينار',
    heroSubtitle: 'مقابل الدينار العراقي',
    perHundredUsd: 'لكل 100$',
    perHundredUnit: 'لكل 100',
    buy: 'شراء',
    sell: 'مبيع',
    noChange: 'بدون تغيّر',
    lastUpdate: 'آخر تحديث:',
    spreadLabel: 'الفرق بين المبيع والشراء:',
    converterTitle: 'تحويل العملات',
    converterSubtitle: 'حاسبة فورية حسب أسعار اليوم',
    amount: 'المبلغ',
    result: 'النتيجة',
    fromCurrency: 'من عملة',
    toCurrency: 'إلى عملة',
    swap: 'تبديل العملتين',
    converterHint: 'الأسعار المعروضة لكل 100 وحدة أجنبية؛ الحاسبة تحوّل حسب المبلغ الفعلي.',
    otherCurrencies: 'باقي العملات',
    currency: 'العملة',
    change: 'التغير',
    goldTitle: 'أسعار الذهب',
    goldSubtitle: 'عيارات محلية وأونصة عالمية',
    perGram: 'للغرام',
    perOunce: 'للأونصة',
    quickStatsSell: 'مبيع الدولار',
    quickStatsBuy: 'شراء الدولار',
    quickStatsSpread: 'فرق السعر',
    quickStatsCoverage: 'تغطية السوق',
    currenciesCount: 'عملة',
    goldCount: 'ذهب',
    quickUsdTitle: 'تحويلات سريعة بالدولار',
    quickUsdHint: 'حسب سعر المبيع',
    approxIqd: 'د.ع تقريباً',
    weatherTitle: 'طقس المدن الآن',
    weatherBaghdad: 'بغداد',
    weatherBasra: 'البصرة',
    weatherErbil: 'أربيل',
    weatherSulaymaniyah: 'السليمانية',
    weatherKarbala: 'كربلاء',
    faqTitle: 'أسئلة شائعة',
    insightBuySellTitle: 'شراء أم مبيع؟',
    insightBuySellBody:
      'سعر الشراء هو ما يدفعه الصراف لشراء الدولار منك. سعر المبيع هو ما تشتري به أنت الدولار من الصراف.',
    insightRemitTitle: 'نصيحة الحوالات',
    insightRemitBody:
      'عند استلام حوالة من أمريكا، قارن سعر التحويل مع مبيع الدولار هنا واحسب الصافي قبل الرسوم.',
    insightGoldTitle: 'الذهب كمرجع',
    insightGoldBody:
      'عيار 21 الأكثر تداولاً محلياً. راقب فرق الشراء/المبيع قبل البيع أو الشراء من المحلات.',
    faq1q: 'لماذا يختلف سعر الشراء عن المبيع؟',
    faq1a: 'الفرق (السبريد) هو هامش الصراف. كلما قل الفرق كان السعر أقرب للسوق.',
    faq2q: 'هل الأسعار نهائية لكل الصرافين؟',
    faq2a: 'الأسعار هنا مرجع سوقي. قد تختلف قليلاً حسب المنطقة والصراف ووقت التعامل.',
    faq3q: 'كيف أستخدم الحاسبة؟',
    faq3a: 'اختر العملة والمبلغ ووضع شراء أو مبيع، وستظهر النتيجة فوراً حسب الأسعار المعروضة.',
    faq4q: 'ما الفرق بين سعر السوق الموازي وسعر المصرف المركزي العراقي؟',
    faq4a:
      'سعر المصرف المركزي العراقي سعر رسمي معتمد للعمليات الرسمية. سعر الصرف في العراق بالسوق الموازي يعكس العرض والطلب لدى الصرافين وقد يختلف يومياً.',
    faq5q: 'هل يمكن متابعة سعر الذهب مع سعر الصرف؟',
    faq5a:
      'نعم. في dinar-now يمكنك متابعة سعر الصرف وسعر الذهب معاً، مع حاسبة تحويل للعملات مقابل الدينار العراقي.',
    emptyRates: 'لا توجد أسعار صرف متاحة حالياً.',
    emptyUsd: 'سعر الدولار غير متوفر حالياً.',
    emptyOther: 'لا توجد عملات إضافية حالياً.',
    loadError: 'تعذر تحميل أسعار الصرف حالياً، يرجى المحاولة مرة أخرى.',
    liveMarket: 'مباشر من السوق',
    darkMode: 'الوضع الليلي',
    lightMode: 'الوضع النهاري',
    languageMenu: 'اختيار اللغة',
    footerTag: 'أسعار الصرف الآن',
    partnersTitle: 'مواقع مهمة',
    opensNewTab: 'يفتح في تبويب جديد',
    colorPanel: 'ألوان الموقع',
    colorBrand: 'أساسي',
    colorAccent: 'ذهبي',
    colorUp: 'أخضر',
    colorDown: 'أحمر',
    colorPresets: 'قوالب جاهزة',
    colorPresetDefault: 'افتراضي',
    colorPresetMarket: 'سوق',
    colorPresetSoft: 'ناعم',
    colorReset: 'إعادة الألوان الافتراضية',
    keywords:
      'سعر الصرف في العراق الان, سعر الدولار اليوم, سعر صرف الدينار العراقي, سعر الذهب في العراق, المصرف المركزي العراقي, تحويل العملات, دولار دينار, أسعار العملات',
    seoIraqTitle: 'سعر الصرف في العراق الآن',
    seoIraqBody:
      'تابع سعر الصرف في العراق الآن لحظة بلحظة عبر dinar-now: سعر الدولار شراء ومبيع مقابل الدينار العراقي، مع أسعار العملات الأجنبية وحاسبة تحويل فورية تناسب بغداد وأربيل والبصرة وباقي المحافظات.',
    seoGoldTitle: 'سعر الذهب وسعر الصرف معاً',
    seoGoldBody:
      'إلى جانب سعر الصرف، نعرض سعر الذهب في العراق (عيارات محلية وأونصة) لمساعدتك على مقارنة السوق واتخاذ قرار أوضح قبل الشراء أو البيع.',
    seoCbiTitle: 'المصرف المركزي العراقي والأسعار المرجعية',
    seoCbiBody:
      'المصرف المركزي العراقي يصدر أسعاراً رسمية معتمدة. نحن نعرض أسعار السوق الموازي كمرجع يومي للصرافين والمواطنين، مع روابط لمواقع مهمة مثل المصرف المركزي لمتابعة المصادر الرسمية.',
    titleFallback: 'سعر الصرف في العراق الآن | سعر الدولار والذهب | dinar-now',
    descriptionFallback:
      'سعر الصرف في العراق الآن: سعر الدولار مقابل الدينار العراقي، سعر الذهب، حاسبة تحويل العملات، ومتابعة السوق مع إشارة إلى أسعار المصرف المركزي العراقي.',
    titleWithPrice: (sell: number) =>
      `سعر الصرف في العراق الآن — الدولار ${sell} | سعر الذهب | dinar-now`,
    descriptionWithPrice: (buy: number, sell: number) =>
      `سعر الصرف في العراق الآن (لكل 100$): شراء ${buy} ومبيع ${sell}. تابع سعر الدولار وسعر الذهب وحوّل العملات فوراً مع مرجع السوق والمصرف المركزي العراقي.`,
  },
  en: {
    tagline: 'Exchange rates now',
    navHome: 'Home',
    navUsd: 'USD',
    navGold: 'Gold',
    navConverter: 'Converter',
    navCurrencies: 'Currencies',
    refresh: 'Refresh',
    marketOpen: 'Market open',
    marketClosed: 'Market closed',
    usdSpread: 'USD spread (sell − buy):',
    iqd: 'IQD',
    heroEyebrow: 'Top rate today',
    heroTitle: 'USD / IQD',
    heroSubtitle: 'Against the Iraqi Dinar',
    perHundredUsd: 'per $100',
    perHundredUnit: 'per 100',
    buy: 'Buy',
    sell: 'Sell',
    noChange: 'No change',
    lastUpdate: 'Last update:',
    spreadLabel: 'Sell − buy spread:',
    converterTitle: 'Currency converter',
    converterSubtitle: 'Instant calculator using today’s rates',
    amount: 'Amount',
    result: 'Result',
    fromCurrency: 'From currency',
    toCurrency: 'To currency',
    swap: 'Swap currencies',
    converterHint: 'Board rates are per 100 foreign units; the converter uses your actual amount.',
    otherCurrencies: 'Other currencies',
    currency: 'Currency',
    change: 'Change',
    goldTitle: 'Gold prices',
    goldSubtitle: 'Local karats and global ounce',
    perGram: 'per gram',
    perOunce: 'per ounce',
    quickStatsSell: 'USD sell',
    quickStatsBuy: 'USD buy',
    quickStatsSpread: 'Spread',
    quickStatsCoverage: 'Market coverage',
    currenciesCount: 'currencies',
    goldCount: 'gold',
    quickUsdTitle: 'Quick USD conversions',
    quickUsdHint: 'Using sell rate',
    approxIqd: 'IQD approx.',
    weatherTitle: 'Cities weather now',
    weatherBaghdad: 'Baghdad',
    weatherBasra: 'Basra',
    weatherErbil: 'Erbil',
    weatherSulaymaniyah: 'Sulaymaniyah',
    weatherKarbala: 'Karbala',
    faqTitle: 'FAQ',
    insightBuySellTitle: 'Buy or sell?',
    insightBuySellBody:
      'Buy is what the exchanger pays you for USD. Sell is what you pay to buy USD from the exchanger.',
    insightRemitTitle: 'Remittance tip',
    insightRemitBody:
      'When receiving a transfer from the US, compare the payout rate with the USD sell rate here before fees.',
    insightGoldTitle: 'Gold as a reference',
    insightGoldBody:
      '21K is the most traded locally. Check the buy/sell spread before dealing with shops.',
    faq1q: 'Why are buy and sell different?',
    faq1a: 'The spread is the exchanger’s margin. A smaller spread is closer to the mid-market rate.',
    faq2q: 'Are these final rates everywhere?',
    faq2a: 'These are market references. Local shops may differ slightly by area and timing.',
    faq3q: 'How do I use the converter?',
    faq3a: 'Pick currencies, amount, and buy/sell mode to see an instant result from the listed rates.',
    faq4q: 'What is the difference between the parallel market and the Central Bank of Iraq rate?',
    faq4a:
      'The Central Bank of Iraq publishes an official rate for formal channels. Iraq’s parallel market rate reflects cash demand at exchange shops and can move daily.',
    faq5q: 'Can I follow gold prices with exchange rates?',
    faq5a:
      'Yes. dinar-now shows exchange rates and gold prices together, plus a converter for amounts against the Iraqi Dinar.',
    emptyRates: 'No exchange rates are available right now.',
    emptyUsd: 'USD rate is currently unavailable.',
    emptyOther: 'No additional currencies available.',
    loadError: 'Could not load exchange rates right now. Please try again.',
    liveMarket: 'Live market',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    languageMenu: 'Choose language',
    footerTag: 'Exchange rates now',
    partnersTitle: 'Important websites',
    opensNewTab: 'opens in a new tab',
    colorPanel: 'Site colors',
    colorBrand: 'Brand',
    colorAccent: 'Gold',
    colorUp: 'Green',
    colorDown: 'Red',
    colorPresets: 'Presets',
    colorPresetDefault: 'Default',
    colorPresetMarket: 'Market',
    colorPresetSoft: 'Soft',
    colorReset: 'Reset to defaults',
    keywords:
      'Iraq exchange rate now, USD to IQD today, Iraqi Dinar rate, gold price Iraq, Central Bank of Iraq, currency converter, dollar dinar',
    seoIraqTitle: 'Iraq exchange rate now',
    seoIraqBody:
      'Track the Iraq exchange rate now on dinar-now: live USD buy and sell versus the Iraqi Dinar, major foreign currencies, and an instant converter for Baghdad, Erbil, Basra, and across Iraq.',
    seoGoldTitle: 'Gold price and exchange rate together',
    seoGoldBody:
      'Alongside FX rates, we show gold prices in Iraq (local karats and ounce) so you can compare the market before buying or selling.',
    seoCbiTitle: 'Central Bank of Iraq reference rates',
    seoCbiBody:
      'The Central Bank of Iraq issues official rates. We publish parallel-market references used by exchangers and the public, with links to important official sites including the Central Bank.',
    titleFallback: 'Iraq exchange rate now | USD & gold | dinar-now',
    descriptionFallback:
      'Iraq exchange rate now: USD to IQD buy and sell, gold prices, currency converter, and Central Bank of Iraq context for official vs market rates.',
    titleWithPrice: (sell: number) =>
      `Iraq exchange rate now — USD ${sell} | Gold price | dinar-now`,
    descriptionWithPrice: (buy: number, sell: number) =>
      `Iraq exchange rate now (per $100): buy ${buy}, sell ${sell}. Follow USD, gold prices, and convert currencies instantly with market and Central Bank of Iraq context.`,
  },
  ku: {
    tagline: 'نرخی دراو ئێستا',
    navHome: 'سەرەکی',
    navUsd: 'دۆلار',
    navGold: 'زێڕ',
    navConverter: 'گۆڕینەوە',
    navCurrencies: 'دراوەکان',
    refresh: 'نوێکردنەوە',
    marketOpen: 'بازاڕ کراوەیە',
    marketClosed: 'بازاڕ داخراوە',
    usdSpread: 'جیاوازی دۆلار (فرۆشتن − کڕین):',
    iqd: 'د.ع',
    heroEyebrow: 'گرنگترین نرخ ئەمڕۆ',
    heroTitle: 'دۆلار / دینار',
    heroSubtitle: 'بەرامبەر دیناری عێراقی',
    perHundredUsd: 'بۆ هەر 100$',
    perHundredUnit: 'بۆ هەر 100',
    buy: 'کڕین',
    sell: 'فرۆشتن',
    noChange: 'بێ گۆڕان',
    lastUpdate: 'دوایین نوێکردنەوە:',
    spreadLabel: 'جیاوازی نێوان فرۆشتن و کڕین:',
    converterTitle: 'گۆڕینەوەی دراو',
    converterSubtitle: 'حاسبەی خێرا بەپێی نرخەکانی ئەمڕۆ',
    amount: 'بڕ',
    result: 'ئەنجام',
    fromCurrency: 'لە دراو',
    toCurrency: 'بۆ دراو',
    swap: 'گۆڕینی دراوەکان',
    converterHint: 'نرخەکان بۆ هەر 100 یەکەی بیانیە؛ حاسبەکە بەپێی بڕی ڕاستەقینە دەگۆڕێت.',
    otherCurrencies: 'دراوەکانی تر',
    currency: 'دراو',
    change: 'گۆڕان',
    goldTitle: 'نرخی زێڕ',
    goldSubtitle: 'عیاری ناوخۆیی و ئۆنسی جیهانی',
    perGram: 'بۆ هەر گرام',
    perOunce: 'بۆ هەر ئۆنس',
    quickStatsSell: 'فرۆشتنی دۆلار',
    quickStatsBuy: 'کڕینی دۆلار',
    quickStatsSpread: 'جیاوازی نرخ',
    quickStatsCoverage: 'پوششی بازاڕ',
    currenciesCount: 'دراو',
    goldCount: 'زێڕ',
    quickUsdTitle: 'گۆڕینەوەی خێرای دۆلار',
    quickUsdHint: 'بەپێی نرخی فرۆشتن',
    approxIqd: 'د.ع نزیکەی',
    weatherTitle: 'کەشوهەوای شارەکان ئێستا',
    weatherBaghdad: 'بەغدا',
    weatherBasra: 'بەسرە',
    weatherErbil: 'هەولێر',
    weatherSulaymaniyah: 'سلێمانی',
    weatherKarbala: 'کەربەلا',
    faqTitle: 'پرسیارە باوەکان',
    insightBuySellTitle: 'کڕین یان فرۆشتن؟',
    insightBuySellBody:
      'نرخی کڕین ئەوەیە کە صەڕاف دۆلارەکەت پێدەکڕێت. نرخی فرۆشتن ئەوەیە کە تۆ دۆلار لە صەڕاف دەکڕیت.',
    insightRemitTitle: 'ئامۆژگاری حەواڵە',
    insightRemitBody:
      'کاتێک حەواڵە لە ئەمریکا وەردەگریت، نرخی وەرگرتن لەگەڵ نرخی فرۆشتنی دۆلار لێرە بەراورد بکە پێش کرێ.',
    insightGoldTitle: 'زێڕ وەک سەرچاوە',
    insightGoldBody:
      'عیار ٢١ زۆرترین مامەڵەی ناوخۆییە. پێش کڕین یان فرۆشتن جیاوازی نرخ بپشکنە.',
    faq1q: 'بۆچی نرخی کڕین و فرۆشتن جیاوازە؟',
    faq1a: 'جیاوازی (سپرید) قازانجی صەڕافە. هەرچەند کەمتر بێت، نزیکترە لە نرخی بازاڕ.',
    faq2q: 'ئایا نرخەکان بۆ هەموو صەڕافەکان کۆتایین؟',
    faq2a: 'نرخەکان لێرە سەرچاوەی بازاڕن. ڕەنگە بەپێی ناوچە و کات کەمێک جیاواز بن.',
    faq3q: 'چۆن حاسبەکە بەکاربهێنم؟',
    faq3a: 'دراو و بڕ و دۆخی کڕین/فرۆشتن هەڵبژێرە؛ ئەنجام دەستبەجێ دەردەکەوێت.',
    faq4q: 'جیاوازی نێوان نرخی بازاڕی هاوتەریب و بانکی ناوەندی عێراق چییە؟',
    faq4a:
      'بانکی ناوەندی عێراق نرخی فەرمی بڵاودەکاتەوە بۆ مامەڵە فەرمییەکان. نرخی دراو لە عێراق لە بازاڕی هاوتەریب داوا و پێشکەشکردنی سەر شەقام پیشان دەدات و ڕەنگە ڕۆژانە بگۆڕێت.',
    faq5q: 'ئایا دەتوانم نرخی زێڕ لەگەڵ نرخی دراو ببینم؟',
    faq5a:
      'بەڵێ. لە dinar-now نرخی دراو و نرخی زێڕ پێکەوە دەبینیت، لەگەڵ حاسبەی گۆڕینەوە بەرامبەر دیناری عێراقی.',
    emptyRates: 'ئێستا هیچ نرخی دراوێک بەردەست نییە.',
    emptyUsd: 'نرخی دۆلار ئێستا بەردەست نییە.',
    emptyOther: 'هیچ دراوێکی زیادە ئێستا نییە.',
    loadError: 'نەتوانرا نرخەکان باربکرێن، تکایە دووبارە هەوڵ بدە.',
    liveMarket: 'ڕاستەوخۆ لە بازاڕ',
    darkMode: 'دۆخی تاریک',
    lightMode: 'دۆخی ڕووناک',
    languageMenu: 'هەڵبژاردنی زمان',
    footerTag: 'نرخی دراو ئێستا',
    partnersTitle: 'ماڵپەڕە گرنگەکان',
    opensNewTab: 'لە تابێکی نوێدا دەکرێتەوە',
    colorPanel: 'ڕەنگەکانی ماڵپەڕ',
    colorBrand: 'سەرەکی',
    colorAccent: 'زێڕین',
    colorUp: 'سەوز',
    colorDown: 'سور',
    colorPresets: 'قاڵبەکان',
    colorPresetDefault: 'بنەڕەت',
    colorPresetMarket: 'بازاڕ',
    colorPresetSoft: 'نەرم',
    colorReset: 'گەڕاندنەوە بۆ بنەڕەت',
    keywords:
      'نرخی دراو لە عێراق ئێستا, نرخی دۆلار ئەمڕۆ, دیناری عێراقی, نرخی زێڕ لە عێراق, بانکی ناوەندی عێراق, گۆڕینەوەی دراو',
    seoIraqTitle: 'نرخی دراو لە عێراق ئێستا',
    seoIraqBody:
      'لە dinar-now نرخی دراو لە عێراق ئێستا بەدوادا بگەڕێ: کڕین و فرۆشتنی دۆلار بەرامبەر دیناری عێراقی، دراوە بیانییەکان، و حاسبەی خێرا بۆ بەغدا، هەولێر، بەسرە و پارێزگاکانی تر.',
    seoGoldTitle: 'نرخی زێڕ و نرخی دراو پێکەوە',
    seoGoldBody:
      'لەگەڵ نرخی دراو، نرخی زێڕ لە عێراق (عیاری ناوخۆیی و ئۆنس) پیشان دەدەین بۆ بەراوردکردنی بازاڕ پێش کڕین یان فرۆشتن.',
    seoCbiTitle: 'بانکی ناوەندی عێراق و نرخە فەرمییەکان',
    seoCbiBody:
      'بانکی ناوەندی عێراق نرخە فەرمییەکان بڵاودەکاتەوە. ئێمە سەرچاوەی بازاڕی هاوتەریب بۆ صەڕاف و هاووڵاتیان پیشان دەدەین، لەگەڵ لینکی ماڵپەڕە گرنگەکان وەک بانکی ناوەندی.',
    titleFallback: 'نرخی دراو لە عێراق ئێستا | دۆلار و زێڕ | dinar-now',
    descriptionFallback:
      'نرخی دراو لە عێراق ئێستا: دۆلار بەرامبەر دینار، نرخی زێڕ، حاسبەی گۆڕینەوە، و چوارچێوەی بانکی ناوەندی عێراق.',
    titleWithPrice: (sell: number) =>
      `نرخی دراو لە عێراق ئێستا — دۆلار ${sell} | نرخی زێڕ | dinar-now`,
    descriptionWithPrice: (buy: number, sell: number) =>
      `نرخی دراو لە عێراق ئێستا (بۆ هەر 100$): کڕین ${buy} و فرۆشتن ${sell}. دۆلار، زێڕ و گۆڕینەوەی دراو بە خێرایی لەگەڵ سەرچاوەی بازاڕ و بانکی ناوەندی عێراق.`,
  },
};

export type UiKey = Exclude<keyof UiStrings, 'titleWithPrice' | 'descriptionWithPrice'>;

export const currencyNamesEn: Record<string, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  TRY: 'Turkish Lira',
  GBP: 'British Pound',
  AED: 'UAE Dirham',
  SAR: 'Saudi Riyal',
  IRR: 'Iranian Toman',
  NOK: 'Norwegian Krone',
  SEK: 'Swedish Krona',
  JOD: 'Jordanian Dinar',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  CHF: 'Swiss Franc',
  DKK: 'Danish Krone',
  QAR: 'Qatari Riyal',
  KWD: 'Kuwaiti Dinar',
};

export const currencyNamesKu: Record<string, string> = {
  USD: 'دۆلاری ئەمریکی',
  EUR: 'یۆرۆ',
  TRY: 'لیرەی تورکی',
  GBP: 'پاوەندی بەریتانی',
  AED: 'درهەمی ئیماراتی',
  SAR: 'ڕیاڵی سعودی',
  IRR: 'تومەنی ئێرانی',
  NOK: 'کرۆنی نەرویجی',
  SEK: 'کرۆنی سویدی',
  JOD: 'دیناری ئوردنی',
  CAD: 'دۆلاری کەنەدی',
  AUD: 'دۆلاری ئوسترالی',
  CHF: 'فرانکی سویسری',
  DKK: 'کرۆنی دانیمارکی',
  QAR: 'ڕیاڵی قەتەری',
  KWD: 'دیناری کوەیتی',
};

export const goldNamesEn: Record<string, string> = {
  GOLD_21K: '21K Gold',
  GOLD_18K: '18K Gold',
  GOLD_OUNCE: 'Gold Ounce',
};

export const goldNamesKu: Record<string, string> = {
  GOLD_21K: 'زێڕی عیار ٢١',
  GOLD_18K: 'زێڕی عیار ١٨',
  GOLD_OUNCE: 'ئۆنسی زێڕ',
};
