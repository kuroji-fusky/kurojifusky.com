import Head from "next/head"
import { useRouter } from "next/router"
interface ISEOHeadProps {
	title?: string
	description?: string
	image?: string
	keywords?: string[]
}

export default function SEOHead({
	title,
	description,
	image,
	keywords = ["skepfusky", "kokoro husky", "furry", "music", "programming"]
}: ISEOHeadProps) {
	const router = useRouter()
	const SITE_NAME = "skepfusky"

	const titleMain = "Official Website of that stupid autistic dude"
	const descMain =
		"Hi! I'm skepfusky (or Kokoro Husky), I'm a 20-year-old self-employed and self-taught hobbyist from the Philippines!"

	let titleGlobal = `${title} | ${SITE_NAME}`

	return (
		<Head>
			{router.pathname === "/" ? (
				<>
					<title>{titleMain}</title>
					<meta name="title" content={titleMain} />
					<meta name="description" content={descMain} />
				</>
			) : (
				<>
					<title>{titleGlobal}</title>
					<meta name="title" content={titleGlobal} />
					<meta name="description" content={description} />
				</>
			)}
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta name="theme-color" content="#9427e7" />
			<link rel="canonical" href={`https://skepfusky.xyz${router.asPath}`} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			{router.pathname === "/" ? (
				<>
					<meta property="og:title" content={titleMain} />
					<meta property="og:description" content={descMain} />
				</>
			) : (
				<>
					<meta property="og:title" content={titleGlobal} />
					<meta property="og:description" content={description} />
				</>
			)}
			{image && <meta property="og:image" content={image} />}
			<meta
				property="og:url"
				content={`https://skepfusky.xyz${router.asPath}`}
			/>

			{/* Twitter */}
			{router.pathname === "/" ? (
				<>
					<meta name="twitter:title" content={titleMain} />
					<meta name="twitter:description" content={descMain} />
				</>
			) : (
				<>
					<meta name="twitter:title" content={titleGlobal} />
					<meta name="twitter:description" content={description} />
				</>
			)}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content="@skepfuskyjs" />
			{image && <meta name="twitter:image" content={image} />}
			<meta
				name="twitter:url"
				content={`https://skepfusky.xyz${router.asPath}`}
			/>
		</Head>
	)
}
