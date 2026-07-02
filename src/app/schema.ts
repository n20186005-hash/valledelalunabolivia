export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "valledelalunabolivia.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Valle de la Luna"
    : locale === "zh"
    ? "月亮谷"
    : locale === "qu"
    ? "Killa Llaqta"
    : "Valle de la Luna";

  const description = locale === "es"
    ? "Valle de la Luna en La Paz, Bolivia. Paisaje lunar único con formaciones rocosas impresionantes."
    : locale === "zh"
    ? "玻利维亚拉巴斯的月亮谷（Valle de la Luna），拥有独特的月球地貌和令人叹为观止的岩石景观。"
    : locale === "qu"
    ? "Valle de la Luna, La Paz, Bolivia. Unique lunar landscape."
    : "Valle de la Luna in La Paz, Bolivia. Unique moon-like landscape with breathtaking rock formations.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Place"],
        "name": name,
        "alternateName": ["Valle de la Luna", "Moon Valley", "月亮谷", "Killa Llaqta"],
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/valle-de-la-luna (1).jpg`,
        
        // 精确地理坐标（拉巴斯月亮谷）
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -16.5342,
          "longitude": -68.0584
        },
        
        // 地址信息
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CWM4+3C4",
          "addressLocality": "La Paz",
          "addressRegion": "La Paz",
          "addressCountry": "BO"
        },
        
        // 开放时间
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        
        // 价格信息
        "priceRange": "$$",
        "isAccessibleForFree": false,
        
        // 景点信息
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "geoCoordinate",
            "value": "CWM4+3C4"
          },
          {
            "@type": "PropertyValue",
            "name": "phone",
            "value": "+59178937547"
          },
          {
            "@type": "PropertyValue",
            "name": "landformType",
            "value": "Erosional landscape"
          }
        ],
        
        // 社交媒体和地图链接
        "sameAs": [
          "https://maps.app.goo.gl/5qCYWLKm9uo4G8Jh9",
          "https://visitbolivia.produccion.gob.bo/lugar/21",
          "https://lapaz.bo/"
        ]
      },
      
      // Website 结构化数据
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-BO" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-BO" : "en-US",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Valle de la Luna Guide",
        }
      }
    ]
  };
}
