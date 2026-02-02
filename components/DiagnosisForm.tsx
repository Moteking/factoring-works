'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  slug: string;
  fees: {
    max: number;
    display: string;
  };
  speed: {
    min: string;
    display: string;
  };
  maxAmount: string;
  targetCustomers: string[];
}

interface DiagnosisFormProps {
  services: Service[];
}

export default function DiagnosisForm({ services }: DiagnosisFormProps) {
  const [businessType, setBusinessType] = useState('');
  const [amount, setAmount] = useState('');
  const [speed, setSpeed] = useState('');
  const [results, setResults] = useState<Service[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let filtered = services;

    // 事業形態でフィルター
    if (businessType === 'personal') {
      filtered = filtered.filter(s => s.targetCustomers.includes('個人事業主'));
    }

    // 入金スピードでフィルター
    if (speed === 'same-day') {
      filtered = filtered.filter(s => 
        s.speed.min.includes('分') || 
        s.speed.min.includes('時間') ||
        s.speed.min.includes('即日')
      );
    }

    // 手数料の低い順にソート
    filtered = filtered.sort((a, b) => a.fees.max - b.fees.max);

    setResults(filtered.slice(0, 3));
    setShowResults(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          簡易診断
        </h2>
        <p className="text-center text-gray-600 mb-10">
          3つの質問に答えるだけで、あなたに最適なファクタリング会社が見つかります
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8">
          {/* 質問1: 事業形態 */}
          <div className="mb-8">
            <label className="block text-lg font-bold mb-4 text-gray-900">
              1. 事業形態を教えてください
            </label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="businessType"
                  value="corporate"
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">法人</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="businessType"
                  value="personal"
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">個人事業主</span>
              </label>
            </div>
          </div>

          {/* 質問2: 売掛金額 */}
          <div className="mb-8">
            <label className="block text-lg font-bold mb-4 text-gray-900">
              2. 売掛金額はいくらですか？
            </label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="amount"
                  value="under-50"
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">50万円未満</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="amount"
                  value="50-300"
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">50万円〜300万円</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="amount"
                  value="over-300"
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">300万円以上</span>
              </label>
            </div>
          </div>

          {/* 質問3: 入金スピード */}
          <div className="mb-8">
            <label className="block text-lg font-bold mb-4 text-gray-900">
              3. 希望の入金スピードは？
            </label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="speed"
                  value="same-day"
                  onChange={(e) => setSpeed(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">即日</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="speed"
                  value="2-3-days"
                  onChange={(e) => setSpeed(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">2〜3日</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="speed"
                  value="within-week"
                  onChange={(e) => setSpeed(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                  required
                />
                <span className="ml-3 text-gray-700">1週間以内</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition"
          >
            診断結果を見る
          </button>
        </form>

        {/* 診断結果 */}
        {showResults && (
          <div className="mt-10 bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              あなたにおすすめのファクタリング会社
            </h3>
            <div className="space-y-6">
              {results.map((service, index) => (
                <div
                  key={service.id}
                  className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      {index + 1}. {service.name}
                    </h4>
                    <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                      おすすめ度 {index === 0 ? '★★★' : index === 1 ? '★★☆' : '★☆☆'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-600">手数料: </span>
                      <span className="font-bold text-blue-900">{service.fees.display}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">入金: </span>
                      <span className="font-bold text-blue-900">{service.speed.display}</span>
                    </div>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
                  >
                    詳細を見る
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
