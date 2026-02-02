import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ファクタリング比較 | factoring.works",
  description: "ファクタリングサービスを徹底比較。手数料、入金スピード、対応規模で最適なサービスが見つかります。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
