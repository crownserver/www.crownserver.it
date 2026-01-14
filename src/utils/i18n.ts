import itTranslations from '../i18n/it.json';
import enTranslations from '../i18n/en.json';

type Translations = typeof itTranslations;
type TranslationKey = string;

const translations: Record<string, Translations> = {
  it: itTranslations,
  en: enTranslations,
};

export const defaultLang = 'it';
export const languages = ['it', 'en'] as const;

export type Language = typeof languages[number];

// Get nested property from object using dot notation (e.g., "nav.products")
function getNestedProperty(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) as string;
}

// Get translation for a given key
export function t(lang: Language, key: TranslationKey, replacements?: Record<string, string>): string {
  const translation = getNestedProperty(translations[lang], key);

  if (!translation) {
    // Fallback to Italian if translation missing
    const fallback = getNestedProperty(translations[defaultLang], key);
    if (!fallback) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return fallback;
  }

  // Replace placeholders like {year} with actual values
  if (replacements) {
    let result = translation;
    for (const [placeholder, value] of Object.entries(replacements)) {
      result = result.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), value);
    }
    return result;
  }

  return translation;
}

// Get current language from URL
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && languages.includes(lang as Language)) {
    return lang as Language;
  }
  return defaultLang;
}

// Get current language from browser location
export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLang;
  }

  return getLangFromUrl(new URL(window.location.href));
}

// Get localized path for a given route
export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // For default language (Italian), don't add prefix
  if (lang === defaultLang) {
    return cleanPath;
  }

  // For other languages, add prefix
  return `/${lang}${cleanPath}`;
}

// Switch to a different language by navigating to the localized URL
export function switchLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;

  const currentUrl = new URL(window.location.href);
  const currentLang = getLangFromUrl(currentUrl);

  // Get the path without language prefix
  let path = currentUrl.pathname;
  if (currentLang !== defaultLang) {
    path = path.replace(`/${currentLang}`, '') || '/';
  }

  // Navigate to the new language path
  const newPath = getLocalizedPath(path, lang);
  window.location.href = newPath;
}
