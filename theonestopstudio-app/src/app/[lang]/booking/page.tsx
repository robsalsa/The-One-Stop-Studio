"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import translations from '@/../public/localization/translationBookingPage.json';
import CalendlyWidget from '@/components/CalendlyWidget';

type Translations = {
  pageTitle: string;
  appointmentDuration: string;
  depositDisclaimer: string;
  calendlyUrl: string;
};

export default function BookingPage() {
  const pathname = usePathname();

  // Detect language from URL
  const lang = pathname?.startsWith("/es")
    ? "es"
    : pathname?.startsWith("/ko")
    ? "ko"
    : "en";

  // Set page title dynamically
  useEffect(() => {
    document.title = "Book Appointment - The One Stop Studio";
  }, []);

  // Get translations for current language
  const t: Translations = translations[lang as keyof typeof translations] || translations.en;

  return (
    <main>
      <section className="booking-section" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div className="container">
          <CalendlyWidget
            lang={lang}
            appointmentDuration={t.appointmentDuration}
            depositDisclaimer={t.depositDisclaimer}
            bookingTitle={t.pageTitle}
            calendlyUrl={t.calendlyUrl}
          />
        </div>
      </section>
    </main>
  );
}
