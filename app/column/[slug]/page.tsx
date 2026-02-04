import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
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
const articlesData: Article[] = require('../../../data/articles.json');

// 静的パス生成
export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articlesData.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

// Markdownをパース
async function getArticleContent(slug: string) {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const filePath = path.join(articlesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  
  // MarkdownをHTMLに変換
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return contentHtml;
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData.find((a) => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  const contentHtml = await getArticleContent(params.slug);
  
  if (!contentHtml) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* パンくずリスト */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <Link href="/column" className="hover:text-blue-600">
              コラム
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 記事ヘッダー */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">
              {article.category}
            </span>
            <time className="text-sm text-gray-500">
              {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
            </time>
            <span className="text-sm text-gray-500">• {article.readTime}分で読めます</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-4">
            {article.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-gray-600">
              著者: {article.author}
            </div>
            <div className="flex gap-2">
              {article.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* CTA（上部） */}
        <div className="mb-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900 mb-1">今すぐ無料見積もり</p>
              <p className="text-sm text-gray-600">最短即日で資金調達が可能です</p>
            </div>
            <a
              href={article.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition whitespace-nowrap"
            >
              公式サイトへ →
            </a>
          </div>
        </div>

        {/* 記事本文 */}
        <div 
          className="prose prose-lg max-w-none mb-12
            prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-blue-500
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-4 prose-li:my-2
            prose-table:border-collapse prose-table:w-full
            prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:border
            prose-td:p-3 prose-td:border
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-gray-50 prose-blockquote:py-2
          "
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA（下部） */}
        <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white text-center">
          <h2 className="text-2xl font-bold mb-3">まずは無料で見積もりを依頼</h2>
          <p className="mb-6 text-blue-100">
            {article.title.includes('ラボル') && 'ラボルなら最短60分で入金可能'}
            {article.title.includes('No.1') && '株式会社No.1なら手数料1%〜で利用可能'}
            {article.title.includes('トップ・マネジメント') && 'トップ・マネジメントなら最大3億円まで対応'}
          </p>
          <a
            href={article.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg"
          >
            公式サイトで詳細を見る →
          </a>
        </div>

        {/* 関連記事 */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articlesData
              .filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/column/${relatedArticle.slug}`}
                  className="block p-6 bg-white rounded-lg border hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {relatedArticle.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {relatedArticle.readTime}分
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedArticle.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
