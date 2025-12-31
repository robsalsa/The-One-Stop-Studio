/**
 * Detects the user's preferred language from browser settings
 * Returns 'en', 'es', or 'ko' based on browser language
 * Falls back to 'en' if no match found
 */
export function detectBrowserLanguage(): 'en' | 'es' | 'ko' {
  if (typeof window === 'undefined') return 'en';

  // Get browser language (e.g., 'en-US', 'es-MX', 'ko-KR')
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  if (!browserLang) return 'en';

  // Extract the primary language code (e.g., 'en' from 'en-US')
  const langCode = browserLang.toLowerCase().split('-')[0];

  // Map to supported languages
  if (langCode === 'es') return 'es';
  if (langCode === 'ko') return 'ko';
  
  // Default to English
  return 'en';
}

/**
 * Gets the stored language preference or detects from browser
 * Stores preference in localStorage for consistency
 */
export function getPreferredLanguage(): 'en' | 'es' | 'ko' {
  if (typeof window === 'undefined') return 'en';

  // Check if user has already set a preference
  const storedLang = localStorage.getItem('preferred-language');
  
  if (storedLang === 'en' || storedLang === 'es' || storedLang === 'ko') {
    return storedLang;
  }

  // First time visitor - detect from browser
  const detected = detectBrowserLanguage();
  localStorage.setItem('preferred-language', detected);
  
  return detected;
}

/**
 * Sets the user's language preference
 */
export function setPreferredLanguage(lang: 'en' | 'es' | 'ko') {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-language', lang);
}
