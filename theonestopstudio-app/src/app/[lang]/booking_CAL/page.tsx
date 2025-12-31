'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { trackCalendarInteraction } from "@/lib/analytics";

interface BookingCALPageProps {
  params: {
    lang: string;
  };
}

export default function BookingCALPage({ params }: BookingCALPageProps) {
  useEffect(() => {
    // Track that user landed on booking page
    trackCalendarInteraction('booking_page_view');
    
    (async function () {
      const cal = await getCalApi({ namespace: "test-long-hour-service" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      
      // Track calendar loaded
      trackCalendarInteraction('calendar_loaded');
    })();
  }, []);

  return (
    <div className="w-full h-screen min-h-screen">
      <Cal
        namespace="test-long-hour-service"
        calLink="robert-salazar-vasquez-5a8hw2/test-long-hour-service"
        style={{ width: "100%", height: "100%", overflow: "scroll", marginTop: "150px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
