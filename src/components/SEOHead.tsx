import Head from "next/head";
import { useRouter } from "next/router";
interface ISEOHeadProps {
	title: string;
	description: string;
	image?: string;
	keywords?: string[];
}

export default function SEOHead({
	title,
	description,
	image,
	keywords = [
		"skepfusky",
		"kokoro husky",
		"furry",
		"filipino",
		"music",
		"programming"
	]
}: ISEOHeadProps) {
	const router = useRouter();
	const SITE_NAME = "skepfusky";

	return (
		<Head>
			<title>
				{title} • {SITE_NAME}
			</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#9427e7" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{image && <meta property="og:image" content={image} />}
			<meta
				property="og:url"
				content={`https://skepfusky.xyz${router.asPath}`}
			/>
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:url"
				content={`https://skepfusky.xyz${router.asPath}`}
			/>
			<meta name="twitter:creator" content="@skepfuskyjs" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/favicon.ico" />
			<link rel="canonical" href={`https://skepfusky.xyz${router.asPath}`} />
		</Head>
	);
}
