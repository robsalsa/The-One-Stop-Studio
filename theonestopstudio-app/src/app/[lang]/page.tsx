"use client";

import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import { usePathname, useRouter } from "next/navigation";
import { trackButtonClick } from "@/lib/analytics";
import { client } from "@/lib/sanity";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModalPopup from "@/components/ModalPopup";
import translations from "@/../public/localization/translationHomePage.json";

type Translations = {
  servicesBtn: string;
  spanishBtn: string;
  discounts: string;
  reviewsHeader: string;
  review1Title: string;
  review1Desc: string;
  review1Author: string;
  review2Title: string;
  review2Desc: string;
  review2Author: string;
  review3Title: string;
  review3Desc: string;
  review3Author: string;
  review4Title: string;
  review4Desc: string;
  review4Author: string;
  bookBtn: string;
};

type ModalData = {
  title: string;
  description: string;
  href?: string;
};

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  // Detect language from URL - same logic as Header/Footer
  const lang = pathname?.startsWith("/es")
    ? "es"
    : pathname?.startsWith("/ko")
    ? "ko"
    : "en";

  // Open modal whenever language changes
  useEffect(() => {
    setIsModalOpen(true);
  }, [lang]);

  // Fetch modal data from Sanity
  useEffect(() => {
    const fetchModalData = async () => {
      try {
        const query = `*[_type == "modalPopUp" && language == $lang][0]{
          title,
          description,
          href
        }`;
        const data = await client.fetch(query, { lang });
        setModalData(data);
      } catch (error) {
        console.error("Error fetching modal data:", error);
      }
    };
    fetchModalData();
  }, [lang]);

  // Set page title for Google Analytics
  useEffect(() => {
    document.title = "Home - The One Stop Studio";
  }, []);

  // Get translations for current language, fallback to 'en'
  const t: Translations = translations[lang as keyof typeof translations] || translations.en;

  // Slideshow images - you can add your own images here
  const slides = [
    "/Assets/starterimage.jpg",
    "/Assets/unnamed.jpg",
    "/Assets/unnamed (1).jpg",
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const slideTimerRef = useRef<number | null>(null);

  // Slideshow auto-rotate
  useEffect(() => {
    const tick = () => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    };

    slideTimerRef.current = window.setInterval(tick, 5000);
    return () => {
      if (slideTimerRef.current) window.clearInterval(slideTimerRef.current);
    };
  }, [slides.length]);

  const goToSlide = (n: number) => setSlideIndex(n);

  // Track slideshow dot clicks
  const handleDotClick = (index: number) => {
    goToSlide(index);
    trackButtonClick(`Slideshow Dot ${index + 1}`, 'Homepage Slideshow');
  };

  return (
    <>
      <Head>
        <title>The One Stop Studio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TYTSN9L1B1"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TYTSN9L1B1');
        `}
      </Script>

      {/* <Header /> */}
      <main id="main-content">
        {/* Slideshow */}
        <div className="slideshow-container">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`fadeaway fade ${slideIndex === idx ? "show" : ""}`}
              style={{ display: slideIndex === idx ? "block" : "none" }}
            >
              <img src={slide} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${slideIndex === idx ? "active" : ""}`}
                onClick={() => handleDotClick(idx)}
                role="button"
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Appointment Button */}
        <div style={{ textAlign: "center" }}>
          <button 
            className="button-54" 
            style={{ width: 300 }}
            onClick={() => {
              trackButtonClick('Book Now - Main CTA', 'Homepage Hero');
              router.push(`/${lang}/coming-soon`);
            }}
          >
            {t.bookBtn}
          </button>
        </div>

        {/* Buttons with Links */}
        <div style={{ textAlign: "center" }}>
          <button 
            className="button-54"
            onClick={() => {
              trackButtonClick('View Services', 'Homepage');
              router.push(`/${lang}/service`);
            }}
          >
            {t.servicesBtn}
          </button>
        </div>

        

        {/* Scrolling Banner (Top) */}
        <section className="ad-container">
          <div className="scrolling-ad">
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
          </div>
        </section>

        {/* Reviews */}
        <section id="Appetizers" className="menu-select">
          <h2>{t.reviewsHeader}</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>{t.review1Title}</h3>
              <p className="description">{t.review1Desc}</p>
              <span className="price">{t.review1Author}</span>
            </div>
            <div className="menu-item">
              <h3>{t.review2Title}</h3>
              <p className="description">{t.review2Desc}</p>
              <span className="price">{t.review2Author}</span>
            </div>
            <div className="menu-item">
              <h3>{t.review3Title}</h3>
              <p className="description">{t.review3Desc}</p>
              <span className="price">{t.review3Author}</span>
            </div>
            <div className="menu-item">
              <h3>{t.review4Title}</h3>
              <p className="description">{t.review4Desc}</p>
              <span className="price">{t.review4Author}</span>
            </div>
          </div>
        </section>

        

        {/* Scrolling Banner (Bottom) */}
        <section className="ad-container" style={{ textAlign: "right" }}>
          <div className="scrolling-ad">
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
            <span>{t.discounts}</span>
          </div>
        </section>
      </main>

      {/* Modal pop-up from Sanity CMS */}
      {modalData && (
        <ModalPopup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalData.title}
          description={modalData.description}
          href={modalData.href}
          language={lang}
        />
      )}

      {/* <Footer /> */}
    </>
  );
}
