"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookingPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ minHeight: "300%", padding: "2rem 0" }}>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/roberts8443/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </main>
      <Footer />
    </>
  );
}
