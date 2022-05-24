import Head from "next/head";

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
	keywords
}: ISEOHeadProps) {
	const SITE_NAME = "skepfusky";
	return (
		<Head>
			<title>
				{title} • {SITE_NAME}
			</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#fff" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/favicon.ico" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{image && <meta property="og:image" content={image} />}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content="@skepfuskyjs" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
		</Head>
	);
}
