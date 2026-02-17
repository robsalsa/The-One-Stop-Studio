'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingCALPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "test-booking" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="w-full h-screen min-h-screen">
      <Cal
        namespace="test-booking"
        calLink="the-one-stop-shop-wendy/test-booking"
        style={{ width: "100%", height: "100%", overflow: "scroll", marginTop: "200px" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: true }}
      />
    </div>
  );
}
