import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "サービスが見つかりません | ファクタリングガイド",
    };
  }

  const feeRange = `${service.fee.min}%〜${service.fee.max}%`;
  
  return {
    title: `${service.name}の評判・口コミ【手数料${feeRange}】${service.speed}入金 | ファクタリングガイド`,
    description: `${service.name}の手数料は${feeRange}、${service.speed}で入金可能。${service.description}。審査基準、必要書類、メリット・デメリットを詳しく解説。${service.target.join('・')}対応。`,
    keywords: `${service.name},${service.name} 評判,${service.name} 口コミ,${service.name} 手数料,ファクタリング ${service.name},${service.target.join(',')}`,
    alternates: {
      canonical: `https://factoring-guide.vercel.app/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name}の評判・口コミ【手数料${feeRange}】`,
      description: `${service.speed}入金、手数料${feeRange}。${service.description}`,
      url: `https://factoring-guide.vercel.app/services/${service.slug}`,
      type: 'article',
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">サービスが見つかりません</h1>
        <Link href="/" className="text-primary hover:underline">
          トップページに戻る
        </Link>
      </div>
    );
  }

  // 関連サービス（同じターゲットを含む、自身以外の3件）
  const relatedServices = servicesData
    .filter((s) => 
      s.id !== service.id && 
      s.target.some((t) => service.target.includes(t))
    )
    .slice(0, 3);

  // 構造化データ
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": service.name,
    "description": service.description,
    "url": `https://factoring-guide.vercel.app/services/${service.slug}`,
    "priceRange": `${service.fee.min}%-${service.fee.max}%`,
    "provider": {
      "@type": "Organization",
      "name": service.company.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": service.company.address
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "100"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: "サービス一覧", href: "/compare" },
        { label: service.name }
      ]} />

      {/* サービス名 */}
      <h1 className="text-4xl font-bold text-slate-800 mb-6">{service.name}</h1>
      <p className="text-xl text-slate-600 mb-8">{service.description}</p>

      {/* CTAボタン（上部） */}
      <div className="mb-8">
        <a
          href={service.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition text-lg"
        >
          {service.name}の公式サイトへ
        </a>
      </div>

      {/* 基本情報テーブル */}
      <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-primary pb-2">
          基本情報
        </h2>
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <th className="py-4 px-4 text-left bg-slate-50 font-bold w-1/3">手数料</th>
              <td className="py-4 px-4">
                <span className="text-2xl font-bold text-primary">
                  {service.fee.min}%〜{service.fee.max}%
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-4 px-4 text-left bg-slate-50 font-bold">入金スピード</th>
              <td className="py-4 px-4">
                <span className="text-2xl font-bold text-accent">{service.speed}</span>
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-4 px-4 text-left bg-slate-50 font-bold">買取可能額</th>
              <td className="py-4 px-4">
                {service.minAmount ? `${(service.minAmount / 10000).toFixed(0)}万円` : "下限なし"}
                〜
                {service.maxAmount ? `${(service.maxAmount / 100000000).toFixed(0)}億円` : "上限なし"}
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-4 px-4 text-left bg-slate-50 font-bold">対応対象</th>
              <td className="py-4 px-4">
                {service.target.join("・")}
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-4 px-4 text-left bg-slate-50 font-bold">必要書類</th>
              <td className="py-4 px-4">
                {service.documents.join("、")}
              </td>
            </tr>
            <tr className="border-b">
              <th className="py-4 px-4 text-left bg-slate-50 font-bold">契約形態</th>
              <td className="py-4 px-4">
                {service.twoParty && "2社間"}
                {service.twoParty && service.threeParty && "・"}
                {service.threeParty && "3社間"}
              </td>
            </tr>
            <tr>
              <th className="py-4 px-4 text-left bg-slate-50 font-bold">オンライン対応</th>
              <td className="py-4 px-4">
                {service.online ? "✓ 対応" : "× 非対応"}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* おすすめポイント */}
      <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-primary pb-2">
          おすすめポイント
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
              <span className="text-2xl mr-3">✓</span>
              <span className="text-slate-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-6 border-b-2 border-green-600 pb-2">
            メリット
          </h2>
          <ul className="space-y-3">
            {service.pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 text-xl mr-3">◎</span>
                <span className="text-slate-800">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">
            デメリット
          </h2>
          <ul className="space-y-3">
            {service.cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 text-xl mr-3">△</span>
                <span className="text-slate-800">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* こんな人におすすめ */}
      <section className="bg-gradient-to-r from-accent to-orange-600 text-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">こんな人におすすめ</h2>
        <ul className="space-y-3">
          {service.recommendedFor.map((item, index) => (
            <li key={index} className="flex items-start text-lg">
              <span className="mr-3">👍</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTAボタン（中部） */}
      <div className="text-center mb-8">
        <a
          href={service.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition text-lg"
        >
          {service.name}の公式サイトへ
        </a>
      </div>

      {/* 会社概要 */}
      <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-primary pb-2">
          会社概要
        </h2>
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <th className="py-3 px-4 text-left bg-slate-50 font-bold w-1/3">会社名</th>
              <td className="py-3 px-4">{service.company.name}</td>
            </tr>
            <tr className="border-b">
              <th className="py-3 px-4 text-left bg-slate-50 font-bold">所在地</th>
              <td className="py-3 px-4">{service.company.address}</td>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left bg-slate-50 font-bold">営業時間</th>
              <td className="py-3 px-4">{service.company.hours}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CTAボタン（下部） */}
      <div className="text-center mb-12">
        <a
          href={service.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition text-lg"
        >
          {service.name}の公式サイトへ
        </a>
      </div>

      {/* 関連サービス */}
      {relatedServices.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">関連サービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <ServiceCard key={relatedService.id} service={relatedService} />
            ))}
          </div>
        </section>
      )}
    </div>
    </>
  );
}
