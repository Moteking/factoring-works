import Link from 'next/link';

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export default function ArticleCard({
  slug,
  title,
  description,
  category,
  publishedAt,
  tags,
  readTime,
}: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg border hover:shadow-lg transition overflow-hidden">
      <Link href={`/column/${slug}`}>
        <div className="p-6">
          {/* カテゴリーと読了時間 */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
              {category}
            </span>
            <span className="text-xs text-gray-500">{readTime}分で読めます</span>
          </div>

          {/* タイトル */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition">
            {title}
          </h3>

          {/* 説明 */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>

          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
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
            <span>{new Date(publishedAt).toLocaleDateString('ja-JP')}</span>
            <span className="text-blue-600 font-medium hover:underline">
              続きを読む →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
