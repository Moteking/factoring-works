# Factoring Works - ファクタリング比較サイト

提携中のファクタリングサービス8社を徹底比較するNext.jsアプリケーション

## 📦 含まれる8社

1. **ラボル（labol）** - 手数料10%、最短60分
2. **株式会社No.1** - 手数料1〜15%、最短30分
3. **トップ・マネジメント** - 手数料0.5〜12.5%、7秒見積もり
4. **ジャパンマネジメント** - 手数料3〜20%、希望入金日95%
5. **のりかえPLUS** - 手数料5〜15%、乗り換えで5%削減
6. **JPS** - 手数料2〜10%、最大3億円
7. **ペイブリッジ** - 手数料0.5〜10%、広告業界特化
8. **FREENANCE** - 手数料3〜10%、損害賠償保険付き

## 🚀 セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開く

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果は out/ フォルダに生成されます
```

## 📁 プロジェクト構造

```
factoring-works/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ（一覧）
│   ├── globals.css        # グローバルCSS
│   └── services/
│       └── [slug]/
│           └── page.tsx   # サービス詳細ページ
├── data/
│   └── services.json      # サービスデータ（8社）
├── next.config.js         # Next.js設定
├── package.json           # 依存関係
└── README.md             # このファイル
```

## 🔧 Netlify デプロイ設定

### Build settings
- **Build command**: `npm run build`
- **Publish directory**: `out`

### 環境変数
特に必要ありません

## ✨ 機能

- ✅ 8社のファクタリングサービス比較
- ✅ 手数料、入金スピード、最大金額の表示
- ✅ アフィリエイトリンク設定済み
- ✅ レスポンシブデザイン
- ✅ 静的エクスポート（高速）
- ✅ SEO最適化

## 📝 ライセンス

Private

## 🔗 リンク

- **本番URL**: https://factoring.works
- **Netlify**: https://app.netlify.com/sites/relaxed-fairy-b10a63
