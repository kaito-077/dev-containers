import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "セミナー環境",
  description: "Next.js + Spring Boot + PostgreSQL 環境構築セミナー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
