'use client';

import { useEffect, useState } from 'react';

interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive';
  clearDelay?: number;
}

/**
 * Screen reader announcement component for dynamic content updates
 * Announces messages to screen readers without visual disruption
 */
export default function LiveRegion({ message, politeness = 'polite', clearDelay = 5000 }: LiveRegionProps) {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (message) {
      setAnnouncement(message);

      // Clear announcement after delay
      const timer = setTimeout(() => {
        setAnnouncement('');
      }, clearDelay);

      return () => clearTimeout(timer);
    }
  }, [message, clearDelay]);

  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}
