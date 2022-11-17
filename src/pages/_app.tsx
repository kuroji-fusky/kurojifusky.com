import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/globals.scss"
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import Head from "next/head"

import NextNProgress from "nextjs-progressbar"
import { Layout } from "@/components/Base"
import * as ga from "@/utils/ga"

import { config } from "@fortawesome/fontawesome-svg-core"
import { disableOnDev } from "@/utils/envHandler"
import { MotionConfig } from "framer-motion"
import { hotjar } from "react-hotjar"
import Script from "next/script"

config.autoAddCss = false

export default function Cutie({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (disableOnDev) {
      const routeChange = (url: string) => ga.pageView(url)

      router.events.on("routeChangeComplete", routeChange)
      return () => router.events.off("routeChangeComplete", routeChange)
    }
  }, [router.events])

  useEffect(() => {
    if (disableOnDev) {
      hotjar.initialize(3249585, 6)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {disableOnDev && (
        <Script
          id="ga"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
					window.dataLayer = window.dataLayer || [];
					window.gtag = function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
					
					gtag('config', '${process.env.GA}', { 
						page_path: window.location.pathname,
					});
					`
          }}
        />
      )}
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
