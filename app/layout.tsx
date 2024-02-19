import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PTHGCVV9S1"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-PTHGCVV9S1');
          `}
        </Script>
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
