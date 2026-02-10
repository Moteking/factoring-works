import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "個人事業主・フリーランス向けランキング【少額からOK】ファクタリング会社 TOP5",
  description: "個人事業主・フリーランスが利用できるファクタリング会社をランキング形式で紹介。1万円から対応可能。ペイトナー・ラボルなど個人事業主特化サービスを比較。独立直後でも利用可能。",
  keywords: "ファクタリング 個人事業主,ファクタリング フリーランス,個人事業主 資金調達,フリーランス 売掛金,ファクタリング 少額",
  alternates: {
    canonical: "https://factoring-guide.vercel.app/ranking/freelance",
  },
  openGraph: {
    title: "個人事業主・フリーランス向けランキング TOP5",
    description: "少額から対応可能。個人事業主・フリーランス特化ファクタリングを比較。",
    url: "https://factoring-guide.vercel.app/ranking/freelance",
    type: "website",
  },
};

export default function FreelanceRankingPage() {
  // 個人事業主対応でスピード順にソート
  const rankedServices = [...servicesData]
    .filter((s) => s.target.includes("個人事業主"))
    .sort((a, b) => a.speedMinutes - b.speedMinutes)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "ランキング", href: "/ranking/speed" },
        { label: "個人事業主向け" }
      ]} />

      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        個人事業主向けランキング
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        個人事業主・フリーランスが利用できるファクタリング会社をランキング形式で紹介します。
        少額から対応可能で、独立したての方でも安心して利用できます。
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
            href="/ranking/speed"
            className="bg-white hover:bg-slate-50 rounded-lg p-6 shadow-md transition"
          >
            <h3 className="text-xl font-bold text-primary mb-2">入金スピード重視ランキング</h3>
            <p className="text-slate-600">急ぎで資金が必要な方向け</p>
          </a>
          <a
            href="/ranking/fee"
            className="bg-white hover:bg-slate-50 rounded-lg p-6 shadow-md transition"
          >
            <h3 className="text-xl font-bold text-primary mb-2">手数料重視ランキング</h3>
            <p className="text-slate-600">コストを抑えたい方向け</p>
          </a>
        </div>
      </div>
    </div>
  );
}
