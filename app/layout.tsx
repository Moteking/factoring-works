import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://factoring-guide.vercel.app'),
  title: {
    default: "ファクタリング会社おすすめ比較【2026年最新】手数料・入金スピードで徹底比較 | ファクタリングガイド",
    template: "%s | ファクタリングガイド"
  },
  description: "ファクタリング会社9社を手数料・入金スピード・審査通過率で徹底比較。最短2時間で資金調達できるファクタリングサービスをランキング形式で紹介。法人・個人事業主向けの即日ファクタリング情報が満載。",
  keywords: [
    "ファクタリング",
    "ファクタリング会社",
    "資金調達",
    "売掛金",
    "即日入金",
    "手数料比較",
    "2社間ファクタリング",
    "3社間ファクタリング",
    "個人事業主",
    "フリーランス",
    "審査",
    "入金スピード",
    "おすすめ",
    "比較",
    "ランキング"
  ],
  authors: [{ name: "ファクタリングガイド編集部" }],
  creator: "ファクタリングガイド",
  publisher: "ファクタリングガイド",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://factoring-guide.vercel.app",
    siteName: "ファクタリングガイド",
    title: "ファクタリング会社おすすめ比較【2026年最新】手数料・入金スピードで徹底比較",
    description: "ファクタリング会社9社を手数料・入金スピード・審査通過率で徹底比較。最短2時間で資金調達できるサービスをランキング形式で紹介。",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ファクタリングガイド - おすすめ比較ランキング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ファクタリング会社おすすめ比較【2026年最新】",
    description: "手数料・入金スピード・審査通過率で徹底比較。最短2時間で資金調達。",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://factoring-guide.vercel.app",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ファクタリングガイド",
  "description": "ファクタリング会社の比較・ランキングサイト",
  "url": "https://factoring-guide.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://factoring-guide.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ファクタリングガイド",
    "url": "https://kaaay.co.jp/about"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://factoring-guide.vercel.app" />
      </head>
      <body className={`${notoSansJP.className} bg-slate-50 text-slate-800`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
