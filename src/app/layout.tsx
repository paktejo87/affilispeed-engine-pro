"use client";

import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <title>AffiliSpeed Engine Pro — Platform Affiliate Tercepat</title>
        <meta name="description" content="Buat landing page dengan kecepatan instan, pertahanan cloaking siluman, dan konversi tinggi untuk affiliate marketer profesional." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="mesh-bg">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
