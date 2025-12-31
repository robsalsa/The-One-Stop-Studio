"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { trackLanguageChange, trackButtonClick, trackOutboundLink } from "@/lib/analytics";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  // Detect language
  const lang = pathname?.startsWith("/es")
    ? "es"
    : pathname?.startsWith("/ko")
    ? "ko"
    : "en";

  // Language map
  const labels = {
    en: { services: "All Services", about: "About Us", book: "Book", switch: "Languages" },
    es: { services: "Servicios", about: "Sobre Nosotros", book: "Reservar", switch: "Idiomas" },
    ko: { services: "모든 서비스", about: "회사 소개", book: "예약하기", switch: "언어" },
  };

  const availableLanguages = [
    {code: "en", label: "English"},
    {code: "es", label: "Español"},
    {code: "ko", label: "한국인"},
  ];

  const [burgerActive, setBurgerActive] = useState(false);
  const [langMenuActive, setLangMenuActive] = useState(false);

  useEffect(() => {
    setBurgerActive(false);
    setLangMenuActive(false);
  }, [pathname]);

  const handleLanguageChange = (code: string) => {
    // Track language change
    trackLanguageChange(lang, code);
    
    // Remove the current language prefix from the path
    const pathWithoutLang = pathname.replace(/^\/(en|es|ko)/, '') || '/';
    
    // Construct new path with selected language (all languages use prefix)
    const newPath = `/${code}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    
    router.push(newPath);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href={lang === "es" ? "/es" : lang === "ko" ? "/ko" : "/en"} className="flex items-center gap-3">
          <Image
            src="/Assets/The One Stop Studio.jpg"
            alt="The One Stop Studio"
            width={55}
            height={50}
            priority
          />
        </Link>

        <Link  href={lang === "es" ? "/es" : lang === "ko" ? "/ko" : "/en"}>
          <h2 className="site-title">
            The One Stop Studio
          </h2>
        
        </Link>

        <nav className="navbar">
          <ul className={`burger-menu ${burgerActive ? "active" : ""}`}>
            <li className="burger-item">
              <Link 
                href={lang === "es" ? "/es/service" : lang === "ko" ? "/ko/service" : "/en/service"}
                onClick={() => trackButtonClick('Services Nav Link', 'Header')}
              >
                {labels[lang].services}
              </Link>
            </li>
            <li className="burger-item">
              <Link 
                href={lang === "es" ? "/es/about" : lang === "ko" ? "/ko/about" : "/en/about"}
                onClick={() => trackButtonClick('About Nav Link', 'Header')}
              >
                {labels[lang].about}
              </Link>
            </li>
            {/* <li className="burger-item">
              <Link href={lang === "es" ? "/es/booking" : lang === "ko" ? "/ko/booking" : "/en/booking"}>
                {labels[lang].book}
              </Link>
            </li> */}
            <li className="burger-item">
              <Link 
                href={lang === "es" ? "/es/coming-soon" : lang === "ko" ? "/ko/coming-soon" : "/en/coming-soon"}
                onClick={() => trackButtonClick('Book Nav Link', 'Header')}
              >
                {labels[lang].book}
              </Link>
            </li>       {/* THIS IS FOR THE COMING SOON PAGE PLEASE DO NOT CHANGE UNTIL A REAL ANNOUNCEMENT IT MADE */}

            {/* Dynamic Language Switcher */}
            <li className="burger-item">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setLangMenuActive((prev) => !prev)}
              >
                {labels[lang].switch}
              </span>
              {langMenuActive && (
                <ul className="submenu">
                  {availableLanguages.map((l) => (
                    <li key={l.code} className="burger-item">
                      <span
                        className="cursor-pointer hover:underline"
                        onClick={() => handleLanguageChange(l.code)}
                      >
                        {l.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <div
          className={`burger ${burgerActive ? "active" : ""}`}
          onClick={() => setBurgerActive((prev) => !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}