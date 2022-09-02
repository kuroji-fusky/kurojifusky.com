import { useContext } from "react"
import Image from "next/image"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { NavbarScrollContext } from "@/utils/Context"
import Container from "@/components/base/Container"
import { InView } from "react-intersection-observer"
import ReactMarkdown from "react-markdown"
import styles from "@/styles/pages/BlogPage.module.scss"
import { format, parseISO } from "date-fns"
// @ts-ignore
import remarkHeadingId from "remark-heading-id"

const url = process.env.STRAPI_URL

const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache()
})

export default function BlogContent({ attributes }: any) {
  const { isScrolled } = useContext(NavbarScrollContext)

  return (
    <Container
      wrap
      title={`${attributes.title} | skepfusky blog`}
      description={attributes.description}
    >
      <div className={styles.wrapper}>
        <div className={styles.backdrop}>
          <Image
            src={attributes.cover.data.attributes.url}
            alt={attributes.cover.data.attributes.caption}
            layout="fill"
            objectFit="cover"
            quality={15}
          />
        </div>
        <InView
          onChange={(inView) => isScrolled(inView)}
          className={styles["image-wrapper"]}
        >
          <Image
            src={attributes.cover.data.attributes.url}
            alt={attributes.cover.data.attributes.caption}
            layout="fill"
            objectFit="cover"
          />
        </InView>
        <header className={styles.info}>
          <div className={styles.details}>
            <span>{attributes.blogtype.replace(/_/g, " ")}</span>
            <span className={styles["blog-date"]}>
              {format(parseISO(attributes.publishDate), "iiii MMMM d, yyyy")}
            </span>
          </div>
          <h1>{attributes.title}</h1>
          <p>{attributes.description}</p>
        </header>
        <hr />
        <article className={styles["article-parser"]}>
          <ReactMarkdown remarkPlugins={[remarkHeadingId]}>
            {attributes.body}
          </ReactMarkdown>
        </article>
      </div>
    </Container>
  )
}

export async function getStaticProps({ params }: any) {
  const { data }: any = await client.query({
    query: gql`
      query {
        articles(filters: { slug: { eq: "${params.slug}" } }) {
          data {
            attributes {
              title
              description
              blogtype
              publishDate
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              body
            }
          }
        }
      }
    `
  })

  return {
    props: data.articles.data[0],
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        {
          articles {
            data {
              attributes {
                slug
              }
            }
          }
        }
      `
    })
  }
  const res = await fetch(`${url}/graphql`, fetchParams)
  const posts = await res.json()

  const paths = posts.data.articles.data.map((post: any) => {
    return { params: { slug: post.attributes.slug } }
  })

  return {
    paths: paths || [],
    fallback: false
  }
}
