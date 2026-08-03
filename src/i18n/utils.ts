import { defaultLang, localeMeta, ui, type Lang, type UiKey } from './ui';

export function isLang(value: string): value is Lang {
  return value === 'ar' || value === 'en' || value === 'ku';
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybe] = url.pathname.split('/');
  if (maybe && isLang(maybe)) return maybe;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    const value = ui[lang][key] ?? ui[defaultLang][key];
    return typeof value === 'string' ? value : String(value);
  };
}

export function homePath(lang: Lang): string {
  return localeMeta[lang].href;
}

export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const stripped = clean.replace(/^\/(en|ku)(?=\/|$)/, '') || '/';
  if (lang === defaultLang) return stripped;
  const prefix = localeMeta[lang].href;
  return stripped === '/' ? prefix : `${prefix}${stripped}`;
}

export function alternateUrls(siteUrl: string, path = '/'): Record<Lang, string> {
  const base = siteUrl.replace(/\/$/, '');
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return {
    ar: `${base}${clean || '/'}`,
    en: `${base}/en${clean || ''}`,
    ku: `${base}/ku${clean || ''}`,
  };
}
