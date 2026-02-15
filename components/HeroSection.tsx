import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#FFF5E6] to-[#FFEAD8] py-16 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-4 leading-tight">
              審査通過率90%<br />
              最短2時間入金<br />
              国内No.1※のファクタリング比較サイト
            </h1>
            <p className="text-lg text-[var(--gray)] mb-8">
              手数料1〜20%、担保・保証人不要。最大5社を無料比較できます。
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <strong className="block text-3xl text-[var(--primary)] font-bold">600人+</strong>
                <span className="text-sm text-[var(--gray)]">月間利用者数</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <strong className="block text-3xl text-[var(--primary)] font-bold">90%</strong>
                <span className="text-sm text-[var(--gray)]">審査通過率</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <strong className="block text-3xl text-[var(--primary)] font-bold">2時間</strong>
                <span className="text-sm text-[var(--gray)]">最短入金</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#comparison" 
                className="inline-block px-10 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 no-underline"
              >
                優良会社を比較する
              </Link>
              <Link 
                href="#guide" 
                className="inline-block px-10 py-4 bg-white text-[var(--primary)] font-bold rounded-xl border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all no-underline"
              >
                はじめての方へ
              </Link>
            </div>
            <p className="mt-6 text-xs text-[var(--gray)]">
              ※2025年4月時点 ファクタリング口コミサイト ahrefsより
            </p>
          </div>
          <div className="relative w-full h-[400px]">
            <Image
              src="https://www.genspark.ai/api/files/s/395sh6ao?cache_control=3600"
              alt="ファクタリングイメージ"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
