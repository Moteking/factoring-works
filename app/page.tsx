import Link from 'next/link';
import services from '../data/services.json';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">ファクタリング比較</h1>
        
        <p className="text-lg mb-8">
          提携中のファクタリングサービス8社を徹底比較。手数料、入金スピード、対応規模で最適なサービスが見つかります。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <div key={service.id} className="border rounded-lg p-6 hover:shadow-lg transition">
              {service.isPartner && (
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-2">
                  ⭐ 提携中
                </span>
              )}
              
              <h2 className="text-xl font-bold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">手数料:</span>
                  <span className="font-semibold">{service.fees.display}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">入金スピード:</span>
                  <span className="font-semibold">{service.speed.display}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">最大金額:</span>
                  <span className="font-semibold">{service.maxAmount}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Link 
                  href={service.internalUrl}
                  className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  詳細を見る
                </Link>
                <a 
                  href={service.affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="block w-full text-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                >
                  公式サイトへ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
