import { useEffect } from "react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/globals.scss"
import Layout from "@/components/base/Layout"
import * as ga from "../lib/google-analytics"

config.autoAddCss = false

export default function ShitApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url)
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => router.events.off("routeChangeComplete", handleRouteChange)
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
