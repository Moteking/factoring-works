import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ファクタリングガイド</h3>
            <p className="text-slate-300 text-sm">
              手数料・入金スピード・審査通過率で徹底比較。最適なファクタリング会社選びをサポートします。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare" className="text-slate-300 hover:text-white transition">比較一覧</Link></li>
              <li><Link href="/ranking/speed" className="text-slate-300 hover:text-white transition">スピード重視ランキング</Link></li>
              <li><Link href="/ranking/fee" className="text-slate-300 hover:text-white transition">手数料重視ランキング</Link></li>
              <li><Link href="/ranking/freelance" className="text-slate-300 hover:text-white transition">個人事業主向けランキング</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">コラム</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/column/what-is-factoring" className="text-slate-300 hover:text-white transition">ファクタリングとは</Link></li>
              <li><Link href="/column/two-vs-three-party" className="text-slate-300 hover:text-white transition">2社間と3社間の違い</Link></li>
              <li><Link href="/column/fee-guide" className="text-slate-300 hover:text-white transition">手数料の相場</Link></li>
              <li><Link href="/column/avoid-scams" className="text-slate-300 hover:text-white transition">悪徳業者の見分け方</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition">当サイトについて</Link></li>
              <li><a href="https://kaaay.co.jp/about" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">運営者情報</a></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-white transition">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-white transition">利用規約</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} ファクタリングガイド All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
