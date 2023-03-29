import { useRouter } from "next/router"
import Head from "next/head"
import { useContext, useEffect } from "react"
import { NavbarContext, setPageNameOnly } from "contexts"
import styles from "./Container.module.scss"

interface ContainerProps extends Omit<Partial<Components>, "id"> {
  title: string
  description: string
  wrap?: boolean
}

export function Container(props: ContainerProps) {
  const router = useRouter()
  const { setPageName } = useContext(NavbarContext) as setPageNameOnly

  const url = `https://kurojifusky.com${router.asPath}`
  const basePath = router.pathname === "/"
  const title = basePath ? props.title : `${props.title} | kurofusky`

  useEffect(() => {
    const detect404 = props.title === "404 Not Found" ? "404 Page" : props.title

    setPageName(detect404)
  }, [props.title, setPageName])

  const detectClassNames = !props.className ? "" : ` ${props.className}`

  const wrapContents = !props.wrap
    ? `${styles["no-wrap"]}${detectClassNames}`
    : `${styles["wrap-contents"]}${detectClassNames}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:site" content="@skepfuskyjs" />
        <meta name="twitter:creator" content="@skepfuskyjs" />
        <link rel="canonical" href={url} />
      </Head>
      <main className={wrapContents} style={props.style ?? undefined}>
        {props.children}
      </main>
    </>
  )
}
