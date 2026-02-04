interface Service {
  id: string;
  name: string;
  slug: string;
  fees: {
    display: string;
  };
  speed: {
    display: string;
  };
  maxAmount: string;
  targetCustomers: string[];
  isPartner: boolean;
  affiliateUrl: string;
}

interface ComparisonTableProps {
  services: Service[];
}

export default function ComparisonTable({ services }: ComparisonTableProps) {
  return (
    <section id="compare" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          全サービス比較表
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">会社名</th>
                  <th className="px-6 py-4 text-left font-bold">手数料</th>
                  <th className="px-6 py-4 text-left font-bold">入金スピード</th>
                  <th className="px-6 py-4 text-left font-bold">買取可能額</th>
                  <th className="px-6 py-4 text-left font-bold">対応対象</th>
                  <th className="px-6 py-4 text-center font-bold">公式サイト</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={service.id}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-blue-50 transition`}
                  >
                    <td className="px-6 py-4 font-bold text-gray-900">
                      <div className="flex items-center gap-2">
                        {service.name}
                        {service.isPartner && (
                          <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                            ⭐ 提携中
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-blue-900 font-semibold">
                      {service.fees.display}
                    </td>
                    <td className="px-6 py-4 text-blue-900 font-semibold">
                      {service.speed.display}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {service.maxAmount}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {service.targetCustomers.join('・')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={service.affiliateUrl}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition text-sm"
                      >
                        公式サイトへ
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            気になるサービスがあれば、公式サイトで詳細をご確認ください
          </p>
        </div>
      </div>
    </section>
  );
}
