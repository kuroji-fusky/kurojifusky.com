import type { AppProps } from "next/app"
import { useCallback, useEffect, useState } from "react"
import Script from "next/script"
import { config } from "@fortawesome/fontawesome-svg-core"
import { ParallaxDisable } from "@/models/Context"
import Footer from "@/components/base/Footer"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/styles/globals.scss"

config.autoAddCss = false

type NestedComponents = AppProps & {
	Component: AppProps["Component"] & {
		PageLayout?: React.ComponentType
	}
}

export default function ShitApp({
	Component,
	pageProps
}: NestedComponents | any) {
	const [disableParallax, setDisableParallax] = useState<boolean>(false)
	useCallback(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("click", () => {
				if (disableParallax !== false) {
					setDisableParallax(true)
					return
				}
				setDisableParallax(false)
			})
		}
	}, [disableParallax])

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Detect of toggleParallax is true if not then set to false
			window.addEventListener("resize", () => {
				if (window.innerWidth < 1220) {
					setDisableParallax(true)
				} else {
					setDisableParallax(false)
				}
			})
		}
	}, [])

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script
				strategy="lazyOnload"
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
          `
				}}
			/>
			<ParallaxDisable.Provider value={{ disableParallax, setDisableParallax }}>
				{Component.PageLayout ? (
					<Component.PageLayout>
						<Component {...pageProps} />
					</Component.PageLayout>
				) : (
					<Component {...pageProps} />
				)}
				<Footer />
			</ParallaxDisable.Provider>
		</>
	)
}
