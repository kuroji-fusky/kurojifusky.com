import Head from "next/head";

interface IContainerProps {
  title: string;
  description: string;
  keywords?: string[];
  children: React.ReactNode;
}

export default function Container({ title, description, keywords, children }: IContainerProps) {
  const SITE_NAME = "skepfusky";

  return (
    <>
      <Head>
        <title>{title} • {SITE_NAME}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords?.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/static/avatar/07.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@skepfuskyjs" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta name="twitter:image" content="/static/avatar/07.png" />
      </Head>
      {children}
    </>
  );
};