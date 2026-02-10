import Link from "next/link";

interface Service {
  id: string;
  name: string;
  slug: string;
  fee: { min: number; max: number };
  speed: string;
  speedMinutes: number;
  minAmount: number | null;
  maxAmount: number | null;
  target: string[];
  affiliateUrl: string;
}

interface ComparisonTableProps {
  services: Service[];
}

export default function ComparisonTable({ services }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-4 px-4 text-left font-bold">会社名</th>
            <th className="py-4 px-4 text-left font-bold">手数料</th>
            <th className="py-4 px-4 text-left font-bold">入金スピード</th>
            <th className="py-4 px-4 text-left font-bold">買取可能額</th>
            <th className="py-4 px-4 text-left font-bold">対応対象</th>
            <th className="py-4 px-4 text-center font-bold">詳細</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr 
              key={service.id} 
              className={`border-b hover:bg-blue-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
            >
              <td className="py-4 px-4">
                <div className="font-bold text-slate-800">{service.name}</div>
              </td>
              <td className="py-4 px-4">
                <span className="text-primary font-bold">
                  {service.fee.min}%〜{service.fee.max}%
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="text-accent font-bold">{service.speed}</span>
              </td>
              <td className="py-4 px-4 text-sm">
                {service.minAmount ? `${(service.minAmount / 10000).toFixed(0)}万円` : "制限なし"}
                〜
                {service.maxAmount ? `${(service.maxAmount / 100000000).toFixed(0)}億円` : "上限なし"}
              </td>
              <td className="py-4 px-4">
                <div className="flex flex-wrap gap-1">
                  {service.target.map((t) => (
                    <span key={t} className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col gap-2">
                  <a
                    href={service.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition text-sm"
                  >
                    公式サイト
                  </a>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary hover:text-blue-800 font-bold text-sm"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
