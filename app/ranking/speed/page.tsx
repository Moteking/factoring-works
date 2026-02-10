import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "入金スピード重視ランキング【最短10分】即日入金可能なファクタリング会社 TOP5",
  description: "最短10分から即日入金可能なファクタリング会社をランキング形式で紹介。スピード重視の方におすすめ。ペイトナーは最短10分、QuQuMoは最短2時間で資金調達可能。",
  keywords: "ファクタリング 即日,ファクタリング スピード,ファクタリング 最短,資金調達 即日,売掛金 現金化 最短",
  alternates: {
    canonical: "https://factoring-guide.vercel.app/ranking/speed",
  },
  openGraph: {
    title: "入金スピード重視ランキング【最短10分】TOP5",
    description: "最短10分から即日入金可能なファクタリング会社をランキング紹介。",
    url: "https://factoring-guide.vercel.app/ranking/speed",
    type: "website",
  },
};

export default function SpeedRankingPage() {
  // 入金スピード順にソート
  const rankedServices = [...servicesData]
    .sort((a, b) => a.speedMinutes - b.speedMinutes)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "ランキング", href: "/ranking/speed" },
        { label: "入金スピード重視" }
      ]} />

      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        入金スピード重視ランキング
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        最短10分から即日入金可能なファクタリング会社をランキング形式で紹介します。
        急ぎで資金が必要な方におすすめです。
      </p>

      {/* ランキング表示 */}
      <div className="space-y-6">
        {rankedServices.map((service, index) => (
          <div key={service.id}>
            <ServiceCard service={service} rank={index + 1} showRank={true} />
          </div>
        ))}
      </div>

      {/* 他のランキング */}
      <div className="mt-16 bg-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">他のランキングも見る</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/ranking/fee"
            className="bg-white hover:bg-slate-50 rounded-lg p-6 shadow-md transition"
          >
            <h3 className="text-xl font-bold text-primary mb-2">手数料重視ランキング</h3>
            <p className="text-slate-600">手数料を抑えたい方向け</p>
          </a>
          <a
            href="/ranking/freelance"
            className="bg-white hover:bg-slate-50 rounded-lg p-6 shadow-md transition"
          >
            <h3 className="text-xl font-bold text-primary mb-2">個人事業主向けランキング</h3>
            <p className="text-slate-600">フリーランスの方向け</p>
          </a>
        </div>
      </div>
    </div>
  );
}
