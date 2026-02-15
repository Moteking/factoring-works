import Image from 'next/image';

const reasons = [
  {
    icon: 'https://www.genspark.ai/api/files/s/oLZHH38i?cache_control=3600',
    title: '業界最安水準 手数料1%〜',
    description: '複数社を一括比較することで、最安値の業者を見つけられます。手数料は1〜20%、平均5〜7%でご利用可能です。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/Cb8T8SCD?cache_control=3600',
    title: '担保・保証人不要',
    description: '売掛債権さえあれば審査可能。担保や保証人は一切不要です。個人事業主・フリーランスの方もご利用いただけます。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/sj48nrQB?cache_control=3600',
    title: '反社チェック済の安全企業のみ',
    description: '編集部が厳選した、反社会的勢力との関わりがない優良ファクタリング会社だけを掲載しています。',
  },
];

export function ReasonsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-[var(--navy)] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[var(--primary)] after:mx-auto after:mt-4 after:rounded">
          Factoring Media が選ばれる理由
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-4 text-center">
                {reason.title}
              </h3>
              <p className="text-[var(--gray)] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
