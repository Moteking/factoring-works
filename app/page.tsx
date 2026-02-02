import Hero from '@/components/Hero';
import Top3Services from '@/components/Top3Services';
import ComparisonTable from '@/components/ComparisonTable';
import DiagnosisForm from '@/components/DiagnosisForm';
import servicesData from '@/data/services.json';

export default function Home() {
  // 提携中サービスのみをフィルター
  const partnerServices = servicesData.filter(service => service.isPartner);

  return (
    <main>
      {/* ヒーローセクション */}
      <Hero />

      {/* おすすめTOP3 */}
      <Top3Services services={partnerServices} />

      {/* 比較表 */}
      <ComparisonTable services={partnerServices} />

      {/* 簡易診断 */}
      <DiagnosisForm services={partnerServices} />

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐファクタリングで資金調達を始めよう
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            最短2時間で現金化。まずは無料で見積もりを！
          </p>
          <a
            href="#ranking"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 font-bold py-4 px-10 rounded-lg shadow-xl transition text-lg"
          >
            おすすめランキングを見る
          </a>
        </div>
      </section>
    </main>
  );
}
