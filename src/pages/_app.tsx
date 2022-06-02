import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer";
import { useEffect } from "react";

config.autoAddCss = false;

type NestedComponents = AppProps & {
	Component: AppProps["Component"] & {
		PageLayout?: React.ComponentType;
	};
};

export default function ShitApp({ Component, pageProps }: NestedComponents | any) {
  useEffect(() => {
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.setAttribute("sf-reduced-motion", "enabled");
    } else {
      document.body.setAttribute("sf-reduced-motion", "disabled");
    }
  }, []);

	return (
		<>
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
