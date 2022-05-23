import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
	faCode,
	faExternalLink,
	faHeart,
	faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faInstagram,
	faItunesNote,
	faSpotify,
	faTwitter,
	faYoutube
} from "@fortawesome/free-brands-svg-icons";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faHeart, faCode, faInfoCircle, faExternalLink);
library.add(
	faGithub,
	faInstagram,
	faItunesNote,
	faSpotify,
	faTwitter,
	faYoutube
);

export default function ShitApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
