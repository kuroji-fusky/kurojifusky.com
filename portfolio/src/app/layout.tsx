import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LenisSmooth from "@/components/LenisSmooth"
import { Navbar, Footer } from "@/components/Base"

const inter = Inter({ subsets: ["latin"], variable: "--f-inter" })

const title = "Kuroji Fusky - a silly talented dog on the internet"
const desc = "lol"

export const metadata: Metadata = {
  title,
  description: desc,
  openGraph: {
    title,
    description: desc
  },
  // noindex stuff is temporary
  robots: "noai,noimageai,noindex,nofollow",
  generator: "Your mom",
  other: {
    copyright: "Kerby Keith Aquino"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={inter.className}>
      <head>
        <script
          async
          src="https://analytics.eu.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID || ""}
        />
        <link rel="preconnect" href="https://res.cloudinary.com/" />
      </head>
      <body className="bg-kuro-dark1 text-kuro-lavender-50">
        <LenisSmooth>
          <noscript>
            <div className="fixed inset-0 z-[999]">
              Please enable JavaScript you dingus
            </div>
          </noscript>
          <div id="__kuro">
            <Navbar />
            {children}
            <Footer />
          </div>
        </LenisSmooth>
      </body>
    </html>
  )
}
