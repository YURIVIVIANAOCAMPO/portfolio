"use client";

import { useEffect } from "react";

export default function Analytics() {
  // Placeholder for Google Analytics logic
  // Users can add their G-ID here later
  useEffect(() => {
    // trackPageView(window.location.pathname);
    console.log("Analytics initialized - SEO/SEM mindset active");
  }, []);

  return null;
}

export const trackEvent = (action: string, category: string, label: string) => {
  console.log(`Event tracked: ${action} | ${category} | ${label}`);
  // if (typeof window.gtag !== 'undefined') {
  //   window.gtag('event', action, { event_category: category, event_label: label });
  // }
};
