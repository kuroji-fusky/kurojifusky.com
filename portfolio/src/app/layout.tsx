import "./globals.css"
import type { Metadata } from "next"
import { Inter, Unbounded } from "next/font/google"
import clsx from "clsx"
import LenisSmooth from "@/components/LenisSmooth"
import { Navbar, Footer } from "@/components/Base"

const inter = Inter({ subsets: ["latin-ext"] })
const unbounded = Unbounded({ subsets: ["latin"], variable: "--k-header" })

const title = "Kuroji Fusky - a silly talented fluffy boi on the internet"
const desc = "A 21-year-old self-taught hobbyist from the Philippines"

export const metadata: Metadata = {
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
    siteName: "Kuroji Fusky",
    images: [
      {
        url: "/api/og",
        width: 1280,
        height: 630
      }
    ]
  },
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
    <html
      lang="en"
      dir="ltr"
      className={clsx(inter.className, unbounded.variable)}
    >
      <head>
        <script
          async
          src="https://analytics.eu.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID || ""}
        />
        <link rel="preconnect" href="https://res.cloudinary.com/" />
      </head>
      <body className="bg-kuro-dark2 text-kuro-lavender-50 !overflow-x-hidden">
        <LenisSmooth>
          <noscript>
            <div className="fixed inset-0 z-[999]">
              Please enable JavaScript you dingus
            </div>
          </noscript>
          <div id="kuro-ui">
            <Navbar />
            <div className="min-h-[100dvh]">{children}</div>
            <Footer />
          </div>
        </LenisSmooth>
      </body>
    </html>
  )
}
