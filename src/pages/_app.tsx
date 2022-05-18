import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas);
library.add(fab);

export default function SkepfuskyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}
