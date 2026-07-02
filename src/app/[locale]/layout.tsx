import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "valledelalunabolivia.com"}`;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: "es", ogLocale: "es_BO" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
  qu: { htmlLang: "qu", ogLocale: "qu_BO" },
};

// 生成绝对 URL 的 hreflang 映射
function getHreflangAlternates(baseUrl: string) {
  return {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    qu: `${baseUrl}/qu`,
    "x-default": `${baseUrl}/es`,  // 默认回退页面设为西班牙文版
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === "es"
          ? "Valle de la Luna — La Paz, Bolivia"
          : locale === "zh"
          ? "月亮谷 — 玻利维亚拉巴斯"
          : locale === "qu"
          ? "Killa Llaqta — La Paz, Bolivia"
          : "Valle de la Luna — La Paz, Bolivia",
      template:
        locale === "es"
          ? "%s | Valle de la Luna"
          : locale === "zh"
          ? "%s | 月亮谷"
          : locale === "qu"
          ? "%s | Killa Llaqta"
          : "%s | Valle de la Luna",
    },
    description:
      locale === "es"
        ? "Guía de viaje al Valle de la Luna en La Paz, Bolivia. Paisaje lunar único con formaciones rocosas impresionantes."
        : locale === "zh"
        ? "月亮谷旅行指南——探索玻利维亚拉巴斯的独特月球地貌，欣赏令人叹为观止的岩石景观。"
        : locale === "qu"
        ? "Valle de la Luna rikuy, La Paz, Bolivia. Unique lunar landscape."
        : "A travel guide to Valle de la Luna in La Paz, Bolivia. Unique moon-like landscape with breathtaking rock formations.",
    keywords: [
      "Valle de la Luna",
      "Moon Valley",
      "La Paz tourism",
      "Bolivia tourism",
      "Geological park",
      "La Paz attractions",
      "月亮谷",
      "拉巴斯旅游",
    ],
    authors: [{ name: "Valle de la Luna Travel Guide" }],
    creator: "Valle de la Luna Travel Guide",
    publisher: "Valle de la Luna Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "es_BO",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter(
          (l) => l !== (localeConfig[locale]?.ogLocale || "es_BO")
        ),
      url: `${baseUrl}/${locale}`,
      title:
        locale === "es"
          ? "Valle de la Luna — La Paz, Bolivia"
          : locale === "zh"
          ? "月亮谷 — 玻利维亚拉巴斯"
          : locale === "qu"
          ? "Killa Llaqta — La Paz, Bolivia"
          : "Valle de la Luna — La Paz, Bolivia",
      description:
        locale === "es"
          ? "Guía de viaje al Valle de la Luna en La Paz, Bolivia. Paisaje lunar único."
          : locale === "zh"
          ? "月亮谷旅行指南——探索玻利维亚拉巴斯的月球地貌。"
          : locale === "qu"
          ? "Valle de la Luna rikuy, La Paz."
          : "A travel guide to Valle de la Luna in La Paz, Bolivia.",
      siteName:
        locale === "es"
          ? "Valle de la Luna Guía de Viaje"
          : locale === "zh"
          ? "月亮谷旅行指南"
          : locale === "qu"
          ? "Killa Llaqta rikuy"
          : "Valle de la Luna Travel Guide",
      images: [
        {
          url: "/gallery/valle-de-la-luna (1).jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Valle de la Luna - La Paz, Bolivia"
              : locale === "zh"
              ? "月亮谷 - 拉巴斯"
              : locale === "qu"
              ? "Killa Llaqta - La Paz, Bolivia"
              : "Valle de la Luna - La Paz, Bolivia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "es"
          ? "Valle de la Luna — La Paz, Bolivia"
          : locale === "zh"
          ? "月亮谷 — 玻利维亚拉巴斯"
          : locale === "qu"
          ? "Killa Llaqta — La Paz, Bolivia"
          : "Valle de la Luna — La Paz, Bolivia",
      description:
        locale === "es"
          ? "Guía de viaje al Valle de la Luna en La Paz, Bolivia."
          : locale === "zh"
          ? "月亮谷旅行指南——探索玻利维亚拉巴斯。"
          : locale === "qu"
          ? "Valle de la Luna rikuy, La Paz."
          : "A travel guide to Valle de la Luna in La Paz, Bolivia.",
      images: ["/gallery/valle-de-la-luna (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangs,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "zh" },
    { locale: "qu" },
  ];
}

import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = localeConfig[locale]?.htmlLang || "es";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
