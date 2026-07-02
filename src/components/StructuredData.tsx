"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";

export function StructuredData() {
  const { t, locale } = useLang();

  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "valledelalunabolivia.com"}`;

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": locale === "es" ? "Valle de la Luna" : locale === "zh" ? "月亮谷" : locale === "qu" ? "Killa Llaqta" : "Valle de la Luna",
    "description": t.history.intro,
    "url": `${baseUrl}/${locale}`,
    "image": `${baseUrl}/gallery/valle-de-la-luna (1).jpg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "6330"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.5342,
      "longitude": -68.0584
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Paz",
      "addressRegion": "La Paz",
      "addressCountry": "BO"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
