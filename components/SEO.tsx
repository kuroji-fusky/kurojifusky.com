import Head from "next/head";

interface BaseHeadProps {
  title: string;
  description: string;
  url?: string;
  keywords?: string[];
}
export default function BaseHead({ title, description, url, keywords }: BaseHeadProps) {

  const SITE_NAME = 'skepfusky'

  return(
    <Head>
      <title>{title} - {SITE_NAME}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content="https://www.example.com/image.jpg" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@skepfuskyjs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://www.example.com/image.jpg" /> */}
    </Head>
  )
};
