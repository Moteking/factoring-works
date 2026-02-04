# ファクタリングガイド - コラム記事追加パッケージ（記事1〜3）

## 📦 パッケージ内容

このパッケージには、ファクタリングガイドサイトに追加するコラム記事3本とNext.js実装ファイルが含まれています。

### 含まれる記事

1. **ラボル（labol）の評判・口コミ記事**（約5,000文字）
   - ファイル：`articles/labol-review.md`
   - スラッグ：`labol-review`

2. **株式会社No.1の評判・口コミ記事**（約8,000文字）
   - ファイル：`articles/no1-review.md`
   - スラッグ：`no1-review`

3. **トップ・マネジメントの評判・口コミ記事**（約10,000文字）
   - ファイル：`articles/top-management-review.md`
   - スラッグ：`top-management-review`

### Next.js実装ファイル

- `app/column/page.tsx` - コラム記事一覧ページ
- `app/column/[slug]/page.tsx` - 記事詳細ページ（動的ルート）
- `data/articles.json` - 記事メタデータ
- `components/ArticleCard.tsx` - 記事カードコンポーネント

## 🚀 インストール手順

### ステップ1：ファイルの配置

tarballを展開して、以下のようにファイルを配置してください：

```bash
# tarballを展開
tar -xzf factoring-articles-1-3.tar.gz

# リポジトリのルートディレクトリに移動
cd /Users/ryuji/Documents/GitHub/factoring-works

# ファイルをコピー
cp -r factoring-seo-articles/articles ./
cp -r factoring-seo-articles/app/column ./app/
cp factoring-seo-articles/data/articles.json ./data/
cp factoring-seo-articles/components/ArticleCard.tsx ./components/
```

### ステップ2：必要なパッケージのインストール

記事ページで使用するパッケージをインストールします：

```bash
npm install gray-matter remark remark-html
```

**各パッケージの役割**
- `gray-matter`: Markdownのフロントマター（メタデータ）を解析
- `remark`: MarkdownをHTMLに変換
- `remark-html`: remarkのHTML変換プラグイン

### ステップ3：トップページにコラムセクションを追加（オプション）

トップページ（`app/page.tsx`）にコラム記事へのリンクを追加する場合：

```tsx
import Link from 'next/link';

// ... 既存のコード ...

{/* コラム記事セクション */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      ファクタリングコラム
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {/* 記事カードをここに表示 */}
    </div>

    <div className="text-center">
      <Link
        href="/column"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
      >
        すべての記事を見る →
      </Link>
    </div>
  </div>
</section>
```

### ステップ4：動作確認

```bash
# 開発サーバーを起動
npm run dev
```

ブラウザで以下のURLにアクセスして確認：

- コラム一覧ページ: `http://localhost:3000/column`
- ラボル記事: `http://localhost:3000/column/labol-review`
- No.1記事: `http://localhost:3000/column/no1-review`
- トップ・マネジメント記事: `http://localhost:3000/column/top-management-review`

### ステップ5：ビルド確認

```bash
# プロダクションビルド
npm run build

# ビルド後の動作確認
npm start
```

### ステップ6：GitHubへコミット＆プッシュ

```bash
# GitHub Desktopで以下の変更を確認
# - articles/ (新規追加)
# - app/column/ (新規追加)
# - data/articles.json (新規追加)
# - components/ArticleCard.tsx (新規追加)
# - package.json (gray-matter, remark, remark-html 追加)

# コミットメッセージ例
# Summary: Add first 3 SEO articles with Next.js implementation
# Description:
# - Add labol, No.1, and Top Management review articles
# - Implement dynamic article routing
# - Add article list page
# - Add article metadata JSON

# Push origin
```

### ステップ7：Netlifyで自動デプロイ

GitHubにプッシュ後、Netlifyが自動的にビルド＆デプロイを開始します。

- デプロイURL: https://app.netlify.com/sites/relaxed-fairy-b10a63/deploys
- サイトURL: https://factoring.works

約5〜10分でデプロイが完了します。

## 📁 ディレクトリ構造

インストール後のディレクトリ構造：

```
factoring-works/
├── articles/              # 新規追加
│   ├── labol-review.md
│   ├── no1-review.md
│   └── top-management-review.md
├── app/
│   ├── column/           # 新規追加
│   │   ├── page.tsx      # 記事一覧
│   │   └── [slug]/
│   │       └── page.tsx  # 記事詳細（動的ルート）
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ArticleCard.tsx   # 新規追加
│   ├── Hero.tsx
│   ├── Top3Services.tsx
│   └── ComparisonTable.tsx
├── data/
│   ├── articles.json     # 新規追加
│   └── services.json
├── package.json          # gray-matter, remark, remark-html 追加
├── next.config.js
├── tsconfig.json
└── README.md
```

## ✅ 動作確認チェックリスト

- [ ] `/column` ページで記事一覧が表示される
- [ ] 記事カードをクリックすると詳細ページに遷移する
- [ ] 記事詳細ページでMarkdownが正しくHTMLに変換されている
- [ ] パンくずリストが正しく表示される
- [ ] 「公式サイトへ」ボタンが各社のアフィリエイトリンクになっている
- [ ] 関連記事が表示される
- [ ] レスポンシブデザインが適用されている
- [ ] ビルドエラーが出ない
- [ ] Netlifyで正常にデプロイされる

## 🎨 カスタマイズ

### 記事スタイルの変更

`app/column/[slug]/page.tsx` の `prose` クラスでスタイルを調整できます：

```tsx
<div className="prose prose-lg max-w-none
  prose-headings:font-bold
  prose-h2:text-2xl prose-h2:border-b-2 prose-h2:border-blue-500
  prose-a:text-blue-600 hover:prose-a:underline
  ...
">
```

### 記事メタデータの編集

`data/articles.json` で記事のメタデータを編集できます：

```json
{
  "id": 1,
  "slug": "labol-review",
  "title": "記事タイトル",
  "description": "記事の説明",
  "category": "サービス紹介",
  ...
}
```

## 🆕 新しい記事の追加方法

### 1. Markdownファイルを作成

```bash
# articles/ ディレクトリに新しい記事を追加
touch articles/new-article.md
```

### 2. articles.json に追加

```json
{
  "id": 4,
  "slug": "new-article",
  "title": "新しい記事のタイトル",
  "description": "新しい記事の説明",
  ...
}
```

### 3. ビルド＆デプロイ

```bash
npm run build
# GitHubにプッシュすると自動デプロイ
```

## 🐛 トラブルシューティング

### 記事が表示されない

**原因1**: `articles/` ディレクトリが正しい場所にない

```bash
# 確認
ls -la articles/

# 正しい場所に配置
# factoring-works/articles/ にあることを確認
```

**原因2**: `articles.json` のslugとMarkdownファイル名が一致していない

```bash
# 確認
cat data/articles.json | grep slug
ls articles/

# slugとファイル名を一致させる
```

### ビルドエラー

**エラー**: `Cannot find module 'gray-matter'`

```bash
# パッケージをインストール
npm install gray-matter remark remark-html
```

**エラー**: `Module not found: Can't resolve '../../../data/articles.json'`

```bash
# articles.jsonが正しい場所にあるか確認
ls data/articles.json

# なければコピー
cp factoring-seo-articles/data/articles.json ./data/
```

### Netlifyデプロイエラー

**原因**: ビルド設定が不正

Netlifyの設定を確認：
- Build command: `npm run build`
- Publish directory: `.next`

## 📞 サポート

問題が発生した場合は、以下の情報を添えてご連絡ください：

1. エラーメッセージのスクリーンショット
2. `npm run build` の出力ログ
3. `ls -la` の結果（ディレクトリ構造確認）
4. Netlifyのビルドログ

## 🎉 完成！

これで記事3本がサイトに追加されました！

次のステップ：
- 残り12記事の作成と追加
- SEO最適化（メタタグ、構造化データ）
- トップページに最新記事セクションを追加
- 記事間の内部リンク最適化

---

**作成日**: 2026年1月
**バージョン**: 1.0.0
