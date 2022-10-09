import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/components/Base"
import Head from "next/head"
import Script from "next/script"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ParallaxProvider } from "react-scroll-parallax"
import NextNProgress from "nextjs-progressbar"
import { MDXProvider } from "@mdx-js/react"
import Notification from "@/components/Notification"

config.autoAddCss = false

export default function ShootMe({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <NextNProgress color="#9427E7" options={{ showSpinner: false }} />
      <Notification
        heading="Website under construction"
        content={
          <>
            Most of the content is either missing or incomplete, and is
            currently in the process of being added!
          </>
        }
      />
      <ParallaxProvider>
        <MDXProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ParallaxProvider>
    </>
  )
}
