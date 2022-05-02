import Head from "next/head";

interface IBaseHeadProps {
  title: string;
  description: string;
  url?: string;
  keywords?: string[];
}
export default function BaseHead({ title, description, url, keywords }: IBaseHeadProps) {
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
      <meta name="theme-color" content="#fff" />
      {/* <meta name="twitter:image" content="https://www.example.com/image.jpg" /> */}
    </Head>
  )
};

export function BaseHeadLanding() {
  const description = "A website for skepfusky's works and stuff, I dunno";
  
  return (
    <Head>
      <title>skepfusky</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta property="og:title" content="skepfusky" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/static/avatars/07.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="skepfusky" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@skepfuskyjs" />
      <meta name="twitter:title" content="skepfusky" />
      <meta name="twitter:description" content={description} />
      <meta name="theme-color" content="#fff" />
      <meta name="twitter:image" content="/static/avatars/07.jpg" />
    </Head>
  );
}