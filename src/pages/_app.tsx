import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/components/Base"
import Head from "next/head"
import Script from "next/script"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ParallaxProvider } from "react-scroll-parallax"
import NextNProgress from "nextjs-progressbar"

config.autoAddCss = false

export default function ShootMe({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA}`}
      />
      <NextNProgress color="#9427E7" options={{ showSpinner: false }} />
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  )
}
