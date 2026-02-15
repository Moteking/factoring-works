import Image from 'next/image';

const criteria = [
  {
    icon: 'https://www.genspark.ai/api/files/s/oLZHH38i?cache_control=3600',
    title: '手数料が適正（1〜20%）',
    description: '相場を大きく超える手数料を請求する業者は掲載しません。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/Cb8T8SCD?cache_control=3600',
    title: '担保・保証人不要',
    description: '売掛債権のみで資金調達できる業者を厳選しています。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/sj48nrQB?cache_control=3600',
    title: '反社会的勢力の排除',
    description: '反社チェックを通過した企業のみ掲載しています。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/2AoueUMi?cache_control=3600',
    title: '償還請求権なし',
    description: '売掛先が倒産しても返済義務のない契約のみ紹介します。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/0pqQyFni?cache_control=3600',
    title: '違法スキームの排除',
    description: '給与ファクタリングなど違法行為を行う業者は排除しています。',
  },
  {
    icon: 'https://www.genspark.ai/api/files/s/oLZHH38i?cache_control=3600',
    title: '透明性の高い契約',
    description: '契約内容が明確で、隠れた手数料のない業者のみ掲載。',
  },
];

export function CriteriaSection() {
  return (
    <section className="section-padding bg-[var(--light-gray)]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-[var(--navy)] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[var(--primary)] after:mx-auto after:mt-4 after:rounded">
          編集部が定める「優良ファクタリング」の基準
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src={criterion.icon}
                  alt={criterion.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-[var(--navy)] mb-2">
                {criterion.title}
              </h4>
              <p className="text-sm text-[var(--gray)]">
                {criterion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
