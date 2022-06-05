import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer";
import Script from "next/script";

config.autoAddCss = false;

type NestedComponents = AppProps & {
	Component: AppProps["Component"] & {
		PageLayout?: React.ComponentType;
	};
};

export default function ShitApp({
	Component,
	pageProps
}: NestedComponents | any) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload">
				{`window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {\npage_path: window.location.pathname,\n});`}
			</Script>
			{Component.PageLayout ? (
				<Component.PageLayout>
					<Component {...pageProps} />
				</Component.PageLayout>
			) : (
				<Component {...pageProps} />
			)}
			<Footer />
		</>
	);
}
