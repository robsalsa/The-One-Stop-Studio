'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth } from '@/lib/analytics';

export default function ScrollTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackedDepths = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track when user crosses each threshold
      thresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !trackedDepths.has(threshold)) {
          trackedDepths.add(threshold);
          trackScrollDepth(threshold, pathname);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
}
