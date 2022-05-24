import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function ShitApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
