"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import AboutClientComponent from './AboutClientComponent';
import SEOHead from '@/components/SEOHead';
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

  // SEO Metadata by language
  const seoData = {
    en: {
      title: 'About Us - The One Stop Studio',
      description: 'Learn about The One Stop Studio - Our story, passion for barbering, and commitment to providing the best service.',
    },
    es: {
      title: 'Sobre Nosotros - The One Stop Studio',
      description: 'Conozca The One Stop Studio - Nuestra historia, pasión por la barbería y compromiso de brindar el mejor servicio.',
    },
    ko: {
      title: '회사 소개 - The One Stop Studio',
      description: 'The One Stop Studio에 대해 알아보세요 - 우리의 이야기, 이발에 대한 열정, 최고의 서비스 제공에 대한 헌신.',
    },
  };

  const currentSEO = seoData[lang as keyof typeof seoData] || seoData.en;

  // Get translations for current language, fallback to 'en'
  const t: Translations = translations[lang as keyof typeof translations] || translations.en;

  const imageUrl = "/Assets/aboutpagestuff.jpeg";

  return (
    <>
      <SEOHead 
        title={currentSEO.title}
        description={currentSEO.description}
        canonical={`https://theonestopstudio.com/${lang}/about`}
        lang={lang}
      />
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
    </>
  );
}
