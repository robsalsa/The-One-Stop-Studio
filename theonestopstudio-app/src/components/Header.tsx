"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
  ]

  const [burgerActive, setBurgerActive] = useState(false);
  const [langMenuActive, setLangMenuActive] = useState(false);

  useEffect(() => {
    setBurgerActive(false);
    setLangMenuActive(false);
  }, [pathname]);

  const handleLanguageChange = (code: string) =>{
    let basePath ="/";
    if (code != "en") basePath = `/${code}`;
  

    const pathParts = pathname.split("/").slice(2);
    const newPath = pathParts.length > 0 ? `${basePath}/${pathParts.join("/")}`: basePath;
    
    router.push(newPath);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href={lang === "es" ? "/es" : lang === "ko" ? "/ko" : "/"} className="flex items-center gap-3">
          <Image
            src="/Assets/The One Stop Studio.jpg"
            alt="The One Stop Studio"
            width={55}
            height={50}
            priority
          />
        </Link>

        <Link  href={lang === "es" ? "/es" : lang === "ko" ? "/ko" : "/"}>
          <h20>
            The One Stop Studio
          </h20>
        
        </Link>

        <nav className="navbar">
          <ul className={`burger-menu ${burgerActive ? "active" : ""}`}>
            <li className="burger-item">
              <Link href={lang === "es" ? "/es/services" : lang === "ko" ? "/ko/services" : "/services"}>
                {labels[lang].services}
              </Link>
            </li>
            <li className="burger-item">
              <Link href={lang === "es" ? "/es/about" : lang === "ko" ? "/ko/about" : "/about"}>
                {labels[lang].about}
              </Link>
            </li>
            <li className="burger-item">
              <Link href={lang === "es" ? "/es/coming-soon" : lang === "ko" ? "/ko/coming-soon" : "/coming-soon"}>
                {labels[lang].book}
              </Link>
            </li>

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