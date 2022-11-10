import { useRouter } from "next/router"
import Head from "next/head"
import { useContext } from "react"
import { NavbarContext, setPageNameOnly } from "@/utils/Context"

interface ContainerProps extends Omit<Partial<Components>, "id"> {
  title?: string
  description?: string
  wrap?: boolean
}

export function Container(props: ContainerProps) {
  const router = useRouter()
  const { setPageName } = useContext(NavbarContext) as setPageNameOnly

  const url = `https://skepfusky.xyz${router.asPath}`

  const title =
    router.pathname == "/" ? props.title : `${props.title} | skepfusky`

  setPageName(props.title as string)

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
      <main
        className={
          !props.wrap
            ? `relative z-1${props.className ? " " + props.className : ""}`
            : `relative z-1 max-w-screen-2xl mx-auto px-7${
                props.className ?? ""
              }`
        }
        style={props.style ?? undefined}
      >
        {props.children}
      </main>
    </>
  )
}
