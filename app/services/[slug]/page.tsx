import Link from 'next/link';
import services from '../../../data/services.json';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find((s: any) => s.id === params.slug);

  if (!service) {
    return <div>サービスが見つかりません</div>;
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← 一覧に戻る
        </Link>

        {service.isPartner && (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded mb-4 ml-4">
            ⭐ 提携中
          </span>
        )}

        <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{service.description}</p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">基本情報</h2>
          <dl className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <dt className="font-semibold">手数料:</dt>
              <dd>{service.fees.display}</dd>
            </div>
            <div className="flex justify-between border-b pb-2">
              <dt className="font-semibold">入金スピード:</dt>
              <dd>{service.speed.display}</dd>
            </div>
            <div className="flex justify-between border-b pb-2">
              <dt className="font-semibold">最大金額:</dt>
              <dd>{service.maxAmount}</dd>
            </div>
            <div className="flex justify-between border-b pb-2">
              <dt className="font-semibold">対象顧客:</dt>
              <dd>{service.targetCustomers.join('、')}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-semibold">評価:</dt>
              <dd>⭐ {service.rating} / 5.0</dd>
            </div>
          </dl>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">特徴</h2>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <a
            href={service.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="block w-full text-center bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-green-600 transition"
          >
            公式サイトで詳細を見る →
          </a>
          <Link
            href="/"
            className="block w-full text-center border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-lg text-lg font-bold hover:bg-blue-50 transition"
          >
            他のサービスと比較する
          </Link>
        </div>
      </div>
    </main>
  );
}
