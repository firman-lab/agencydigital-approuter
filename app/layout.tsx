import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bikin Web Ga Pake Ribet - WebSkala",
  description:
    "Jasa pembuatan Website, Konten Media Sosial, dan Iklan Marketing Digital Terbaik saat ini. Design Pasti keren dan kekinian, siap pasang FB ads, Tik-tok Ads, dan Instagram Ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon/boxes.svg"
          type="image/svg"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/icon/boxes.svg"
          type="image/svg"
          sizes="32x32"
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
