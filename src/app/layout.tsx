import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AffiliSpeed Engine Pro — Platform Affiliate Tercepat",
  description:
    "Buat landing page dengan kecepatan instan, pertahanan cloaking siluman, dan konversi tinggi untuk affiliate marketer profesional.",
  keywords: [
    "affiliate marketing",
    "landing page builder",
    "cloaking",
    "meta ads",
    "shopee affiliate",
    "tiktok affiliate",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="mesh-bg">{children}</body>
    </html>
  );
}
