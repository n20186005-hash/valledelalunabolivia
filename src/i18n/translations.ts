export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "地质历史", architecture: "地貌特色", monuments: "地质奇观", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["自然奇观", "地质公园", "拉巴斯必游"], tagline: "玻利维亚 · 拉巴斯", title: "Valle de la Luna", subtitle: "月亮谷 · 月球地表 · 独特地质奇观", cta: "探索月亮谷" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "地质历史与形成",
      intro: "月亮谷（Valle de la Luna）位于玻利维亚拉巴斯市南区，是一处令人叹为观止的地质公园。这里的地貌由数百万年的侵蚀作用形成，呈现出与月球表面极为相似的地貌特征。\n\n**独特的地质奇观**：月亮谷的名字来源于其地貌与月球表面的惊人相似性。这里的地层主要由粘土、砂岩和砾岩构成，经过长期的风蚀和水蚀作用，形成了今天我们看到的各种奇特岩层、峡谷和微型峡谷。"
    },
    curiosities: {
      title: "隐藏的秘密：古老的印加传说",
      content: "月亮谷不仅是一处自然奇观，也与古老的传说息息相关。相传在印加帝国时期，这里曾是举行神秘仪式的地方。当地的艾马拉（Aymara）和克丘亚（Quechua）传说中，这些奇特的岩层是古代神灵留下的足迹。\n\n另一个有趣的秘密是：在月亮谷的某些区域，由于岩层的特殊结构，会产生奇特的声音共振效果，当地人称之为'大地的低语'。"
    },
    architecture: {
      title: "地貌特征与地质结构",
      intro: "月亮谷的地貌由数百万年的自然侵蚀形成，展现出地球上最为独特的地质景观之一。这里的岩层、峡谷和奇特地貌，仿佛是大自然精心雕琢的艺术品。",
      specs: {
        structure: { title: "地质结构", content: "月亮谷的岩层主要由粘土、砂岩和砾岩构成。这些沉积岩形成于不同的地质年代，经过长期的风化和侵蚀，形成了今天看到的奇特地貌。" },
        design: { title: "地貌形态", content: "园区内分布着数百座形态各异的岩层，有的像尖塔，有的像圆顶，有的像迷宫般的峡谷。这些地貌在日出和日落时分尤为壮观。" },
        optics: { title: "观景体验", content: "月亮谷设有专门的步行道和观景点，游客可以安全地探索这片神奇的地貌。在日落时分，阳光为岩层镀上金红色的光辉，是摄影的最佳时机。" }
      },
      plaque: {
        title: "景点基本信息",
        items: [
          { label: "名称", value: "Valle de la Luna（月亮谷）" },
          { label: "位置", value: "拉巴斯市南区，玻利维亚" },
          { label: "开放时间", value: "09:00 - 17:00" },
          { label: "联系电话", value: "+591 78937547" },
          { label: "地貌类型", value: "侵蚀地貌、沉积岩层" },
          { label: "推荐游览", value: "日落前 2 小时" }
        ]
      }
    },
    monuments: {
      title: "地质奇观解析",
      intro: "月亮谷内分布着众多令人叹为观止的地质奇观，每一处都有其独特的形成故事和观赏价值。",
      items: [
        { name: "尖塔岩层群", description: "园区内最壮观的景象之一，数十座尖塔状的岩层高耸而立，最高的可达数米。这些尖塔由坚硬的砂岩顶层保护着下方的软质粘土，形成了独特的'帽子'造型。" },
        { name: "微型峡谷", description: "蜿蜒曲折的微型峡谷贯穿整个园区，有些地方仅容一人通过。这些峡谷的深度和形态各不相同，是数百万年水流侵蚀的杰作。" }
      ]
    },
    contrast: {
      title: "穿越时空的地貌",
      intro: "月亮谷的地貌虽然形成于数百万年前，但人类对其的探索和记录仅有百余年历史。通过老照片与现代全景的对比，我们可以感受到大自然鬼斧神工的永恒魅力。",
      before: "早年探索时的月亮谷",
      after: "今日的 月亮谷"
    },
    visiting: {
      title: "实用攻略",
      intro: "月亮谷是探索拉巴斯自然风光的理想去处。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "09:00 - 17:00（每天）", note: "建议日落前 2 小时到达，可欣赏最佳光线。" },
      price: { title: "门票信息", content: "外国人：约 15 玻利维亚诺", note: "价格可能会有变动，建议现场确认。" },
      duration: { title: "建议游览时长", content: "1.5 至 2 小时", note: "可漫步园区步道，欣赏奇特岩层和日落景色。" },
      tips: { title: "游览贴士", items: ["高原地区注意防晒和保暖，昼夜温差大", "穿着舒适的步行鞋，部分路段有一定坡度", "携带足够饮用水，园区内无商店", "日落时分是最佳摄影时机，请提前到达", "建议与附近的月亮谷（Valle de las Animas）安排在同一天游览"] }
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 拉巴斯国际机场 (LPB) ➔ 月亮谷", content: "对于国际游客，从机场到月亮谷需要先从埃尔阿尔托机场前往拉巴斯市区。", options: [
        { name: "出租车/网约车（推荐）", price: "约 40-60 玻利维亚诺", time: "约 30 分钟", steps: ["在机场到达大厅外寻找官方出租车或拨打 +59178937547 预约", "告知司机前往 Valle de la Luna（月亮谷）", "⚠️ 注意：拉巴斯交通较为复杂，建议使用打车软件或预约车辆"] }
      ]},
      publicTransport: {
        title: "🚌 公共交通",
        content: "从拉巴斯市中心前往月亮谷可以乘坐公共交通，但需要换乘。",
        options: [
          {
            name: "小巴/公交 (Minibus)",
            description: "从市中心的 San Francisco 教堂附近乘坐前往 Mallasa 方向的小巴，在月亮谷附近下车后步行。",
            steps: [
              "从市中心 San Francisco 教堂附近找到前往 Mallasa 的小巴",
              "告知司机在 Valle de la Luna 附近停车",
              "下车后步行约 10 分钟到达入口"
            ]
          }
        ]
      },
      city: { title: "🚶 从拉巴斯市中心出发", content: "月亮谷位于拉巴斯市南区，从市中心出发可以选择多种交通方式。建议预留半天时间，将月亮谷与附近景点一并游览。", steps: ["从市中心乘坐出租车约 20-30 分钟", "或乘坐小巴到 Mallasa 方向", "到达后步行进入园区"] },
      tips: { title: "交通小贴士", items: ["拉巴斯海拔约 3600 米，注意高原反应", "市区内建议使用打车软件更安全便捷", "参观时间建议安排在下午，可欣赏日落美景", "可与 Valle de las Animas 安排在同一行程"] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自月亮谷的声音：Google Maps 真实见证", 
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "参观完月亮谷后，您可以顺道游览以下附近景点：",
      nearbyItems: [
        { name: "Valle de las Animas（灵魂谷）", description: "另一处令人叹为观止的地质景观，距离月亮谷不远，地貌同样奇特壮观。" },
        { name: "拉巴斯市中心 (Centro de La Paz)", description: "玻利维亚的行政首都，拥有圣弗朗西斯科教堂、总统府等历史建筑，以及独特的缆车交通系统。" },
        { name: "蒂亚瓦纳科考古遗址 (Tiwanaku)", description: "位于拉巴斯附近的世界文化遗产，是南美洲最古老的文明之一，距今已有 1500 多年历史。" }
      ]
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多相片" },
    faq: { title: "常见问题", subtitle: "深入了解月亮谷", items: [
      { question: "月亮谷的开放时间是？", answer: "月亮谷每天 09:00 - 17:00 开放。建议下午前往，可以在日落前到达，欣赏最佳光线和景色。" },
      { question: "参观月亮谷需要门票吗？", answer: "需要。外国人门票约 15 玻利维亚诺，价格可能会有变动，建议以现场公告为准。" },
      { question: "月亮谷是如何形成的？", answer: "月亮谷的地貌主要由粘土、砂岩和砾岩构成，经过数百万年的风蚀和水蚀作用，形成了今天看到的奇特岩层地貌。其表面与月球表面极为相似，因而得名月亮谷。" },
      { question: "如何前往月亮谷？", answer: "月亮谷位于拉巴斯市南区。从市中心可乘坐出租车（约 20-30 分钟）或乘坐前往 Mallasa 方向的小巴，在月亮谷附近下车后步行约 10 分钟到达。" }
    ]},
    location: { title: "地图位置", address: "CWM4+3C4\nLa Paz\nBolivia\n（玻利维亚拉巴斯）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为拉巴斯的重要自然景点，请与我们一起爱护环境、保护这一独特的地质奇观。保持景点整洁，共同维护这一美丽的自然空间。", text: "© 2026 月亮谷指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播月亮谷信息。我们与玻利维亚政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "玻利维亚旅游局月亮谷官方专页", url: "https://visitbolivia.produccion.gob.bo/lugar/21" },
      { name: "玻利维亚国家旅游推广门户", url: "https://boliviatravel.gob.bo/" },
      { name: "拉巴斯市政府官网", url: "https://lapaz.bo/" },
      { name: "玻利维亚旅游与文化部", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "认识玻利维亚官方旅游导览", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  en: {
    nav: { history: "Geology", architecture: "Features", monuments: "Formations", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Natural Wonder", "Geological Park", "La Paz Must-See"], tagline: "Bolivia · La Paz", title: "Valle de la Luna", subtitle: "Moon Valley · Lunar Landscape · Unique Geological Wonder", cta: "Explore the Valley" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "Geological History & Formation",
      intro: "Valle de la Luna (Moon Valley) is located in the southern district of La Paz, Bolivia. This breathtaking geological park features a landscape formed by millions of years of erosion, presenting surface features strikingly similar to the Moon.\n\n**Unique Geological Wonder**: The name 'Moon Valley' comes from the landscape's astonishing similarity to the lunar surface. The terrain is mainly composed of clay, sandstone, and conglomerate, shaped by long-term wind and water erosion into the unique rock formations, canyons, and mini-canyons we see today."
    },
    curiosities: {
      title: "Hidden Secrets: Ancient Inca Legends",
      content: "Valle de la Luna is not only a natural wonder but also closely connected to ancient legends. According to legend, this was a place where mysterious ceremonies were held during the Inca Empire. In local Aymara and Quechua legends, these strange rock formations are said to be the footprints left by ancient gods.\n\nAnother interesting secret: in certain areas of the Moon Valley, the special structure of the rock formations creates unusual sound resonance effects, which locals call 'the whisper of the earth'."
    },
    architecture: {
      title: "Landform Features & Geological Structure",
      intro: "The landscape of Valle de la Luna was formed by millions of years of natural erosion, presenting one of the most unique geological landscapes on Earth. The rock formations, canyons, and strange landforms are like art pieces carefully carved by nature.",
      specs: {
        structure: { title: "Geological Structure", content: "The rock formations in the Moon Valley are mainly composed of clay, sandstone, and conglomerate. These sedimentary rocks formed in different geological periods and, after long-term weathering and erosion, created the unique landscape we see today." },
        design: { title: "Landform Features", content: "Hundreds of rock formations with different shapes are distributed throughout the park—some like spires, some like domes, and some like labyrinthine canyons. These landforms are especially spectacular at sunrise and sunset." },
        optics: { title: "Viewing Experience", content: "Valle de la Luna has dedicated walking paths and viewing points, allowing visitors to safely explore this magical landscape. At sunset, the sunlight gilds the rock formations in golden-red light—the best time for photography." }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Valle de la Luna (Moon Valley)" },
          { label: "Location", value: "Southern District, La Paz, Bolivia" },
          { label: "Opening Hours", value: "09:00 - 17:00" },
          { label: "Phone", value: "+591 78937547" },
          { label: "Landform Type", value: "Erosional landscape, sedimentary rocks" },
          { label: "Best Time to Visit", value: "2 hours before sunset" }
        ]
      }
    },
    monuments: {
      title: "Geological Wonders Analysis",
      intro: "Valle de la Luna is home to numerous breathtaking geological wonders, each with its own unique formation story and viewing value.",
      items: [
        { name: "Spire Rock Formations", description: "One of the most spectacular sights in the park, dozens of spire-shaped rock formations stand tall, the tallest reaching several meters. These spires are protected by hard sandstone caps atop soft clay, creating unique 'hat' shapes." },
        { name: "Mini Canyons", description: "Winding mini-canyons run through the entire park, some only wide enough for one person to pass. These canyons vary in depth and shape, masterpieces of millions of years of water erosion." }
      ]
    },
    contrast: {
      title: "Valley Across Time",
      intro: "Although the landscape of Valle de la Luna formed millions of years ago, human exploration and documentation of it spans only over a century. Through the contrast of old photos and modern panoramas, we can feel the eternal charm of nature's masterful craftsmanship.",
      before: "Early Exploration: Moon Valley",
      after: "Today: Valle de la Luna"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "Valle de la Luna is an ideal destination for exploring La Paz's natural scenery. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "09:00 - 17:00 (Daily)", note: "Arrive 2 hours before sunset for the best light." },
      price: { title: "Entrance Fee", content: "Foreigners: ~15 Bolivianos", note: "Prices may vary; please confirm on-site." },
      duration: { title: "Suggested Visit Duration", content: "1.5 to 2 hours", note: "You can walk the park trails, admire the unique rock formations and sunset views." },
      tips: { title: "Travel Tips", items: ["High altitude area—use sun protection and dress warmly for temperature swings", "Wear comfortable walking shoes; some sections have slopes", "Bring enough drinking water; there are no shops in the park", "Sunset is the best time for photography—arrive early", "Consider combining with nearby Valle de las Animas on the same day"] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ La Paz Int'l Airport (LPB) ➔ Moon Valley", content: "For international tourists, you need to get from the airport at El Alto to downtown La Paz first, then to Moon Valley.", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 40-60 Bolivianos", time: "About 30 minutes", steps: ["Find an official taxi outside the airport arrivals hall or call +59178937547 to book", "Tell the driver you are going to Valle de la Luna (Moon Valley)", "⚠️ Note: La Paz traffic is complex; using a ride-hailing app or booking a vehicle is recommended"] }
      ]},
      publicTransport: {
        title: "🚌 Public Transport",
        content: "You can take public transport from downtown La Paz to Moon Valley, but it requires a transfer.",
        options: [
          {
            name: "Minibus",
            description: "Take a minibus heading to Mallasa from near San Francisco Church in the city center, get off near Moon Valley and walk.",
            steps: [
              "Find a minibus heading to Mallasa near San Francisco Church in the city center",
              "Tell the driver to stop near Valle de la Luna",
              "After getting off, walk about 10 minutes to the entrance"
            ]
          }
        ]
      },
      city: { title: "🚶 From Downtown La Paz", content: "Valle de la Luna is located in the southern district of La Paz. You can choose various transportation options from the city center. It is recommended to allocate half a day to visit Moon Valley together with nearby attractions.", steps: ["Take a taxi from downtown, about 20-30 minutes", "Or take a minibus heading to Mallasa", "After arrival, walk into the park"] },
      tips: { title: "Transportation Tips", items: ["La Paz is at ~3600m altitude—be aware of altitude sickness", "Using ride-hailing apps in the city is safer and more convenient", "Schedule your visit in the afternoon to enjoy the sunset", "Combine with Valle de las Animas in the same trip"] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Voices from Valle de la Luna: Real Testimonies from Google Maps", 
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Valle de la Luna, you can easily visit the following nearby attractions:",
      nearbyItems: [
        { name: "Valle de las Animas", description: "Another breathtaking geological landscape, not far from Moon Valley, with equally unique and spectacular landforms." },
        { name: "Downtown La Paz (Centro de La Paz)", description: "Bolivia's administrative capital, home to San Francisco Church, the Presidential Palace, and unique cable car transportation." },
        { name: "Tiwanaku Archaeological Site", description: "A UNESCO World Heritage Site near La Paz, one of South America's oldest civilizations, over 1500 years old." }
      ]
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Valle de la Luna", items: [
      { question: "What are the opening hours of Valle de la Luna?", answer: "Valle de la Luna is open daily from 09:00 to 17:00. Afternoon visits are recommended so you can arrive before sunset to enjoy the best light and scenery." },
      { question: "Is there an entrance fee to visit Valle de la Luna?", answer: "Yes. The entrance fee for foreigners is about 15 Bolivianos. Prices may vary, so please confirm on-site." },
      { question: "How was Valle de la Luna formed?", answer: "The landscape of Moon Valley is mainly composed of clay, sandstone, and conglomerate. After millions of years of wind and water erosion, the unique rock formations we see today were created. The surface is strikingly similar to the Moon's surface, hence the name Moon Valley." },
      { question: "How do I get to Valle de la Luna?", answer: "Valle de la Luna is located in the southern district of La Paz. From downtown, you can take a taxi (about 20-30 minutes) or a minibus heading to Mallasa, get off near Moon Valley and walk about 10 minutes to the entrance." }
    ]},
    location: { title: "Map Location", address: "CWM4+3C4\nLa Paz\nBolivia", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important natural attraction in La Paz, please join us in caring for the environment and protecting this unique geological wonder. Keep the attraction clean and maintain this beautiful natural space together.", text: "© 2026 Valle de la Luna Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Valle de la Luna. We are not affiliated with the Bolivian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Bolivia Tourism - Moon Valley Official Page", url: "https://visitbolivia.produccion.gob.bo/lugar/21" },
      { name: "Bolivia National Tourism Portal", url: "https://boliviatravel.gob.bo/" },
      { name: "La Paz Municipal Government", url: "https://lapaz.bo/" },
      { name: "Bolivia Ministry of Tourism and Cultures", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Discover Bolivia Official Guide", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  es: {
    nav: { history: "Geología", architecture: "Características", monuments: "Formaciones", visiting: "Información", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: { tags: ["Maravilla Natural", "Parque Geológico", "Imperdible en La Paz"], tagline: "Bolivia · La Paz", title: "Valle de la Luna", subtitle: "Valle de la Luna · Paisaje Lunar · Maravilla Geológica", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia Geológica y Formación",
      intro: "El Valle de la Luna se encuentra en el distrito sur de La Paz, Bolivia. Este impresionante parque geológico cuenta con un paisaje formado por millones de años de erosión, presentando características superficiales sorprendentemente similares a las de la Luna.\n\n**Maravilla Geológica Única**: El nombre 'Valle de la Luna' proviene de la asombrosa similitud del paisaje con la superficie lunar. El terreno está compuesto principalmente por arcilla, arenisca y conglomerado, moldeados por la erosión eólica e hídrica durante largos períodos, formando las singulares formaciones rocosas, cañones y mini cañones que vemos hoy."
    },
    curiosities: {
      title: "Secretos Ocultos: Antiguas Leyendas Incas",
      content: "El Valle de la Luna no es solo una maravilla natural, sino que también está estrechamente relacionado con leyendas antiguas. Según la leyenda, este era un lugar donde se realizaban ceremonias misteriosas durante el Imperio Inca. En las leyendas locales aimara y quechua, se dice que estas extrañas formaciones rocosas son las huellas dejadas por los antiguos dioses.\n\nOtro secreto interesante: en ciertas áreas del Valle de la Luna, la estructura especial de las formaciones rocosas crea efectos de resonancia de sonido inusuales, que los lugareños llaman 'el susurro de la tierra'."
    },
    architecture: {
      title: "Características del Terreno y Estructura Geológica",
      intro: "El paisaje del Valle de la Luna fue formado por millones de años de erosión natural, presentando uno de los paisajes geológicos más únicos de la Tierra. Las formaciones rocosas, cañones y extrañas formas terrestres son como obras de arte cuidadosamente esculpidas por la naturaleza.",
      specs: {
        structure: { title: "Estructura Geológica", content: "Las formaciones rocosas en el Valle de la Luna están compuestas principalmente por arcilla, arenisca y conglomerado. Estas rocas sedimentarias se formaron en diferentes períodos geológicos y, después de un largo tiempo de meteorización y erosión, crearon el paisaje único que vemos hoy." },
        design: { title: "Características del Terreno", content: "Cientos de formaciones rocosas con diferentes formas están distribuidas por todo el parque: algunas como agujas, algunas como cúpulas, y algunas como cañones laberínticos. Estas formas terrestres son especialmente espectaculares al amanecer y al atardecer." },
        optics: { title: "Experiencia de Visualización", content: "El Valle de la Luna cuenta con senderos peatonales dedicados y miradores, permitiendo a los visitantes explorar este mágico paisaje de manera segura. Al atardecer, la luz del sol baña las formaciones rocosas en un tono rojo dorado: el mejor momento para la fotografía." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Valle de la Luna" },
          { label: "Ubicación", value: "Distrito Sur, La Paz, Bolivia" },
          { label: "Horario", value: "09:00 - 17:00" },
          { label: "Teléfono", value: "+591 78937547" },
          { label: "Tipo de Terreno", value: "Paisaje erosional, rocas sedimentarias" },
          { label: "Mejor Momento", value: "2 horas antes del atardecer" }
        ]
      }
    },
    monuments: {
      title: "Análisis de Maravillas Geológicas",
      intro: "El Valle de la Luna alberga numerosas maravillas geológicas impresionantes, cada una con su propia historia de formación única y valor de visualización.",
      items: [
        { name: "Formaciones Rocosas en Forma de Aguja", description: "Una de las vistas más espectaculares del parque, docenas de formaciones rocosas en forma de aguja se elevan majestuosamente, las más altas alcanzan varios metros. Estas agujas están protegidas por tapas de arenisca dura sobre arcilla blanda, creando singulares formas de 'sombrero'." },
        { name: "Mini Cañones", description: "Cañones mini serpenteantes recorren todo el parque, algunos solo tienen el ancho suficiente para que pase una persona. Estos cañones varían en profundidad y forma, son obras maestras de millones de años de erosión hídrica." }
      ]
    },
    contrast: {
      title: "El Valle a Través del Tiempo",
      intro: "Aunque el paisaje del Valle de la Luna se formó hace millones de años, la exploración y documentación humana del mismo abarca solo poco más de un siglo. A través del contraste de fotos antiguas y panoramas modernos, podemos sentir el encanto eterno de la magistral artesanía de la naturaleza.",
      before: "Exploración Temprana: Valle de la Luna",
      after: "Hoy: Valle de la Luna"
    },
    visiting: {
      title: "Planifica Tu Visita",
      intro: "El Valle de la Luna es un destino ideal para explorar el paisaje natural de La Paz. Para obtener la mejor experiencia, consulte la siguiente información práctica.",
      hours: { title: "Horario de Apertura", content: "09:00 - 17:00 (Todos los días)", note: "Llegue 2 horas antes del atardecer para la mejor luz." },
      price: { title: "Entrada", content: "Extranjeros: ~15 Bolivianos", note: "Los precios pueden variar; confirme en el lugar." },
      duration: { title: "Duración Sugerida", content: "1.5 a 2 horas", note: "Puede caminar por los senderos del parque, admirar las formaciones rocosas únicas y las vistas del atardecer." },
      tips: { title: "Consejos de Viaje", items: ["Zona de gran altitud: use protección solar y abríguese para los cambios de temperatura", "Use zapatos cómodos para caminar; algunas secciones tienen pendientes", "Traiga suficiente agua potable; no hay tiendas en el parque", "El atardecer es el mejor momento para la fotografía: llegue temprano", "Considere combinar con el cercano Valle de las Animas el mismo día"] }
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "✈️ Aeropuerto Int'l de La Paz (LPB) ➔ Valle de la Luna", content: "Para turistas internacionales, primero debe ir del aeropuerto en El Alto al centro de La Paz, y luego al Valle de la Luna.", options: [
        { name: "Taxi / Aplicación (Recomendado)", price: "Aprox. 40-60 Bolivianos", time: "Aprox. 30 minutos", steps: ["Busque un taxi oficial fuera de la sala de llegadas del aeropuerto o llame al +59178937547 para reservar", "Dígale al conductor que va al Valle de la Luna", "⚠️ Nota: El tráfico en La Paz es complejo; se recomienda usar una aplicación de transporte o reservar un vehículo"] }
      ]},
      publicTransport: {
        title: "🚌 Transporte Público",
        content: "Puede tomar transporte público desde el centro de La Paz al Valle de la Luna, pero requiere transbordo.",
        options: [
          {
            name: "Minibús",
            description: "Tome un minibús hacia Mallasa cerca de la Iglesia de San Francisco en el centro, bájese cerca del Valle de la Luna y camine.",
            steps: [
              "Busque un minibús hacia Mallasa cerca de la Iglesia de San Francisco en el centro",
              "Dígale al conductor que pare cerca del Valle de la Luna",
              "Después de bajarse, camine unos 10 minutos hasta la entrada"
            ]
          }
        ]
      },
      city: { title: "🚶 Desde el Centro de La Paz", content: "El Valle de la Luna se encuentra en el distrito sur de La Paz. Puede elegir varias opciones de transporte desde el centro de la ciudad. Se recomienda asignar medio día para visitar el Valle de la Luna junto con atracciones cercanas.", steps: ["Tome un taxi desde el centro, unos 20-30 minutos", "O tome un minibús hacia Mallasa", "Después de llegar, camine hacia el parque"] },
      tips: { title: "Consejos de Transporte", items: ["La Paz está a ~3600m de altitud: tenga cuidado con el mal de altura", "Usar aplicaciones de transporte en la ciudad es más seguro y conveniente", "Programe su visita por la tarde para disfrutar del atardecer", "Combine con el Valle de las Animas en el mismo viaje"] }
    },
    reviews: { 
      title: "Reseñas de Visitantes y Exploración Cercana", 
      subtitle: "Voces del Valle de la Luna: Testimonios Reales de Google Maps", 
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Valen la Pena Visitar",
      nearbyIntro: "Después de visitar el Valle de la Luna, puede visitar fácilmente las siguientes atracciones cercanas:",
      nearbyItems: [
        { name: "Valle de las Animas", description: "Otro paisaje geológico impresionante, no lejos del Valle de la Luna, con formaciones terrestres igualmente únicas y espectaculares." },
        { name: "Centro de La Paz", description: "Capital administrativa de Bolivia, hogar de la Iglesia de San Francisco, el Palacio Presidencial y un único sistema de transporte por teleférico." },
        { name: "Sitio Arqueológico de Tiwanaku", description: "Patrimonio de la Humanidad de la UNESCO cerca de La Paz, una de las civilizaciones más antiguas de Sudamérica, con más de 1500 años de antigüedad." }
      ]
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre el Valle de la Luna", items: [
      { question: "¿Cuál es el horario del Valle de la Luna?", answer: "El Valle de la Luna está abierto todos los días de 09:00 a 17:00. Se recomiendan las visitas por la tarde para que pueda llegar antes del atardecer y disfrutar de la mejor luz y paisaje." },
      { question: "¿Hay que pagar entrada para visitar el Valle de la Luna?", answer: "Sí. La entrada para extranjeros es de aproximadamente 15 Bolivianos. Los precios pueden variar, así que confirme en el lugar." },
      { question: "¿Cómo se formó el Valle de la Luna?", answer: "El paisaje del Valle de la Luna está compuesto principalmente por arcilla, arenisca y conglomerado. Después de millones de años de erosión eólica e hídrica, se crearon las formaciones rocosas únicas que vemos hoy. La superficie es sorprendentemente similar a la superficie de la Luna, de ahí el nombre Valle de la Luna." },
      { question: "¿Cómo llego al Valle de la Luna?", answer: "El Valle de la Luna se encuentra en el distrito sur de La Paz. Desde el centro puede tomar un taxi (unos 20-30 minutos) o un minibús hacia Mallasa, bajarse cerca del Valle de la Luna y caminar unos 10 minutos hasta la entrada." }
    ]},
    location: { title: "Ubicación", address: "CWM4+3C4\nLa Paz\nBolivia", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como atracción natural importante en La Paz, únase a nosotros para cuidar el medio ambiente y proteger esta única maravilla geológica. Mantenga la atracción limpia y conserve este hermoso espacio natural juntos.", text: "© 2026 Guía del Valle de la Luna · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de guía de terceros dedicado a compartir información precisa sobre el Valle de la Luna. No estamos afiliados con el gobierno boliviano o ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de guía de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Bolivia Turismo - Página Oficial del Valle de la Luna", url: "https://visitbolivia.produccion.gob.bo/lugar/21" },
      { name: "Portal Nacional de Turismo de Bolivia", url: "https://boliviatravel.gob.bo/" },
      { name: "Gobierno Municipal de La Paz", url: "https://lapaz.bo/" },
      { name: "Ministerio de Turismo y Culturas de Bolivia", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia Guía Oficial", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  qu: {
    nav: { history: "Ñawpaq", architecture: "Ruwasqa", monuments: "Rikuykuna", visiting: "Puriy", transportation: "Chaykamuy", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tags: ["Natural", "Geológico", "La Paz"], tagline: "Bolivia · La Paz", title: "Valle de la Luna", subtitle: "Killa Llaqta · Lunar Landscape · Geológico", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    history: {
      title: "Ñawpaq Kawsay",
      intro: "Valle de la Luna, La Paz, Bolivia. Killa Llaqta. Millions of years erosion. Unique landscape.\n\n**Geological wonder**: Moon surface similar. Clay, sandstone, conglomerate. Wind and water erosion."
    },
    curiosities: {
      title: "Pakasqa Yachay: Inca willakuy",
      content: "Inca legends. Aymara, Quechua willakuy. Special sound resonance. 'Pachamama rimay'."
    },
    architecture: {
      title: "Imayna ruwasqa",
      intro: "Valle de la Luna, millions of years. Unique landscape. Clay, sandstone.",
      specs: {
        structure: { title: "Geological", content: "Clay, sandstone, conglomerate. Millions of years." },
        design: { title: "Landform", content: "Hundreds rock formations. Spires, domes, canyons." },
        optics: { title: "Rikuy", content: "Walking paths. Viewpoints. Sunset best photography." }
      },
      plaque: {
        title: "Willakuykuna",
        items: [
          { label: "Suti", value: "Valle de la Luna" },
          { label: "Maypi", value: "La Paz, Bolivia" },
          { label: "Punchaw", value: "09:00 - 17:00" },
          { label: "Telefono", value: "+591 78937547" }
        ]
      }
    },
    monuments: {
      title: "Rikunapaq",
      intro: "Unique rock formations, canyons.",
      items: [
        { name: "Spire Rocks", description: "Tall spire rock formations. Unique shapes. Sandstone caps." },
        { name: "Mini Canyons", description: "Winding canyons. Water erosion. Millions of years." }
      ]
    },
    contrast: {
      title: "Ñawpaq vs Kunan",
      intro: "Valle de la Luna ñawpaq vs kunan.",
      before: "Ñawpaq",
      after: "Kunan"
    },
    visiting: {
      title: "Puriy",
      intro: "Valle de la Luna purinapaq allin.",
      hours: { title: "Punchaw", content: "09:00 - 17:00", note: "Sunset before 2 hours." },
      price: { title: "Qullqi", content: "~15 Bolivianos", note: "Foreigners." },
      duration: { title: "Hayk'aq", content: "1.5 - 2 hours", note: "Walk, enjoy." },
      tips: { title: "Yachay", items: ["High altitude 3600m", "Comfortable shoes", "Water", "Sunset best", "Valle de las Animas"] }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "La Paz-manta", content: "Airport to Moon Valley.", options: [
        { name: "Taxi (Allin)", price: "40-60 Bolivianos", time: "30 min", steps: ["Airport taxi", "Valle de la Luna"] }
      ]},
      publicTransport: {
        title: "Minibus",
        content: "Minibus to Mallasa.",
        options: [
          {
            name: "Minibus Mallasa",
            description: "San Francisco near. Minibus Mallasa.",
            steps: [
              "San Francisco near minibus",
              "Mallasa direction",
              "Walk 10 min"
            ]
          }
        ]
      },
      city: { title: "La Paz Centro", content: "Downtown to Moon Valley.", steps: ["Taxi 20-30 min", "Minibus Mallasa"] },
      tips: { title: "Yachay", items: ["3600m altitude", "Ride app safe", "Afternoon visit", "Sunset"] }
    },
    reviews: { 
      title: "Niykuna", 
      subtitle: "Valle de la Luna niykuna", 
      viewMore: "Astawan niykuna",
      nearbyTitle: "Huk kitikuna",
      nearbyIntro: "Huk.attractions:",
      nearbyItems: [
        { name: "Valle de las Animas", description: "Nearby geological park." },
        { name: "La Paz Centro", description: "Bolivia capital. Historic." }
      ]
    },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "09:00 - 17:00. Sunset best." },
      { question: "Qullqi paganan chá?", answer: "Yes. ~15 Bolivianos." },
      { question: "Imaynam paqarimuptan?", answer: "Millions years erosion. Clay, sandstone." }
    ]},
    location: { title: "Maypipas", address: "CWM4+3C4\nLa Paz\nBolivia", openMaps: "Google Maps" },
    footer: { callToAction: "Valle de la Luna cuiday.", text: "© 2026 Valle de la Luna.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "Bolivia Tourism", url: "https://visitbolivia.produccion.gob.bo/lugar/21" },
      { name: "Bolivia Travel", url: "https://boliviatravel.gob.bo/" },
      { name: "La Paz Government", url: "https://lapaz.bo/" },
      { name: "Turismo y Culturas", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  }
};
