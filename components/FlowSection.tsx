const flowSteps = [
  {
    number: 1,
    title: '無料見積もり依頼',
    description: '30秒で完了する簡単フォームから、売掛金額・希望額・業種などを入力してお申し込みください。',
  },
  {
    number: 2,
    title: '必要書類の提出',
    description: '請求書・通帳コピーなど最小限の書類（平均2点）をご提出いただきます。オンライン提出も可能です。',
  },
  {
    number: 3,
    title: '見積もり・条件の提示',
    description: '最大5社から見積もりと契約条件が提示されます。手数料・スピード・サービス内容を比較検討できます。',
  },
  {
    number: 4,
    title: '契約締結',
    description: '最も条件の良いファクタリング会社と契約を結びます。2社間・3社間、オンライン契約など柔軟に対応。',
  },
  {
    number: 5,
    title: '入金完了',
    description: '契約後、最短30分〜2時間で指定口座に入金されます。即日対応可能な業者も多数掲載中です。',
  },
];

export function FlowSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-[var(--navy)] text-center mb-12 relative">
          <span className="block after:content-[''] after:block after:w-16 after:h-1 after:bg-[var(--primary)] after:mx-auto after:mt-4 after:rounded">
            ご利用の流れ（最短2時間）
          </span>
        </h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {flowSteps.map((step) => (
            <div 
              key={step.number}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-6 items-start"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--navy)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--gray)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
