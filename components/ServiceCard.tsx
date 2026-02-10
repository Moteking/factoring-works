import Link from "next/link";

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  fee: { min: number; max: number };
  speed: string;
  speedMinutes: number;
  target: string[];
  features: string[];
  affiliateUrl: string;
  pros: string[];
}

interface ServiceCardProps {
  service: Service;
  rank?: number;
  showRank?: boolean;
}

export default function ServiceCard({ service, rank, showRank = false }: ServiceCardProps) {
  const getRankBadge = (rank: number) => {
    const badges = {
      1: { text: "第1位", color: "bg-gradient-to-r from-yellow-400 to-yellow-600", icon: "👑" },
      2: { text: "第2位", color: "bg-gradient-to-r from-slate-300 to-slate-500", icon: "🥈" },
      3: { text: "第3位", color: "bg-gradient-to-r from-orange-400 to-orange-600", icon: "🥉" },
    };
    return badges[rank as keyof typeof badges] || { text: `第${rank}位`, color: "bg-slate-500", icon: "" };
  };

  const badge = rank ? getRankBadge(rank) : null;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {showRank && badge && (
        <div className={`${badge.color} text-white py-2 px-4 text-center font-bold text-lg`}>
          {badge.icon} {badge.text}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{service.name}</h3>
        <p className="text-slate-600 text-sm mb-4">{service.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-xs text-slate-600 mb-1">手数料</div>
            <div className="text-lg font-bold text-primary">
              {service.fee.min}%〜{service.fee.max}%
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-3">
            <div className="text-xs text-slate-600 mb-1">入金スピード</div>
            <div className="text-lg font-bold text-accent">{service.speed}</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs text-slate-600 mb-2">対応対象</div>
          <div className="flex gap-2">
            {service.target.map((t) => (
              <span key={t} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs text-slate-600 mb-2">特徴</div>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-slate-700 flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <a
            href={service.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="flex-1 bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition text-center"
          >
            公式サイトへ
          </a>
          <Link
            href={`/services/${service.slug}`}
            className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition"
          >
            詳細
          </Link>
        </div>
      </div>
    </div>
  );
}
