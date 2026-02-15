# ファクタリング紹介メディア

Next.js + TypeScript + Tailwind CSS で構築されたファクタリング会社比較サイト

## 🚀 セットアップ

### インストール

```bash
npm install
# または
yarn install
```

### 開発サーバー起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
npm start
```

## 📁 プロジェクト構造

```
factoring-media/
├── app/
│   ├── layout.tsx          # ルートレイアウト (Header, Footer, GTM)
│   ├── page.tsx            # トップページ
│   └── globals.css         # グローバルCSS
├── components/
│   ├── Header.tsx          # ヘッダー
│   ├── Footer.tsx          # フッター
│   ├── HeroSection.tsx     # ヒーローセクション
│   ├── ReasonsSection.tsx  # 選ばれる理由
│   ├── CriteriaSection.tsx # 優良基準
│   ├── FlowSection.tsx     # 利用の流れ
│   ├── ComparisonTable.tsx # 比較表
│   ├── TestimonialsSection.tsx # お客様の声
│   └── FAQSection.tsx      # よくある質問
├── data/
│   └── companies.ts        # ファクタリング会社データ
├── public/                 # 静的ファイル
├── next.config.js          # Next.js設定
├── tailwind.config.ts      # Tailwind設定
├── tsconfig.json           # TypeScript設定
└── package.json            # パッケージ情報
```

## ✅ TODO

- [ ] `GTM-XXXXXXX` を実際のGoogle Tag Manager IDに置き換え
- [ ] `/privacy`, `/terms`, `/company` ページの作成
- [ ] OGP画像の追加
- [ ] SEO最適化（メタタグ、構造化データ）
- [ ] モバイル最適化テスト

## 🎨 デザイン

- **カラー**: オレンジ系 (#FF8C00) のビジネス向けデザイン
- **フォント**: Noto Sans JP
- **レスポンシブ**: モバイル・タブレット対応

## 📊 アフィリエイトトラッキング

A8.netアフィリエイトリンクのクリックを自動トラッキング:
- イベント名: `affiliate_click`
- パラメータ: `company_id`, `company_name`, `link_url`

## 🔗 参考

- 参考サイト: [faclog.jp](https://faclog.jp/factoring-bulk-estimate-assessment#)
- Next.js: [https://nextjs.org/](https://nextjs.org/)
- Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
