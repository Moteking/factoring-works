import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            ファクタリングガイド
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-primary transition">
              ホーム
            </Link>
            <Link href="/compare" className="text-slate-700 hover:text-primary transition">
              比較一覧
            </Link>
            <div className="relative group">
              <Link href="/ranking/speed" className="text-slate-700 hover:text-primary transition">
                ランキング
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 mt-2 min-w-[200px]">
                <Link href="/ranking/speed" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-primary transition">
                  入金スピード重視
                </Link>
                <Link href="/ranking/fee" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-primary transition">
                  手数料重視
                </Link>
                <Link href="/ranking/freelance" className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-primary transition">
                  個人事業主向け
                </Link>
              </div>
            </div>
            <Link href="/column/what-is-factoring" className="text-slate-700 hover:text-primary transition">
              コラム
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="text-slate-700" aria-label="メニュー">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
