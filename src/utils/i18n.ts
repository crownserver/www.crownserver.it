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

// Get current language from browser or localStorage
export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLang;
  }

  // Check localStorage first
  const stored = localStorage.getItem('crownserver-lang');
  if (stored && languages.includes(stored as Language)) {
    return stored as Language;
  }

  // Fall back to browser language
  const browserLang = navigator.language.split('-')[0];
  if (languages.includes(browserLang as Language)) {
    return browserLang as Language;
  }

  return defaultLang;
}

// Set language preference
export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('crownserver-lang', lang);
  }
}
