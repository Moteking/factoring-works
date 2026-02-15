'use client';

import { companies } from '@/data/companies';

export function ComparisonTable() {
  const handleAffiliateClick = (companyId: number, companyName: string, url: string) => {
    // GTM dataLayer push
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'affiliate_click',
        company_id: companyId,
        company_name: companyName,
        link_url: url,
      });
    }
  };

  return (
    <section id="comparison" className="section-padding bg-[var(--light-gray)]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-[var(--navy)] text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[var(--primary)] after:mx-auto after:mt-4 after:rounded">
          おすすめファクタリング会社 TOP11
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[var(--primary)] text-white">
                <th className="p-4 text-left font-bold border-b-2 border-[var(--primary-dark)]">会社名</th>
                <th className="p-4 text-left font-bold border-b-2 border-[var(--primary-dark)]">手数料</th>
                <th className="p-4 text-left font-bold border-b-2 border-[var(--primary-dark)]">最短入金</th>
                <th className="p-4 text-left font-bold border-b-2 border-[var(--primary-dark)]">対応額</th>
                <th className="p-4 text-left font-bold border-b-2 border-[var(--primary-dark)]">個人事業主</th>
                <th className="p-4 text-left font-bold border-b-2 border-[var(--primary-dark)]">詳細・公式サイト</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-200 hover:bg-[var(--light-gray)] transition-colors"
                >
                  <td className="p-4 text-[var(--gray)]">
                    <strong>{company.name}</strong>
                  </td>
                  <td className="p-4 text-[var(--gray)]">{company.fee}</td>
                  <td className="p-4 text-[var(--gray)]">{company.speed}</td>
                  <td className="p-4 text-[var(--gray)]">{company.range}</td>
                  <td className="p-4 text-[var(--gray)]">{company.individual}</td>
                  <td className="p-4">
                    <a
                      href={company.url}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 no-underline text-sm"
                      onClick={() => handleAffiliateClick(index, company.name, company.url)}
                      target="_blank"
                      rel="noopener noreferrer"
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
    </section>
  );
}
