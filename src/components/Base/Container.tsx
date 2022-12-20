import Head from "next/head"
import { useRouter } from "next/router"

interface ContainerProps {
  children: React.ReactNode
  t: string
  d: string
  wrap?: boolean
}

export default function Container(props: ContainerProps) {
  const router = useRouter()
  const SITE_PATH = `https://kurofusky.xyz${router.pathname}`

  const wrapContents = props.wrap ? "wrapped" : undefined

  return (
    <>
      <Head>
        <title>{props.t}</title>
        <meta name="description" content={props.d} />
        <meta property="og:title" content={props.t} />
        <meta property="og:description" content={props.d} />
        <meta property="og:url" content={SITE_PATH} />
        <meta name="twitter:title" content={props.t} />
        <meta name="twitter:description" content={props.d} />
        <meta name="twitter:url" content={SITE_PATH} />
        <link rel="canonical" href={SITE_PATH} />
      </Head>

      <main className={wrapContents}>{props.children}</main>
    </>
  )
}
