import Head from "next/head"

interface ContainerProps {
  children: React.ReactNode
  t: string
  d?: string
  className?: string
}

export default function Container(props: ContainerProps) {
  const { t: title, d: description } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <main className={props.className}>{props.children}</main>
    </>
  )
}
