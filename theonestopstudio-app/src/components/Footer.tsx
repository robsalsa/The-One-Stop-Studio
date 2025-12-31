"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackOutboundLink } from "@/lib/analytics";

export default function Footer() {
  const pathname = usePathname();

  const lang = pathname?.startsWith("/es")
    ? "es"
    : pathname?.startsWith("/ko")
    ? "ko"
    : "en";

  const labels = {
    en: { title: "The One Stop Studio", follow: "Follow Us", location: "Our Location" },
    es: { title: "The One Stop Studio", follow: "Síguenos", location: "Nuestra Ubicación" },
    ko: { title: "더 원 스톱 스튜디오", follow: "팔로우 하기", location: "위치" },
  };

  const buzzwords = ["beautiful", "magnificent", "spectacular", "ravishing", "stunning", "charming"];
  const buzzwordsEs = ["hermosa/hermoso", "magnífica/magnífico", "espectacular", "deslumbrante", "impresionante", "encantadora/encantador"];
  const buzzwordsKo = ["아름다운", "웅장한", "장관의", "눈부신", "매력적인", "멋진"];
  const [buzzIndex, setBuzzIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuzzIndex((prev) => (prev + 1) % buzzwords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [buzzwords.length]);

  const currentBuzz = lang === "es" ? buzzwordsEs[buzzIndex] : lang === "ko" ? buzzwordsKo[buzzIndex] : buzzwords[buzzIndex];


  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{labels[lang].title}</h3>
          <p>
            {lang === "ko" ? "당신을 ": lang === "es" ? "Haciéndote " : "Making you "}
            <span className="buzzword-wrapper">
              <span 
                className="buzzword"
                key={buzzIndex}
                style={{
                  animation: 'roll-in 0.5s ease-out forwards'
                }}
              >
                {currentBuzz}
              </span>
            </span>{" "}
            {lang === "ko" ? " 만들어드립니다 2018년부터.": lang === "es" ? " desde 2018" : "since 2018."}
          </p>
        </div>

        <div className="footer-section">
          <h3>{labels[lang].location}</h3>
          <address>2922 S Western Ave, Los Angeles, CA 90018</address>
          <div className="map-container">
            <iframe
              title="Map to The One Stop Studio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.183041912766!2d-118.30925409106783!3d34.02838015117795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b79db660ffbb%3A0x465d852ad147c4cb!2sThe%20One%20Stop%20Studio!5e0!3m2!1sen!2sus!4v1748734461845!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-section">
          <a 
            href="https://www.instagram.com/theonestopstudiollc/" 
            target="_blank" 
            rel="noreferrer"
            onClick={() => trackOutboundLink('https://www.instagram.com/theonestopstudiollc/', 'Instagram - Footer')}
            aria-label="Follow us on Instagram (opens in new tab)"
          >
            {labels[lang].follow}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; The One Stop Studio .llc, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
