import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ファクタリング会社比較一覧【全9社】手数料・入金スピード・対応対象で徹底比較",
  description: "ファクタリング会社9社を一覧で比較。手数料・入金スピード・対応対象でフィルター検索可能。法人向け、個人事業主向けのファクタリングサービスを簡単に比較できます。",
  keywords: "ファクタリング 比較,ファクタリング一覧,ファクタリング 手数料,ファクタリング スピード,ファクタリング 個人事業主",
  alternates: {
    canonical: "https://factoring-guide.vercel.app/compare",
  },
  openGraph: {
    title: "ファクタリング会社比較一覧【全9社】",
    description: "手数料・入金スピード・対応対象で徹底比較。フィルター機能で簡単検索。",
    url: "https://factoring-guide.vercel.app/compare",
    type: "website",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
