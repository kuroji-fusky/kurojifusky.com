import "@/styles/globals.scss"

import type { AppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"
import { Inter, JetBrains_Mono, Open_Sans } from "@next/font/google"


import Layout from "../components/layout"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false


import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains-mono" })

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "600", "700", "800"]
})

export default function App({ Component, pageProps }: AppProps) {
  useAppendHTMLClass(inter.variable, openSans.variable, jetbrains.variable)
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <Analytics mode="auto" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

function useAppendHTMLClass(...className: string[]) {
  useEffect(() => {
    const htmlRoot = document.documentElement
    htmlRoot.classList.add(...className)
  }, [className])
}
