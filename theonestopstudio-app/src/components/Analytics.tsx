"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

function AnalyticsPageViewInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      // Extract language from path
      const langMatch = pathname?.match(/^\/(en|es|ko)/);
      const language = langMatch ? langMatch[1] : "en";
      
      // Extract page type
      let pageType = "home";
      if (pathname?.includes("/service")) pageType = "service";
      else if (pathname?.includes("/about")) pageType = "about";
      else if (pathname?.includes("/booking")) pageType = "booking";
      else if (pathname?.includes("/coming-soon")) pageType = "coming-soon";

      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

      // Send page view with custom parameters
      window.gtag("event", "page_view", {
        page_path: url,
        page_language: language,
        page_type: pageType,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsPageView() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageViewInner />
    </Suspense>
  );
}
