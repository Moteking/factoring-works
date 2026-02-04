import Link from 'next/link';

// 記事データの型定義
interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  thumbnailUrl: string;
  readTime: number;
  affiliateUrl: string;
}

// 記事データを読み込み
const articlesData: Article[] = require('../../data/articles.json');

export const metadata = {
  title: 'コラム記事一覧 | ファクタリングガイド',
  description: 'ファクタリングに関する最新情報、サービス比較、利用方法などを解説したコラム記事の一覧ページです。',
};

export default function ColumnListPage() {
  // カテゴリーで記事を分類
  const categories = Array.from(new Set(articlesData.map((a) => a.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">コラム記事</h1>
          <p className="text-lg text-blue-100">
            ファクタリングに関する最新情報をお届けします
          </p>
        </div>
      </div>

      {/* パンくずリスト */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">コラム</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* カテゴリー別表示 */}
        {categories.map((category) => {
          const categoryArticles = articlesData.filter((a) => a.category === category);
          
          return (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500">
                {category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-lg border hover:shadow-lg transition overflow-hidden"
                  >
                    <Link href={`/column/${article.slug}`}>
                      <div className="p-6">
                        {/* カテゴリーと読了時間 */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {article.readTime}分で読めます
                          </span>
                        </div>

                        {/* タイトル */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition">
                          {article.title}
                        </h3>

                        {/* 説明 */}
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {article.description}
                        </p>

                        {/* タグ */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* メタ情報 */}
                        <div className="flex items-center justify-between pt-4 border-t text-xs text-gray-500">
                          <span>
                            {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                          </span>
                          <span className="text-blue-600 font-medium hover:underline">
                            続きを読む →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* 記事がない場合 */}
        {articlesData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">現在、記事はありません。</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            あなたに最適なファクタリング会社を見つける
          </h2>
          <p className="text-lg mb-6 text-orange-100">
            無料で複数のファクタリング会社を比較できます
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg"
          >
            おすすめランキングを見る →
          </Link>
        </div>
      </div>
    </div>
  );
}
