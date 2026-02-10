import { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ComparisonTable from "@/components/ComparisonTable";
import servicesData from "@/data/services.json";
import columnsData from "@/data/columns.json";

export const metadata: Metadata = {
  title: "ファクタリング会社おすすめ比較【2026年最新】手数料・入金スピードで徹底比較",
  description: "ファクタリング会社9社を手数料・入金スピード・審査通過率で徹底比較。最短2時間で資金調達できるファクタリングサービスをランキング形式で紹介。法人・個人事業主向けの即日ファクタリング情報が満載。2社間・3社間ファクタリングの違いや選び方も解説。",
  keywords: "ファクタリング おすすめ,ファクタリング 比較,ファクタリング ランキング,ファクタリング 即日,ファクタリング 手数料,ファクタリング 個人事業主,資金調達 即日,売掛金 現金化",
  alternates: {
    canonical: "https://factoring-guide.vercel.app",
  },
  openGraph: {
    title: "ファクタリング会社おすすめ比較【2026年最新】手数料・入金スピードで徹底比較",
    description: "最短2時間で資金調達。手数料1%〜の優良ファクタリング会社を厳選紹介。",
    url: "https://factoring-guide.vercel.app",
    type: "website",
  },
};

export default function Home() {
  // 入金スピードでソート（speedMinutesの昇順）
  const topServices = [...servicesData]
    .sort((a, b) => a.speedMinutes - b.speedMinutes)
    .slice(0, 3);

  const latestColumns = columnsData.slice(0, 3);

  // 構造化データ
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "おすすめファクタリング会社TOP3",
    "itemListElement": topServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "FinancialService",
        "name": service.name,
        "description": service.description,
        "url": `https://factoring-guide.vercel.app/services/${service.slug}`,
      }
    }))
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ファクタリングとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ファクタリングとは、企業が保有する売掛金（売掛債権）をファクタリング会社に売却し、支払期日前に現金化する資金調達方法です。最短2時間で入金可能で、借入ではないため負債に計上されません。"
        }
      },
      {
        "@type": "Question",
        "name": "ファクタリングの手数料相場はいくらですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2社間ファクタリングは10%〜20%、3社間ファクタリングは1%〜9%が相場です。売掛先の信用度や金額により変動します。当サイトでは手数料1%〜の優良サービスを紹介しています。"
        }
      },
      {
        "@type": "Question",
        "name": "個人事業主でもファクタリングは利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、利用できます。ペイトナーやラボルなど、個人事業主・フリーランス向けのファクタリングサービスがあります。少額から対応可能で、最短10分で入金されるサービスもあります。"
        }
      },
      {
        "@type": "Question",
        "name": "ファクタリングの審査は厳しいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "銀行融資に比べて審査は緩めです。利用企業の信用よりも、売掛先（取引先）の信用が重視されます。必要書類は請求書と通帳コピーの2点のみのサービスもあります。"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              最短2時間で資金調達。<br />
              あなたに最適なファクタリング会社が見つかる
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              手数料・入金スピード・対応額を徹底比較｜2026年最新版
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#ranking"
                className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition text-lg"
              >
                おすすめランキングを見る
              </a>
              <a
                href="#comparison"
                className="bg-white hover:bg-slate-100 text-primary font-bold py-4 px-8 rounded-lg shadow-lg transition text-lg"
              >
                無料で比較する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 導入セクション */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">ファクタリングで最短即日の資金調達を実現</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ファクタリングは、売掛金を売却して資金調達する方法です。銀行融資と違い、<strong>最短2時間で入金</strong>され、<strong>借入ではない</strong>ため負債に計上されません。審査は売掛先の信用を重視するため、<strong>赤字や税金滞納があっても利用可能</strong>です。
          </p>
          <p className="text-slate-700 leading-relaxed">
            当サイトでは、<strong>手数料1%〜の優良ファクタリング会社9社</strong>を厳選。法人から個人事業主まで、あなたの状況に最適なサービスが見つかります。
          </p>
        </div>
      </section>

      {/* おすすめTOP3セクション */}
      <section id="ranking" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="border-b-4 border-accent pb-2">おすすめファクタリング会社TOP3</span>
        </h2>
        <p className="text-center text-slate-600 mb-12">入金スピード・手数料・信頼性で厳選した3社</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              rank={index + 1}
              showRank={true}
            />
          ))}
        </div>
      </section>

      {/* 比較表セクション */}
      <section id="comparison" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="border-b-4 border-accent pb-2">全サービス比較一覧</span>
          </h2>
          <p className="text-center text-slate-600 mb-12">手数料・入金スピード・対応対象を一覧で比較</p>
          <ComparisonTable services={servicesData} />
          <div className="text-center mt-8">
            <Link
              href="/compare"
              className="inline-block bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              詳細な比較ページを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 選び方ガイド */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-accent pb-2">目的別ファクタリング会社の選び方</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link href="/ranking/speed" className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">とにかく急いでいる</h3>
            <p className="text-slate-600 mb-4">最短10分〜2時間で入金可能なサービスを紹介</p>
            <span className="text-primary font-bold">スピード重視ランキング →</span>
          </Link>

          <Link href="/ranking/fee" className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">手数料を安くしたい</h3>
            <p className="text-slate-600 mb-4">手数料1%〜の業界最安水準サービス</p>
            <span className="text-primary font-bold">手数料重視ランキング →</span>
          </Link>

          <Link href="/ranking/freelance" className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">個人事業主・フリーランス</h3>
            <p className="text-slate-600 mb-4">少額から利用できる個人事業主向けサービス</p>
            <span className="text-primary font-bold">個人事業主向けランキング →</span>
          </Link>
        </div>
      </section>

      {/* 簡易診断セクション */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="border-b-4 border-accent pb-2">あなたに最適なサービスを診断</span>
        </h2>
        <p className="text-center text-slate-600 mb-12">3つの質問で最適なファクタリング会社が見つかります</p>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-bold mb-3">1. 事業形態を選択してください</label>
              <div className="grid grid-cols-2 gap-4">
                <button className="py-3 px-6 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition">
                  法人
                </button>
                <button className="py-3 px-6 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition">
                  個人事業主
                </button>
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold mb-3">2. 売掛金額はいくらですか？</label>
              <div className="grid grid-cols-3 gap-4">
                <button className="py-3 px-4 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition text-sm">
                  50万円未満
                </button>
                <button className="py-3 px-4 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition text-sm">
                  50〜300万円
                </button>
                <button className="py-3 px-4 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition text-sm">
                  300万円以上
                </button>
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold mb-3">3. 希望の入金スピードは？</label>
              <div className="grid grid-cols-3 gap-4">
                <button className="py-3 px-4 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition text-sm">
                  即日
                </button>
                <button className="py-3 px-4 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition text-sm">
                  2〜3日以内
                </button>
                <button className="py-3 px-4 border-2 border-slate-300 text-slate-600 font-bold rounded-lg hover:border-primary hover:text-primary transition text-sm">
                  1週間以内
                </button>
              </div>
            </div>

            <div className="text-center pt-4">
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition text-lg">
                診断結果を見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* コラム記事一覧 */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="border-b-4 border-accent pb-2">ファクタリングお役立ちコラム</span>
          </h2>
          <p className="text-center text-slate-600 mb-12">初心者から上級者まで役立つ情報が満載</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {latestColumns.map((column) => (
              <Link 
                key={column.id} 
                href={`/column/${column.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-xs text-white bg-accent inline-block px-3 py-1 rounded mb-3">
                    {column.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{column.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{column.description}</p>
                  <div className="text-xs text-slate-500">{column.publishedAt}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/column/what-is-factoring"
              className="inline-block text-primary hover:text-blue-800 font-bold"
            >
              コラム一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-accent to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ最適なファクタリング会社を見つける
          </h2>
          <p className="text-xl mb-8">
            無料で簡単に比較・検討できます｜手数料1%〜
          </p>
          <a
            href="#ranking"
            className="inline-block bg-white hover:bg-slate-100 text-accent font-bold py-4 px-12 rounded-lg shadow-lg transition text-lg"
          >
            おすすめランキングを見る
          </a>
        </div>
      </section>
    </>
  );
}
