# ファクタリングガイド - アフィリエイトサイト

ファクタリングサービスを紹介・比較するアフィリエイトサイトです。Next.js 14のApp Routerを使用し、静的サイト生成（SSG）で構築されています。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **静的サイト生成 (SSG)**

## セットアップ手順

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いてサイトを確認できます。

### 3. 本番ビルド

```bash
npm run build
```

静的ファイルが `out` ディレクトリに生成されます。

### 4. ビルドしたサイトのプレビュー

```bash
npm start
```

## ディレクトリ構成

```
factoring-guide/
├── app/                        # Next.js App Router
│   ├── page.tsx                # トップページ
│   ├── layout.tsx              # 共通レイアウト
│   ├── globals.css             # グローバルCSS
│   ├── services/[slug]/        # 個別サービスページ
│   ├── compare/                # 比較一覧ページ
│   ├── ranking/                # ランキングページ
│   │   ├── speed/              # スピード重視
│   │   ├── fee/                # 手数料重視
│   │   └── freelance/          # 個人事業主向け
│   ├── column/[slug]/          # コラム記事ページ
│   ├── about/                  # 当サイトについて
│   ├── privacy/                # プライバシーポリシー
│   └── terms/                  # 利用規約
├── components/                 # 共通コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   ├── ComparisonTable.tsx
│   ├── Breadcrumb.tsx
│   └── CTAButton.tsx
├── data/                       # データファイル
│   ├── services.json           # サービス情報
│   └── columns.json            # コラム記事情報
├── lib/                        # ユーティリティ関数
│   └── utils.ts
└── public/                     # 静的ファイル
    └── images/
```

## サービスの追加方法

### 1. `data/services.json` に新しいサービスを追加

```json
{
  "id": "new-service",
  "name": "新しいファクタリング会社",
  "slug": "new-service",
  "description": "サービスの説明",
  "fee": { "min": 2.0, "max": 12.0 },
  "speed": "最短2時間",
  "speedMinutes": 120,
  "minAmount": null,
  "maxAmount": null,
  "target": ["法人", "個人事業主"],
  "features": [
    "特徴1",
    "特徴2",
    "特徴3"
  ],
  "documents": ["請求書", "通帳コピー"],
  "twoParty": true,
  "threeParty": true,
  "online": true,
  "company": {
    "name": "会社名",
    "address": "住所",
    "hours": "営業時間"
  },
  "affiliateUrl": "【アフィリエイトリンク】",
  "recommendedFor": ["おすすめポイント1", "おすすめポイント2"],
  "pros": ["メリット1", "メリット2"],
  "cons": ["デメリット1", "デメリット2"]
}
```

### 2. 再ビルド

```bash
npm run build
```

サービスページが自動的に生成されます。

## アフィリエイトリンクの差し替え方法

### 1. `data/services.json` を編集

各サービスの `affiliateUrl` フィールドを実際のアフィリエイトリンクに差し替えます。

```json
"affiliateUrl": "https://example.com/affiliate?id=xxx"
```

### 2. 一括置換（推奨）

エディタの検索・置換機能を使用：

- 検索: `"affiliateUrl": "【アフィリエイトリンク】"`
- 置換: `"affiliateUrl": "実際のアフィリエイトURL"`

### 3. 再ビルド

```bash
npm run build
```

## コラム記事の追加方法

### 1. `data/columns.json` に記事情報を追加

```json
{
  "id": "new-article",
  "slug": "new-article",
  "title": "記事タイトル",
  "description": "記事の説明",
  "publishedAt": "2025-01-28",
  "category": "カテゴリー"
}
```

### 2. `app/column/[slug]/page.tsx` の `columnContents` に本文を追加

```typescript
const columnContents: { [key: string]: string } = {
  // 既存の記事...
  "new-article": `
    <h2>見出し</h2>
    <p>本文...</p>
  `
};
```

### 3. 再ビルド

```bash
npm run build
```

## Vercelへのデプロイ手順

### 1. GitHubリポジトリにプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/factoring-guide.git
git push -u origin main
```

### 2. Vercelでプロジェクトをインポート

1. [Vercel](https://vercel.com)にログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 設定はデフォルトのままで「Deploy」をクリック

### 3. デプロイ完了

数分でデプロイが完了し、URLが発行されます。

## カスタマイズ

### カラーの変更

`tailwind.config.ts` を編集：

```typescript
colors: {
  primary: "#1E40AF",    // メインカラー
  secondary: "#3B82F6",  // サブカラー
  accent: "#F97316",     // アクセントカラー
}
```

### フォントの変更

`app/layout.tsx` でGoogle Fontsを変更：

```typescript
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ['400', '700'],
});
```

## ライセンス

このプロジェクトは商用利用可能です。

## サポート

問題や質問がある場合は、GitHubのIssuesをご利用ください。
