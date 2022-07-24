import { config } from "@fortawesome/fontawesome-svg-core"
import type { AppProps } from "next/app"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/globals.scss"
import Layout from "@/components/base/Layout"

config.autoAddCss = false

export default function ShitApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
