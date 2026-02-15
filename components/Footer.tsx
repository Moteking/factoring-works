import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white py-12 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-[var(--primary)] mb-4 text-lg font-bold">Factoring Media</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              日本最大級のファクタリング紹介メディア。手数料1〜20%、審査通過率90%、最短2時間入金の優良ファクタリング会社を無料比較。
            </p>
          </div>
          <div>
            <h4 className="text-[var(--primary)] mb-4 text-lg font-bold">サイト内リンク</h4>
            <Link href="#comparison" className="block text-gray-300 hover:text-[var(--primary)] mb-2 no-underline transition-colors">
              会社比較
            </Link>
            <Link href="#reasons" className="block text-gray-300 hover:text-[var(--primary)] mb-2 no-underline transition-colors">
              選ばれる理由
            </Link>
            <Link href="#criteria" className="block text-gray-300 hover:text-[var(--primary)] mb-2 no-underline transition-colors">
              優良基準
            </Link>
            <Link href="#flow" className="block text-gray-300 hover:text-[var(--primary)] mb-2 no-underline transition-colors">
              ご利用の流れ
            </Link>
            <Link href="#faq" className="block text-gray-300 hover:text-[var(--primary)] mb-2 no-underline transition-colors">
              よくあるご質問
            </Link>
          </div>
          <div>
            <h4 className="text-[var(--primary)] mb-4 text-lg font-bold">お問い合わせ</h4>
            <p className="text-gray-300 text-sm mb-4">
              各ファクタリング会社へのお問い合わせは、比較表の「公式サイトへ」ボタンから直接お願いいたします。
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2026 Factoring Media. All rights reserved.</p>
          <p className="text-gray-400 text-xs mt-2 leading-relaxed max-w-3xl mx-auto">
            ※当サイトはファクタリング会社の紹介・比較を目的としており、契約の斡旋・仲介は行っておりません。各社サービスの詳細は公式サイトにてご確認ください。
          </p>
        </div>
      </div>
    </footer>
  );
}
