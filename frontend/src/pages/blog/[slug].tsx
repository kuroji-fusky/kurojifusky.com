import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

const url = process.env.STRAPI_URL

const client = new ApolloClient({
  uri: `${url}/graphql`,
  cache: new InMemoryCache()
})

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
    fallback: true
  }
}

export default function BlogContent({ attributes }: any) {
  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="relative w-full h-[400px]">
        <Image
          src={attributes.cover.data.attributes.url}
          alt={attributes.cover.data.attributes.caption}
          layout="fill"
					objectFit="cover"
        />
      </div>
      <h2>{attributes.title}</h2>
      <span>{attributes.description}</span>
      <span>{attributes.blogtype}</span>
      <ReactMarkdown>{attributes.body}</ReactMarkdown>
    </div>
  )
}
