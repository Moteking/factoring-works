# ファクタリングガイド - 初期デザイン更新パッケージ

このパッケージには、初期要件に基づいたデザインの更新ファイルが含まれています。

## 📦 含まれているファイル

### app/
- `page.tsx` - 完全に書き換えられたトップページ
- `globals.css` - 初期要件のカラースキームに更新

### components/
- `Hero.tsx` - ヒーローセクション（新規）
- `Top3Services.tsx` - おすすめTOP3セクション（新規）
- `ComparisonTable.tsx` - 比較表セクション（新規）
- `DiagnosisForm.tsx` - 簡易診断フォーム（新規）

## 🚀 インストール手順

### ステップ1: 既存ファイルをバックアップ（推奨）

```bash
cd /Users/ryuji/Documents/GitHub/factoring-works
mkdir -p backup
cp app/page.tsx backup/
cp app/globals.css backup/
```

### ステップ2: 新しいファイルをコピー

#### app/page.tsx を更新:
```bash
cp app/page.tsx /Users/ryuji/Documents/GitHub/factoring-works/app/
```

#### app/globals.css を更新:
```bash
cp app/globals.css /Users/ryuji/Documents/GitHub/factoring-works/app/
```

#### components/ フォルダを作成（まだない場合）:
```bash
mkdir -p /Users/ryuji/Documents/GitHub/factoring-works/components
```

#### 新しいコンポーネントをコピー:
```bash
cp components/*.tsx /Users/ryuji/Documents/GitHub/factoring-works/components/
```

### ステップ3: GitHub Desktopでコミット

1. GitHub Desktopを開く
2. Changesタブで以下が表示されることを確認:
   - `app/page.tsx` (modified)
   - `app/globals.css` (modified)
   - `components/Hero.tsx` (new)
   - `components/Top3Services.tsx` (new)
   - `components/ComparisonTable.tsx` (new)
   - `DiagnosisForm.tsx` (new)

3. コミットメッセージ:
   ```
   Update to initial design requirements
   
   - Add Hero section with catchphrase and CTAs
   - Add TOP3 ranking cards with medals
   - Add comparison table with all services
   - Add diagnosis form
   - Update color scheme to match requirements
   ```

4. `Commit to main` → `Push origin`

### ステップ4: Netlifyで確認

1. https://app.netlify.com/sites/relaxed-fairy-b10a63/deploys
2. 新しいデプロイが自動開始される
3. `Published` になるまで待つ（約5〜10分）
4. https://factoring.works で確認

## ✅ 確認ポイント

### デザイン
- ✅ ヒーローセクション（青いグラデーション背景）
- ✅ おすすめTOP3（1位=金、2位=銀、3位=銅のバッジ）
- ✅ 比較表（テーブル形式、偶数行に背景色）
- ✅ 簡易診断フォーム（3つの質問）
- ✅ CTAセクション（オレンジ背景）

### カラー
- ✅ Primary: #1E40AF（信頼感のあるブルー）
- ✅ Accent: #F97316（CTAオレンジ）
- ✅ Background: #F8FAFC

### データ
- ✅ 8社のデータとアフィリエイトリンクが保持されている

## 📌 重要な変更点

### 主要な変更
1. **トップページ構成**:
   - ヒーローセクション追加
   - おすすめTOP3セクション追加
   - 比較表セクション追加
   - 簡易診断フォーム追加
   - CTAセクション追加

2. **デザイン**:
   - カラースキームを初期要件に合わせて更新
   - ランキングバッジ（王冠/メダル）追加
   - テーブルレイアウトの比較表

3. **コンポーネント**:
   - 4つの新しいコンポーネントを追加
   - 'use client' ディレクティブを診断フォームに追加（インタラクティブ機能のため）

### データ保持
- ✅ `data/services.json` は変更なし
- ✅ 8社のデータとアフィリエイトリンクは完全に保持
- ✅ `isPartner: true` のサービスのみを表示

## 🔧 トラブルシューティング

### ビルドエラーが出る場合

```bash
cd /Users/ryuji/Documents/GitHub/factoring-works
rm -rf .next node_modules/.cache
npm run build
```

### 型エラーが出る場合

`tsconfig.json` を確認:
```json
{
  "compilerOptions": {
    "strict": false
  }
}
```

### コンポーネントが見つからない場合

`components/` フォルダが正しい場所にあるか確認:
```bash
ls -la /Users/ryuji/Documents/GitHub/factoring-works/components/
```

期待される出力:
```
Hero.tsx
Top3Services.tsx
ComparisonTable.tsx
DiagnosisForm.tsx
```

## 📞 サポート

問題が発生した場合は、以下の情報を共有してください:
1. エラーメッセージ
2. `npm run build` の出力
3. GitHub Desktopのスクリーンショット
