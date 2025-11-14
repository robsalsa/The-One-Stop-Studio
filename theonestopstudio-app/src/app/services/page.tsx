"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesData from "@/data/servicesData.json";
import "./services.css";

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter.toLowerCase());
  };

  const isColumnVisible = (category: string) => {
    if (activeFilter === "all") return true;
    return category.toLowerCase() === activeFilter;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="section-title">Our Services</h1>
        <div className="filter-buttons">
          <button 
            data-filter="all" 
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => handleFilterClick("all")}
          >
            Show All
          </button>
          <button 
            data-filter="barber services" 
            className={activeFilter === "barber services" ? "active" : ""}
            onClick={() => handleFilterClick("barber services")}
          >
            Barber
          </button>
          <button 
            data-filter="beauty services" 
            className={activeFilter === "beauty services" ? "active" : ""}
            onClick={() => handleFilterClick("beauty services")}
          >
            Beauty
          </button>
          <button 
            data-filter="other/add-on services" 
            className={activeFilter === "other/add-on services" ? "active" : ""}
            onClick={() => handleFilterClick("other/add-on services")}
          >
            Other
          </button>
          <button 
            data-filter="permanent cosmetic services" 
            className={activeFilter === "permanent cosmetic services" ? "active" : ""}
            onClick={() => handleFilterClick("permanent cosmetic services")}
          >
            Permanent Cosmetics
          </button>
          <button 
            data-filter="piercing services" 
            className={activeFilter === "piercing services" ? "active" : ""}
            onClick={() => handleFilterClick("piercing services")}
          >
            Piercings
          </button>
        </div>
        <div className="services-container" id="servicesContainer">
          {(servicesData as ServiceCategory[]).map((categoryData, idx) => (
            <div
              key={idx}
              className="service-column"
              data-category={categoryData.category}
              style={{
                display: isColumnVisible(categoryData.category) ? "block" : "none"
              }}
            >
              <h3>{categoryData.category}</h3>
              {categoryData.services.map((service, serviceIdx) => (
                <div key={serviceIdx} className="service-item">
                  <h4>{service.name}</h4>
                  <span className="price">{service.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <p style={{textAlign:"center"}}>Call <a href="tel:+14247572546" className="underline">(424) 757-2546</a> for pricing and appointments.</p> */}
      </main>
      <Footer />
    </div>
  );
}
