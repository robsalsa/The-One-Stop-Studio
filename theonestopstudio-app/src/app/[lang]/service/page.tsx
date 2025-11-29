"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import translations from '@/../public/localization/translationServicePage.json';

type Service = {
  name: string;
  price: string;
};

type ServiceCategory = {
  category: string;
  services: Service[];
};

type Translations = {
  pageTitle: string;
  filterAll: string;
  filterBarber: string;
  filterBeauty: string;
  filterOther: string;
  filterPermanent: string;
  filterPiercing: string;
  servicesData: ServiceCategory[];
};

export default function ServicesPage() {
  const pathname = usePathname();

  // Detect language from URL
  const lang = pathname?.startsWith("/es")
    ? "es"
    : pathname?.startsWith("/ko")
    ? "ko"
    : "en";

  // Set page title dynamically
  useEffect(() => {
    document.title = "Services - The One Stop Studio";
  }, []);

  // Get translations for current language
  const t: Translations = translations[lang as keyof typeof translations] || translations.en;

  // State for filter
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Filter services based on active filter
  const filteredServices = activeFilter === "all" 
    ? t.servicesData 
    : t.servicesData.filter(cat => cat.category === activeFilter);

  return (
    <main>
      <section className="content-section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <h2 className="section-title">{t.pageTitle}</h2>

          <div className="filter-buttons">
            <button 
              className={activeFilter === "all" ? "active" : ""}
              onClick={() => setActiveFilter("all")}
            >
              {t.filterAll}
            </button>
            <button 
              className={activeFilter === (lang === "en" ? "Barber Services" : lang === "es" ? "Servicios de Barbería" : "이발 서비스") ? "active" : ""}
              onClick={() => setActiveFilter(lang === "en" ? "Barber Services" : lang === "es" ? "Servicios de Barbería" : "이발 서비스")}
            >
              {t.filterBarber}
            </button>
            <button 
              className={activeFilter === (lang === "en" ? "Beauty Services" : lang === "es" ? "Servicios de Belleza" : "뷰티 서비스") ? "active" : ""}
              onClick={() => setActiveFilter(lang === "en" ? "Beauty Services" : lang === "es" ? "Servicios de Belleza" : "뷰티 서비스")}
            >
              {t.filterBeauty}
            </button>
            <button 
              className={activeFilter === (lang === "en" ? "Other/Add-On Services" : lang === "es" ? "Otros/Servicios Adicionales" : "기타/추가 서비스") ? "active" : ""}
              onClick={() => setActiveFilter(lang === "en" ? "Other/Add-On Services" : lang === "es" ? "Otros/Servicios Adicionales" : "기타/추가 서비스")}
            >
              {t.filterOther}
            </button>
            <button 
              className={activeFilter === (lang === "en" ? "Permanent Cosmetic Services" : lang === "es" ? "Servicios de Cosméticos Permanentes" : "영구 화장 서비스") ? "active" : ""}
              onClick={() => setActiveFilter(lang === "en" ? "Permanent Cosmetic Services" : lang === "es" ? "Servicios de Cosméticos Permanentes" : "영구 화장 서비스")}
            >
              {t.filterPermanent}
            </button>
            <button 
              className={activeFilter === (lang === "en" ? "Piercing Services" : lang === "es" ? "Servicios de Perforación" : "피어싱 서비스") ? "active" : ""}
              onClick={() => setActiveFilter(lang === "en" ? "Piercing Services" : lang === "es" ? "Servicios de Perforación" : "피어싱 서비스")}
            >
              {t.filterPiercing}
            </button>
          </div>

          <div className="services-container" id="servicesContainer">
            {filteredServices.map((category, index) => (
              <div key={index} className="service-column" data-category={category.category}>
                <h3>{category.category}</h3>
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <h4>{service.name}</h4>
                    <span className="price">{service.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
