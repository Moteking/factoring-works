'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'フリーランス・個人事業主でも利用できますか？',
    answer: 'はい、可能です。売掛債権（請求書）があれば、個人事業主やフリーランスの方もファクタリングをご利用いただけます。掲載企業の多くが個人事業主に対応しています。',
  },
  {
    question: '審査にはどのくらい時間がかかりますか？',
    answer: '最短30分〜2時間で審査完了します。即日入金に対応している業者も多数掲載しており、お急ぎの資金調達にも対応可能です。',
  },
  {
    question: '2社間ファクタリングなら取引先に知られませんか？',
    answer: '2社間ファクタリングであれば、売掛先（取引先）に通知せずに契約できます。取引関係に影響を与えずに資金調達が可能です。',
  },
  {
    question: '赤字決算でも利用できますか？',
    answer: 'はい、可能です。ファクタリングは売掛債権の信用力を審査するため、自社の決算状況が赤字でも利用できるケースが多くあります。',
  },
  {
    question: '手数料はどのくらいかかりますか？',
    answer: '手数料は1〜20%が相場です。2社間ファクタリングは5〜15%、3社間ファクタリングは1〜9%が目安です。当サイトで複数社を比較し、最安値を見つけることができます。',
  },
  {
    question: '必要書類は何ですか？',
    answer: '通常、請求書・通帳コピー・身分証明書の3点が基本です。業者によっては決算書や取引基本契約書を求められる場合もありますが、最小限の書類で対応可能な業者を多数掲載しています。',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-[var(--light-gray)]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-[var(--navy)] text-center mb-12 relative">
          <span className="block after:content-[''] after:block after:w-16 after:h-1 after:bg-[var(--primary)] after:mx-auto after:mt-4 after:rounded">
            よくあるご質問
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white hover:bg-[var(--light-gray)] transition-colors flex justify-between items-center border-none cursor-pointer"
              >
                <span className="text-lg font-semibold text-[var(--navy)]">
                  {faq.question}
                </span>
                <span 
                  className={`text-[var(--primary)] text-xl transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 px-6 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-[var(--gray)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
