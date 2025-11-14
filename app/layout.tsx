import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "NAPFI - Invest in movements you believe in",
  description: "Build vaults that grow with you. Simple, automated yield for creators, communities, and anyone who wants their money to work.",
  generator: "v0.app",
  alternates: {
    canonical: "https://napfi.example/",
  },
  openGraph: {
    siteName: "NAPFI",
    title: "Invest in movements you believe in | NAPFI",
    description: "Build vaults that grow with you. Simple, automated yield for creators, communities, and anyone who wants their money to work.",
    type: "website",
    url: "https://napfi.example/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in movements you believe in | NAPFI",
    description: "Build vaults that grow with you. Simple, automated yield for creators, communities, and anyone who wants their money to work.",
    site: "@napfi",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
