import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ScaleUp Digital',
  description: 'Jasa pembuatan Website, Konten Media Sosial, dan Iklan Marketing Digital Terbaik saat ini. Design Pasti keren dan kekinian, siap pasang FB ads, Tik-tok Ads, dan Instagram Ads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
