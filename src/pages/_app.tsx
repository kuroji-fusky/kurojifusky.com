import "@/styles/globals.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import Head from "next/head"

import NextNProgress from "nextjs-progressbar"
import { hotjar } from "react-hotjar"
import { Layout } from "@/components/Base"
import * as ga from "@/utils/ga"

import { config } from "@fortawesome/fontawesome-svg-core"
import { disableOnDev } from "@/utils/envHandler"
import { MotionConfig } from "framer-motion"
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
    if (disableOnDev) hotjar.initialize(3249585, 6)
  })

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        data-website-id={process.env.UMAMI_ID}
        src="https://umami.kurofusky.xyz/umami.js"
        strategy="lazyOnload"
      />
      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `
          function(h,o,t,j,a,r){
					.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        	h._hjSettings={hjid:3249585,hjsv:6};
        	a=o.getElementsByTagName('head')[0];
        	r=o.createElement('script');r.async=1;
        	r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        	a.appendChild(r);
    			})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');}}
				`
        }}
      />
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
