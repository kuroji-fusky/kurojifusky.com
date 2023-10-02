import "./globals.css"
import type { Metadata } from "next"
import { Inter, Open_Sans } from "next/font/google"
import clsx from "clsx"

const inter = Inter({ subsets: ["latin"], variable: "--f-inter" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--f-open-sans" })

const title = "I wanna die"
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
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com/" />
        <script
          async
          src="https://analytics.eu.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID || ""}
        />
      </head>
      <body className={clsx(inter.variable, openSans.variable)}>
        <noscript>
          <div className="fixed inset-0 z-[999]">
            Please enable JavaScript you dingus
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
