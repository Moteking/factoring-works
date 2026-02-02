export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          最短2時間で資金調達。<br />
          あなたに最適なファクタリング会社が見つかる
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-blue-100">
          手数料・入金スピード・対応額を徹底比較
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ranking"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition inline-block"
          >
            おすすめランキングを見る
          </a>
          <a
            href="#compare"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg shadow-lg transition inline-block"
          >
            無料で比較する
          </a>
        </div>
      </div>
    </section>
  );
}
