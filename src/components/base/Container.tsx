import Head from "next/head"
import { IContainerProps } from "@/utils/Interface"
import { useRouter } from "next/router"
import baseStyles from "@/styles/Base.module.scss"

export default function Container({
  title,
  description,
  image,
  children,
  noWrapper
}: IContainerProps) {
  const router = useRouter()

  if (router.pathname === "/") {
    title = "skepfusky"
    description = "skepfusky's personal website"
  }

  let url = `https://skepfusky.xyz${router.pathname}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="portfoilo, skepfusky, Kokoro Husky, projects"
        />
        <meta name="theme-color" content="#bb3eed" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@skepfuskyjs" />
        <meta name="twitter:creator" content="@skepfuskyjs" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <link rel="canonical" href={url} />
      </Head>
      {noWrapper ? (
        <>{children}</>
        ) : (
        <div className={baseStyles["content-wrapper"]}>{children}</div>
      )}
    </>
  )
}
