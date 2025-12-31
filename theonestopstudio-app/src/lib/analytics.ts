// Analytics tracking utilities for Google Analytics 4

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views (already handled by Analytics component, but available if needed)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-PX3980M4N7', {
      page_path: url,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
  });
};

// Track booking attempts
export const trackBookingAttempt = (language: string) => {
  trackEvent('booking_attempt', {
    language,
    event_category: 'conversion',
    event_label: 'Book Now Click',
  });
};

// Track service views
export const trackServiceView = (serviceName: string, category: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
    service_category: category,
    event_category: 'engagement',
  });
};

// Track language changes
export const trackLanguageChange = (fromLang: string, toLang: string) => {
  trackEvent('language_change', {
    from_language: fromLang,
    to_language: toLang,
    event_category: 'engagement',
  });
};

// Track outbound links (Instagram, etc.)
export const trackOutboundLink = (url: string, linkName: string) => {
  trackEvent('outbound_click', {
    link_url: url,
    link_name: linkName,
    event_category: 'engagement',
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number, page: string) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
    page_location: page,
    event_category: 'engagement',
  });
};

// Track service filter changes
export const trackFilterChange = (filterName: string) => {
  trackEvent('filter_change', {
    filter_name: filterName,
    event_category: 'engagement',
  });
};

// Track Cal.com booking widget interactions
export const trackCalendarInteraction = (action: string) => {
  trackEvent('calendar_interaction', {
    action,
    event_category: 'booking',
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success,
    event_category: 'conversion',
  });
};
