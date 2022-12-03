// Usual React shit
import { useEffect } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import Head from "next/head"

// Analytics
import { Analytics } from "@vercel/analytics/react"
import { hotjar } from "react-hotjar"
import { Layout } from "@/components/Base"

// Stuff for dev and configs
import { config } from "@fortawesome/fontawesome-svg-core"
import { disableOnDev } from "@/utils/envHandler"

// Components
import NextNProgress from "nextjs-progressbar"
import { MotionConfig } from "framer-motion"

// Styles
import "@/styles/globals.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

export default function Cutie({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (disableOnDev) hotjar.initialize(3249585, 6)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress color="#9427E7" options={{ showSpinner: false }} />
      <MotionConfig reducedMotion="user">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {disableOnDev && <Analytics />}
      </MotionConfig>
    </>
  )
}
