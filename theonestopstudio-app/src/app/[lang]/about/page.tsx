"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AboutClientComponent from './AboutClientComponent';
import translations from '@/../public/localization/translationAboutPage.json';

type Translations = {
  sectionHeading: string;
  ownerTitle: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioParagraph3: string;
  rotatingWords: string[];
};

export default function AboutPage() {
  const pathname = usePathname();

  // Detect language from URL - same logic as Header/Footer
  const lang = pathname?.startsWith("/es")
    ? "es"
    : pathname?.startsWith("/ko")
    ? "ko"
    : "en";

  // Set page title for Google Analytics
  useEffect(() => {
    document.title = "About Us - The One Stop Studio";
  }, []);

  // Get translations for current language, fallback to 'en'
  const t: Translations = translations[lang as keyof typeof translations] || translations.en;

  const imageUrl = "/Assets/aboutpagestuff.jpeg";

  return (
    <section className="about-us">
      <div className="about">
        <Image
          src={imageUrl}
          alt="About The One Stop Studio"
          width={400}
          height={400}
          className="pic"
          priority
        />
        <div className="text">
          <h5>
            {t.sectionHeading}{' '}
            <AboutClientComponent words={t.rotatingWords} />
          </h5>
          
          <p>{t.ownerTitle}</p>

          <p>{t.bioParagraph1}</p>
          <p>{t.bioParagraph2}</p>
          <p>{t.bioParagraph3}</p>
        </div>
      </div>
    </section>
  );
}
