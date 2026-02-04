import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  fees: {
    min: number;
    max: number;
    display: string;
  };
  speed: {
    min: string;
    display: string;
  };
  maxAmount: string;
  rating: number;
  isPartner: boolean;
  affiliateUrl: string;
  features: string[];
}

interface Top3ServicesProps {
  services: Service[];
}

const rankColors = {
  1: { bg: 'bg-yellow-50', border: 'border-yellow-400', badge: 'bg-gradient-to-r from-yellow-400 to-yellow-500', icon: '👑' },
  2: { bg: 'bg-gray-50', border: 'border-gray-400', badge: 'bg-gradient-to-r from-gray-300 to-gray-400', icon: '🥈' },
  3: { bg: 'bg-orange-50', border: 'border-orange-400', badge: 'bg-gradient-to-r from-orange-300 to-orange-400', icon: '🥉' },
};

export default function Top3Services({ services }: Top3ServicesProps) {
  const top3 = services.slice(0, 3);

  return (
    <section id="ranking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          おすすめファクタリング会社 TOP3
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {top3.map((service, index) => {
            const rank = index + 1;
            const colors = rankColors[rank as keyof typeof rankColors];
            
            return (
              <div
                key={service.id}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 shadow-lg hover:shadow-xl transition relative`}
              >
                {/* ランキングバッジ */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badge} text-white px-6 py-2 rounded-full font-bold text-lg shadow-md flex items-center gap-2`}>
                  <span>{colors.icon}</span>
                  <span>第{rank}位</span>
                </div>

                {/* 提携中バッジ */}
                {service.isPartner && (
                  <div className="absolute -top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ 提携中
                  </div>
                )}

                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">手数料:</span>
                      <span className="font-bold text-blue-900">{service.fees.display}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">入金スピード:</span>
                      <span className="font-bold text-blue-900">{service.speed.display}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">最大金額:</span>
                      <span className="font-bold text-blue-900">{service.maxAmount}</span>
                    </div>
                  </div>

                  {/* 特徴 */}
                  <div className="mb-6">
                    <ul className="space-y-1 text-xs">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-0.5">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 公式サイトへボタンのみ */}
                  <a
                    href={service.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="block bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-3 px-6 rounded-lg transition shadow-md"
                  >
                    公式サイトへ
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
