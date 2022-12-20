import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { Layout } from "@/components/Base"

import {
  Inter,
  JetBrains_Mono,
  Open_Sans,
  Ubuntu_Mono,
} from "@next/font/google"

import useAppendHTMLClass from "@/hooks/useAppendHTMLClass"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
})

const sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  preload: true,
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

const uboontu = Ubuntu_Mono({
  variable: "--font-ubuntu",
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  useAppendHTMLClass(
    inter.variable,
    sans.variable,
    jetbrains.variable,
    uboontu.variable
  )

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
