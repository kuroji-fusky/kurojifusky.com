import Container from "@/components/base/Container"
import BlogItem from "@/components/items/BlogItem"
import HeaderHeroItem from "@/components/items/HeaderHeroItem"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { format, parseISO } from "date-fns"
import styles from "@/styles/pages/Blog.module.scss"

export default function Blog({ articles }: any) {
  const title = "Blog"
  const description =
    "A place where I catalog my progress and my other bullshit I do lol"

  return (
    <Container title={title} description={description}>
      <HeaderHeroItem wrap>
        <h1>{title}</h1>
        <p>{description}</p>
      </HeaderHeroItem>
      <div className={styles["grid-container"]}>
        {articles
          .slice(0)
          .reverse()
          .map((article: any) => (
            <BlogItem
              key={article.attributes.createdAt}
              title={article.attributes.title}
              img={article.attributes.cover.data.attributes.url}
              description={article.attributes.description}
              blogtype={article.attributes.blogtype}
              link={article.attributes.slug}
              date={format(
                parseISO(article.attributes.publishDate),
                "MMMM d, yyyy"
              )}
            />
          ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query {
        articles {
          data {
            attributes {
              createdAt
              slug
              title
              description
              blogtype
              publishDate
              cover {
                data {
                  attributes {
                    url
                    caption
                  }
                }
              }
            }
          }
        }
      }
    `
  })

  return {
    props: {
      articles: data.articles.data
    }
  }
}
