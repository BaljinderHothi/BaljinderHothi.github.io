import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrumentserif" })

export const metadata: Metadata = {
  title: "Baljinder | Tree of My Career",
  description:
    "First-generation CS student, researcher @ UW, ex @ AWS & Meta. Building cool things at the intersection of ML and software engineering.",
  keywords: ["Baljinder Hothi", "Software Engineer", "Machine Learning", "AWS", "Meta", "Research"],
  authors: [{ name: "Baljinder Hothi" }],
  openGraph: {
    title: "Baljinder | Tree of My Career",
    description: "First-generation CS student, researcher @ UW, ex @ AWS & Meta.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
