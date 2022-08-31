import Container from "@/components/base/Container"
import { NavbarScrollContext } from "@/utils/Context"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import Image from "next/image"
import { InView } from "react-intersection-observer"
import ReactMarkdown from "react-markdown"
import { useContext } from "react"

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
      <div className="max-w-[1000px] mx-auto">
        <div className="absolute top-0 left-0 h-[69%] w-full -z-1 blur-3xl opacity-40">
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
          rootMargin="-145px 0px 0px 0px"
          className="relative w-full h-[350px] mt-20 rounded-xl overflow-hidden"
        >
          <Image
            src={attributes.cover.data.attributes.url}
            alt={attributes.cover.data.attributes.caption}
            layout="fill"
            objectFit="cover"
          />
        </InView>
        <article className="my-5 flex flex-col gap-y-5">
          <h1>{attributes.title}</h1>
          <p>{attributes.description}</p>
          <span className="uppercase text-sm inline-block">
            {attributes.blogtype.replace(/_/g, " ")}
          </span>
        </article>
        <hr />
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => <h2 className="my-3" {...props} />,
            p: ({ node, ...props }) => (
              <p className="leading-[1.75rem] mb-3" {...props} />
            )
          }}
        >
          {attributes.body}
        </ReactMarkdown>
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
