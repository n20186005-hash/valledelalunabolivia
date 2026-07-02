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
      intro: `月亮谷（Valle de la Luna）位于玻利维亚拉巴斯市南区，是一处令人叹为观止的地质公园。这里的地貌由数百万年的侵蚀作用形成，呈现出与月球表面极为相似的地貌特征。\n\n**阿姆斯特朗的命名**：月亮谷现在的名字，源于一个有趣的史实。1969年，第一个登上月球的宇航员尼尔·阿姆斯特朗（Neil Armstrong）在访问拉巴斯时，在附近的 Mallasilla 高尔夫球场打球，看到这片地貌后，惊叹这里与他刚去过的月球表面极为相似。从此，"月亮谷"的名字声名鹊起。\n\n**地质形成**：这是一种典型的"恶地地貌"（Badlands）。这里的地层主要由粘土、砂岩和砾岩构成，原本是一座古老的山脉。由于该地区的土壤主要由极其脆弱的粘土构成，缺乏植被保护，在拉巴斯集中的雨季暴雨冲刷和强风的双重作用下，像"融化的冰淇淋"一样被侵蚀出了现在的石林、尖塔和沟壑。`
    },
    curiosities: {
      title: "隐藏的秘密：文化意义与命名轶事",
      content: `**阿姆斯特朗的惊叹**：如前所述，1969年尼尔·阿姆斯特朗的访问为这里带来了"月亮谷"的名字。这位刚从月球回来的宇航员，看到这片地貌时发出的惊叹，成为了这个景点最著名的推广故事。\n\n**当地文化的认知**：在艾马拉（Aymara）文化中，奇形怪状的岩石常被视为灵魂的居所（Achachilas，意为祖先的灵魂）。这也是为什么附近的另一个类似景点被称为"灵魂谷"（Valle de las Animas）。对当地原住民而言，这些经自然雕琢的岩层不仅是地质奇观，更是连接人间与灵界的神圣空间。\n\n**生态保护提示**：月亮谷的粘土岩层极其脆弱，请游客务必在指定的木栈道或石板路上行走，绝对不要攀爬或触摸岩柱，以免造成不可逆的破坏。请带走您的所有垃圾，尊重这片历经千万年形成的自然奇观。`
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
      title: "实用游览指南",
      intro: "月亮谷是探索拉巴斯自然风光的理想去处。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "09:00 - 17:00（每天）", note: "建议日落前 2 小时到达，可欣赏最佳光线。" },
      price: { title: "门票信息", content: "外国人：15 玻利维亚诺 | 本国公民：3 玻利维亚诺", note: "价格可能会有变动，建议现场确认。差异化定价体现对本地社区的支持。" },
      duration: { title: "游览路线与时长", content: "短线（Punto del Diablo / 恶魔角）：约 15 分钟，适合体力有限的游客，可俯瞰全景。\n长线：约 45 分钟，深入峡谷内部，可近距离穿梭在迷宫般的尖塔中。", note: "两条路线均可欣赏到月亮谷的精华部分，请根据自身体力选择。" },
      tips: { title: "游览贴士与注意事项", items: [
        "⚠️ **无障碍提示**：由于路面是天然土路且有狭窄的台阶，月亮谷**不适合轮椅和婴儿车通行**，请酌情考虑",
        "高原地区注意防晒和保暖，昼夜温差大",
        "穿着舒适的步行鞋，部分路段有一定坡度",
        "携带足够饮用水，园区内无商店",
        "日落时分是最佳摄影时机，请提前到达",
        "建议与附近的灵魂谷（Valle de las Animas）安排在同一天游览",
        "🌱 **环保倡议**：请在指定木栈道或石板路上行走，切勿攀爬或触摸岩柱，带走所有垃圾，共同保护这片历经千万年形成的自然奇观"
      ] }
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 拉巴斯国际机场 (LPB) ➔ 月亮谷", content: "El Alto 国际机场位于海拔 4000+ 米的山顶，距离位于谷底南区的月亮谷较远。", options: [
        { name: "出租车/网约车（推荐）", price: "约 80-120 玻利维亚诺", time: "1-1.5 小时", steps: ["在机场到达大厅外寻找官方出租车柜台或使用 Uber/inDrive 等网约车软件", "告知司机前往 Valle de la Luna（月亮谷）", "⚠️ 注意：拉巴斯交通极其拥堵，且两地海拔差异大，请预留充足时间"] }
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
      city: { title: "🚶 从拉巴斯市中心出发", content: "月亮谷位于拉巴斯市南区（Mallasa），从市中心出发可以选择多种交通方式。建议预留半天时间，将月亮谷与附近景点一并游览。", steps: ["从市中心乘坐出租车约 20-30 分钟，费用约 40-60 玻利维亚诺", "或乘坐小巴到 Mallasa 方向，费用更经济", "到达后步行进入园区"] },
      tips: { title: "交通与海拔小贴士", items: [
        "🌡️ **海拔优势**：月亮谷海拔约 3200-3300 米，比拉巴斯市中心（3600+ 米）低约 300-400 米，气候更加温暖宜人，氧气也相对充足，是缓解高原反应的绝佳去处",
        "市区内建议使用打车软件（Uber/inDrive）更安全便捷",
        "参观时间建议安排在下午，可欣赏日落美景",
        "可与 Valle de las Animas 安排在同一行程",
        "拉巴斯交通拥堵严重，请预留充足的出行时间"
      ] }
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
      { question: "月亮谷的名字是怎么来的？", answer: "月亮谷的名字源于 1969 年第一个登上月球的宇航员尼尔·阿姆斯特朗（Neil Armstrong）的访问。他在附近的 Mallasilla 高尔夫球场打球时，看到这片地貌后惊叹这里与月球表面极为相似，从此'月亮谷'的名字声名鹊起。" },
      { question: "月亮谷的开放时间和门票价格？", answer: "开放时间：每天 09:00 - 17:00。门票：外国人 15 玻利维亚诺，本国公民 3 玻利维亚诺。差异化定价体现对本地社区的支持。" },
      { question: "游览月亮谷需要多长时间？有哪些路线？", answer: "短线（Punto del Diablo / 恶魔角）：约 15 分钟，适合体力有限的游客，可俯瞰全景。长线：约 45 分钟，深入峡谷内部，可近距离穿梭在迷宫般的尖塔中。建议根据自身体力选择。" },
      { question: "月亮谷的海拔是多少？会有高原反应吗？", answer: "月亮谷海拔约 3200-3300 米，比拉巴斯市中心（3600+ 米）低约 300-400 米。气候更加温暖宜人，氧气也相对充足，是缓解高原反应的绝佳去处。" },
      { question: "参观月亮谷有什么注意事项？", answer: "⚠️ 由于路面是天然土路且有狭窄的台阶，月亮谷不适合轮椅和婴儿车通行。请在指定木栈道或石板路上行走，切勿攀爬或触摸岩柱。请带走所有垃圾，保护这片自然奇观。" }
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
      intro: "Valle de la Luna (Moon Valley) is located in the southern district (Mallasa) of La Paz, Bolivia. This breathtaking geological park features a landscape formed by millions of years of erosion, presenting surface features strikingly similar to the Moon.\n\n**Neil Armstrong's Naming Story**: The current name 'Moon Valley' originated from a fascinating historical event. In 1969, Neil Armstrong, the first person to walk on the Moon, visited La Paz. While playing golf at the nearby Mallasilla golf course, he saw this landscape and exclaimed that it looked remarkably similar to the lunar surface he had just visited. Since then, the name 'Valle de la Luna' has become famous worldwide.\n\n**Geological Formation**: This is a classic example of 'Badlands' topography. The terrain was originally an ancient mountain range, mainly composed of extremely fragile clay lacking vegetation protection. Under the dual forces of concentrated rainfall during La Paz's rainy season and strong winds, the clay eroded like 'melting ice cream,' creating the current stone forests, spires, and gullies."
    },
    curiosities: {
      title: "Hidden Secrets: Cultural Significance & Naming Story",
      content: "**Neil Armstrong's Exclamation**: As mentioned above, Neil Armstrong's visit in 1969 brought the name 'Moon Valley' to worldwide fame. The astronaut's exclamation upon seeing this landscape became the most famous promotional story for this attraction.\n\n**Local Cultural Perception**: In Aymara culture, strangely shaped rocks are often regarded as dwellings of souls (Achachilas, meaning ancestors' spirits). This is also why another similar nearby attraction is called 'Valle de las Animas' (Spirit Valley). For indigenous locals, these naturally sculpted rock formations are not only geological wonders but also sacred spaces connecting the human world and the spiritual realm.\n\n**Conservation Appeal**: The clay rock formations in Moon Valley are extremely fragile. Visitors must walk only on designated wooden walkways or stone paths. Absolutely do not climb or touch the rock pillars, as this may cause irreversible damage. Please take away all your trash and respect this natural wonder formed over millions of years."
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
      price: { title: "Entrance Fee", content: "Foreigners: 15 Bolivianos | Bolivian Citizens: 3 Bolivianos", note: "Prices may vary; please confirm on-site. Differentiated pricing reflects support for the local community." },
      duration: { title: "Trails & Suggested Duration", content: "**Short Trail** (Punto del Diablo / Devil's Horn): ~15 minutes, suitable for visitors with limited mobility, offers panoramic views.\n**Long Trail**: ~45 minutes, goes deep into the canyon, allowing close exploration among labyrinthine spires.", note: "Both trails offer highlights of Moon Valley. Please choose according to your physical condition." },
      tips: { title: "Travel Tips & Important Notes", items: [
        "⚠️ **Accessibility Warning**: Due to natural dirt paths with narrow steps, Moon Valley is **NOT suitable for wheelchairs or strollers**. Please consider this before visiting",
        "High altitude area—use sun protection and dress warmly for temperature swings",
        "Wear comfortable walking shoes; some sections have slopes",
        "Bring enough drinking water; there are no shops in the park",
        "Sunset is the best time for photography—arrive early",
        "Consider combining with nearby Valle de las Animas on the same day",
        "🌱 **Conservation Appeal**: Please walk only on designated wooden walkways or stone paths. Do NOT climb or touch rock pillars. Take away all trash. Help protect this natural wonder formed over millions of years"
      ] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ La Paz Int'l Airport (LPB) ➔ Moon Valley", content: "El Alto International Airport is located on a mountain top at 4000+ meters elevation, quite far from Moon Valley which is located in the southern valley (Mallasa).", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 80-120 Bolivianos", time: "1-1.5 hours", steps: ["Find official taxi counters at the airport arrivals hall or use ride-hailing apps like Uber/inDrive", "Tell the driver you are going to Valle de la Luna (Moon Valley)", "⚠️ Note: La Paz traffic is extremely congested, and there's a large elevation difference between the airport and Moon Valley. Please allow ample time"] }
      ]},
      publicTransport: {
        title: "🚌 Public Transport",
        content: "You can take public transport from downtown La Paz to Moon Valley, but it requires finding the right minibus.",
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
      city: { title: "🚶 From Downtown La Paz", content: "Valle de la Luna is located in the southern district (Mallasa) of La Paz. You can choose various transportation options from the city center. It is recommended to allocate half a day to visit Moon Valley together with nearby attractions.", steps: ["Take a taxi from downtown, about 20-30 minutes, costing about 40-60 Bolivianos", "Or take a minibus heading to Mallasa, which is more economical", "After arrival, walk into the park"] },
      tips: { title: "Transportation & Altitude Tips", items: [
        "🌡️ **Altitude Advantage**: Moon Valley is at ~3200-3300m elevation, about 300-400m LOWER than downtown La Paz (3600m+). The climate is warmer and more pleasant, with relatively more oxygen, making it an excellent place to alleviate altitude sickness",
        "Using ride-hailing apps (Uber/inDrive) in the city is safer and more convenient",
        "Schedule your visit in the afternoon to enjoy the sunset",
        "Combine with Valle de las Animas in the same trip",
        "La Paz traffic is heavily congested—please allow ample travel time"
      ] }
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
      { question: "How did Valle de la Luna get its name?", answer: "The name 'Valle de la Luna' originated from Neil Armstrong's visit in 1969. After walking on the Moon, Armstrong visited La Paz and played golf at the nearby Mallasilla golf course. Seeing this landscape, he exclaimed that it looked remarkably similar to the lunar surface. Since then, the name 'Moon Valley' has become famous worldwide." },
      { question: "What are the opening hours and entrance fees?", answer: "Opening hours: Daily 09:00 - 17:00. Entrance fee: Foreigners 15 Bolivianos, Bolivian citizens 3 Bolivianos. Differentiated pricing reflects support for the local community." },
      { question: "How long does it take to visit Valle de la Luna? What trails are available?", answer: "Short Trail (Punto del Diablo / Devil's Horn): ~15 minutes, suitable for visitors with limited mobility, offers panoramic views. Long Trail: ~45 minutes, goes deep into the canyon, allowing close exploration among labyrinthine spires. Please choose according to your physical condition." },
      { question: "What is the altitude of Moon Valley? Will I have altitude sickness?", answer: "Moon Valley is at ~3200-3300m elevation, about 300-400m LOWER than downtown La Paz (3600m+). The climate is warmer and more pleasant, with relatively more oxygen, making it an excellent place to alleviate altitude sickness." },
      { question: "What are the important notes for visiting Moon Valley?", answer: "⚠️ Accessibility Warning: Due to natural dirt paths with narrow steps, Moon Valley is NOT suitable for wheelchairs or strollers. Please walk only on designated wooden walkways or stone paths. Do NOT climb or touch rock pillars. Take away all trash. Help protect this natural wonder." }
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
      intro: "El Valle de la Luna se encuentra en el distrito sur (Mallasa) de La Paz, Bolivia. Este impresionante parque geológico cuenta con un paisaje formado por millones de años de erosión, presentando características superficiales sorprendentemente similares a las de la Luna.\n\n**La Historia del Nombramiento por Armstrong**: El nombre actual 'Valle de la Luna' se originó a partir de un fascinante evento histórico. En 1969, Neil Armstrong, la primera persona en caminar sobre la Luna, visitó La Paz. Mientras jugaba golf en el cercano campo de golf de Mallasilla, vio este paisaje y exclamó que se parecía increíblemente a la superficie lunar que acababa de visitar. Desde entonces, el nombre 'Valle de la Luna' se ha hecho famoso mundialmente.\n\n**Formación Geológica**: Este es un ejemplo clásico de topografía de 'Badlands' (tierras baldías). El terreno fue originalmente una antigua cadena montañosa, compuesta principalmente por arcilla extremadamente frágil que carece de protección vegetal. Bajo la acción dual de las lluvias concentradas durante la temporada de lluvias de La Paz y los fuertes vientos, la arcilla se erosionó como 'helado derritiéndose', creando los actuales bosques de piedra, agujas y barrancos."
    },
    curiosities: {
      title: "Secretos Ocultos: Significado Cultural e Historia del Nombre",
      content: "**La Exclamación de Armstrong**: Como se mencionó anteriormente, la visita de Neil Armstrong en 1969 trajo fama mundial al nombre 'Valle de la Luna'. La exclamación del astronauta al ver este paisaje se convirtió en la historia promocional más famosa de esta atracción.\n\n**Percepción Cultural Local**: En la cultura aimara, las rocas de formas extrañas a menudo se consideran moradas de almas (Achachilas, que significa espíritus de los antepasados). Esta es también la razón por la que otra atracción similar cercana se llama 'Valle de las Animas'. Para los lugareños indígenas, estas formaciones rocosas esculpidas por la naturaleza no son solo maravillas geológicas, sino también espacios sagrados que conectan el mundo humano con el reino espiritual.\n\n**Llamado a la Conservación**: Las formaciones rocosas de arcilla en el Valle de la Luna son extremadamente frágiles. Los visitantes deben caminar solo por los pasarelas de madera designadas o caminos de piedra. Absolutamente NO se debe escalar ni tocar los pilares rocosos, ya que esto puede causar daños irreversibles. Por favor, lleve consigo toda su basura y respete esta maravilla natural formada a lo largo de millones de años."
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
      price: { title: "Entrada", content: "Extranjeros: 15 Bolivianos | Ciudadanos Bolivianos: 3 Bolivianos", note: "Los precios pueden variar; confirme en el lugar. La fijación de precios diferenciada refleja el apoyo a la comunidad local." },
      duration: { title: "Senderos y Duración Sugerida", content: "**Sendero Corto** (Punto del Diablo / Cuerno del Diablo): ~15 minutos, adecuado para visitantes con movilidad limitada, ofrece vistas panorámicas.\n**Sendero Largo**: ~45 minutos, se adentra en el cañón, permitiendo la exploración cercana entre agujas laberínticas.", note: "Ambos senderos ofrecen los aspectos más destacados del Valle de la Luna. Por favor, elija según su condición física." },
      tips: { title: "Consejos de Viaje y Notas Importantes", items: [
        "⚠️ **Advertencia de Accesibilidad**: Debido a que los caminos son de tierra natural con escalones estrechos, el Valle de la Luna **NO es adecuado para sillas de ruedas o cochecitos de bebé**. Por favor, considere esto antes de visitar",
        "Zona de gran altitud: use protección solar y abríguese para los cambios de temperatura",
        "Use zapatos cómodos para caminar; algunas secciones tienen pendientes",
        "Traiga suficiente agua potable; no hay tiendas en el parque",
        "El atardecer es el mejor momento para la fotografía: llegue temprano",
        "Considere combinar con el cercano Valle de las Animas el mismo día",
        "🌱 **Llamado a la Conservación**: Por favor, camine solo por los pasarelas de madera designadas o caminos de piedra. NO escalar ni tocar los pilares rocosos. Lleve consigo toda su basura. Ayude a proteger esta maravilla natural formada a lo largo de millones de años"
      ] }
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "✈️ Aeropuerto Int'l de La Paz (LPB) ➔ Valle de la Luna", content: "El Aeropuerto Internacional de El Alto está ubicado en la cima de una montaña a 4000+ metros de altitud, bastante lejos del Valle de la Luna que se encuentra en el valle sur (Mallasa).", options: [
        { name: "Taxi / Aplicación (Recomendado)", price: "Aprox. 80-120 Bolivianos", time: "1-1.5 horas", steps: ["Busque mostradores de taxis oficiales en la sala de llegadas del aeropuerto o use aplicaciones de transporte como Uber/inDrive", "Dígale al conductor que va al Valle de la Luna (Moon Valley)", "⚠️ Nota: El tráfico en La Paz es extremadamente congestionado, y hay una gran diferencia de altitud entre el aeropuerto y el Valle de la Luna. Por favor, permita tiempo suficiente"] }
      ]},
      publicTransport: {
        title: "🚌 Transporte Público",
        content: "Puede tomar transporte público desde el centro de La Paz al Valle de la Luna, pero requiere encontrar el minibús correcto.",
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
      city: { title: "🚶 Desde el Centro de La Paz", content: "El Valle de la Luna se encuentra en el distrito sur (Mallasa) de La Paz. Puede elegir varias opciones de transporte desde el centro de la ciudad. Se recomienda asignar medio día para visitar el Valle de la Luna junto con atracciones cercanas.", steps: ["Tome un taxi desde el centro, unos 20-30 minutos, costando aproximadamente 40-60 Bolivianos", "O tome un minibús hacia Mallasa, que es más económico", "Después de llegar, camine hacia el parque"] },
      tips: { title: "Consejos de Transporte y Altitud", items: [
        "🌡️ **Ventaja de Altitud**: El Valle de la Luna está a ~3200-3300m de altitud, aproximadamente 300-400m MÁS BAJO que el centro de La Paz (3600m+). El clima es más cálido y agradable, con relaticamente más oxígeno, lo que lo convierte en un excelente lugar para aliviar el mal de altura",
        "Usar aplicaciones de transporte (Uber/inDrive) en la ciudad es más seguro y conveniente",
        "Programe su visita por la tarde para disfrutar del atardecer",
        "Combine con el Valle de las Animas en el mismo viaje",
        "El tráfico en La Paz está muy congestionado — por favor, permita tiempo de viaje suficiente"
      ] }
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
      { question: "¿Cómo obtuvo el Valle de la Luna su nombre?", answer: "El nombre 'Valle de la Luna' se originó a partir de la visita de Neil Armstrong en 1969. Después de caminar sobre la Luna, Armstrong visitó La Paz y jugó golf en el cercano campo de golf de Mallasilla. Al ver este paisaje, exclamó que se parecía increíblemente a la superficie lunar. Desde entonces, el nombre 'Valle de la Luna' se ha hecho famoso mundialmente." },
      { question: "¿Cuál es el horario de apertura y las entradas?", answer: "Horario de apertura: Todos los días 09:00 - 17:00. Entrada: Extranjeros 15 Bolivianos, Ciudadanos Bolivianos 3 Bolivianos. La fijación de precios diferenciada refleja el apoyo a la comunidad local." },
      { question: "¿Cuánto tiempo se necesita para visitar el Valle de la Luna? ¿Qué senderos hay?", answer: "Sendero Corto (Punto del Diablo / Cuerno del Diablo): ~15 minutos, adecuado para visitantes con movilidad limitada, ofrece vistas panorámicas. Sendero Largo: ~45 minutos, se adentra en el cañón, permitiendo la exploración cercana entre agujas laberínticas. Por favor, elija según su condición física." },
      { question: "¿Cuál es la altitud del Valle de la Luna? ¿Tendré mal de altura?", answer: "El Valle de la Luna está a ~3200-3300m de altitud, aproximadamente 300-400m MÁS BAJO que el centro de La Paz (3600m+). El clima es más cálido y agradable, con relaticamente más oxígeno, lo que lo convierte en un excelente lugar para aliviar el mal de altura." },
      { question: "¿Cuáles son las notas importantes para visitar el Valle de la Luna?", answer: "⚠️ Advertencia de Accesibilidad: Debido a que los caminos son de tierra natural con escalones estrechos, el Valle de la Luna NO es adecuado para sillas de ruedas o cochecitos de bebé. Por favor, camine solo por los pasarelas de madera designadas o caminos de piedra. NO escalar ni tocar los pilares rocosos. Lleve consigo toda su basura. Ayude a proteger esta maravilla natural." }
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
      intro: "Valle de la Luna, La Paz, Bolivia. Killa Llaqta. Millions of years erosion. Unique landscape.\n\n**Neil Armstrong nisqan**: 1969 watapi, Neil Armstrong (Moon-man) La Paz-ta purin. Mallasilla golf-pi, kay llacta-ta rikuspan, 'Moon- hina' nispa. Chaymanta 'Valle de la Luna' suticha riqsisqa.\n\n**Geological wonder**: Badlands topography. Clay, sandstone, conglomerate. Rain, wind erosion. Like melting ice cream."
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
      price: { title: "Qullqi", content: "Foreigners: 15 Bs | Bolivians: 3 Bs", note: "Different price." },
      duration: { title: "Hayk'aq", content: "Short trail: 15 min. Long trail: 45 min.", note: "Short: panoramic. Long: deep canyon." },
      tips: { title: "Yachay", items: ["⚠️ NOT for wheelchairs/strollers", "Comfortable shoes", "Water", "Sunset best", "Valle de las Animas", "🌱 Don't climb rocks!"] }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "La Paz-manta", content: "El Alto airport (4000m) to Moon Valley (3200m).", options: [
        { name: "Taxi (Allin)", price: "80-120 Bolivianos", time: "1-1.5 hours", steps: ["Airport taxi counter", "Uber/inDrive app", "Valle de la Luna"] }
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
      city: { title: "La Paz Centro", content: "Downtown to Moon Valley (40-60 Bs, 20-30 min).", steps: ["Taxi 20-30 min", "Minibus Mallasa (cheaper)"] },
      tips: { title: "Yachay", items: ["Moon Valley: 3200-3300m (LOWER than La Paz center)", "Less altitude sickness here!", "Ride app safe", "Afternoon visit", "Sunset"] }
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
