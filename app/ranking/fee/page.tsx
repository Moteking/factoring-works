import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "手数料重視ランキング【1%〜業界最安水準】ファクタリング会社 TOP5",
  description: "手数料1%〜の業界最安水準ファクタリング会社をランキング形式で紹介。コストを抑えて資金調達したい方におすすめ。QuQuMo・日本中小企業金融サポート機構など低手数料のサービスを比較。",
  keywords: "ファクタリング 手数料,ファクタリング 安い,ファクタリング 最安,ファクタリング コスト,資金調達 手数料",
  alternates: {
    canonical: "https://factoring-guide.vercel.app/ranking/fee",
  },
  openGraph: {
    title: "手数料重視ランキング【1%〜業界最安】TOP5",
    description: "手数料1%〜の業界最安水準ファクタリング会社をランキング紹介。",
    url: "https://factoring-guide.vercel.app/ranking/fee",
    type: "website",
  },
};

export default function FeeRankingPage() {
  // 手数料下限順にソート
  const rankedServices = [...servicesData]
    .sort((a, b) => a.fee.min - b.fee.min)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "ランキング", href: "/ranking/speed" },
        { label: "手数料重視" }
      ]} />

      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        手数料重視ランキング
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        手数料1%〜の業界最安水準ファクタリング会社をランキング形式で紹介します。
        コストを抑えて資金調達したい方におすすめです。
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
