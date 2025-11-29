'use client';

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  lang: 'en' | 'es' | 'ko';
  appointmentDuration: string;
  depositDisclaimer: string;
  bookingTitle: string;
  calendlyUrl: string;
}

const CalendlyWidget = ({ 
  lang, 
  appointmentDuration, 
  depositDisclaimer,
  bookingTitle,
  calendlyUrl
}: CalendlyWidgetProps) => {
  useEffect(() => {
    // Load Calendly script only once
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Calendly URL with dynamic locale
  const fullCalendlyUrl = `${calendlyUrl}?locale=${lang}`;

  return (
    <div className="calendly-booking-section">
      {/* Booking Title */}
      <h2 className="booking-title">{bookingTitle}</h2>
      
      {/* Appointment Duration Info */}
      <div className="appointment-info">
        <p className="duration-info">
          ⏱️ {appointmentDuration}
        </p>
      </div>

      {/* Deposit Disclaimer */}
      <div className="deposit-disclaimer">
        <p className="disclaimer-text">
          ⚠️ {depositDisclaimer}
        </p>
      </div>

      {/* Calendly Inline Widget */}
      <div 
        className="calendly-inline-widget" 
        data-url={fullCalendlyUrl}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default CalendlyWidget;
