"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function AnalyticsPageViewInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      // Extract language from path
      const langMatch = pathname?.match(/^\/(en|es|ko)/);
      const language = langMatch ? langMatch[1] : "en";
      
      // Extract page type and title
      let pageType = "home";
      let pageTitle = "Home - The One Stop Studio";
      
      if (pathname?.includes("/service")) {
        pageType = "service";
        pageTitle = "Services - The One Stop Studio";
      } else if (pathname?.includes("/about")) {
        pageType = "about";
        pageTitle = "About Us - The One Stop Studio";
      } else if (pathname?.includes("/booking")) {
        pageType = "booking";
        pageTitle = "Book Appointment - The One Stop Studio";
      } else if (pathname?.includes("/coming-soon")) {
        pageType = "coming-soon";
        pageTitle = "Coming Soon - The One Stop Studio";
      }

      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

      // Send page view with custom parameters
      window.gtag("event", "page_view", {
        page_path: url,
        page_title: pageTitle,
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
