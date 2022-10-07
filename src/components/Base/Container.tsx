import { useRouter } from "next/router"
import Head from "next/head"
import styles from "./Base.module.scss"
import { LayoutProps } from "./Layout"

interface ContainerProps extends LayoutProps {
  title: string
  description: string
  className?: string | undefined
  wrap?: boolean
}

export function Container(props: ContainerProps) {
  const router = useRouter()
  const url = `https://skepfusky.xyz${router.asPath}`

  return (
    <>
      <Head>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:url" content={url} />
        <title>{props.title}</title>
      </Head>
      <main
        id={styles[!props.wrap ? "content" : "content-wrap"]}
        className={props.className}
      >
        {props.children}
      </main>
    </>
  )
}
