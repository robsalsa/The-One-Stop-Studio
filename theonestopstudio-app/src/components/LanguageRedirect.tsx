'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getPreferredLanguage } from '@/lib/languageDetection';

/**
 * Redirects users to their preferred language on first visit
 * Only runs on root path ("/") to avoid disrupting navigation
 */
export default function LanguageRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only redirect from root path
    if (pathname !== '/') return;

    // Check if this is first visit (no redirect flag)
    const hasRedirected = sessionStorage.getItem('lang-redirected');
    if (hasRedirected) return;

    // Get preferred language
    const preferredLang = getPreferredLanguage();

    // Mark as redirected for this session
    sessionStorage.setItem('lang-redirected', 'true');

    // Redirect to language-specific page
    router.replace(`/${preferredLang}`);
  }, [pathname, router]);

  return null;
}
