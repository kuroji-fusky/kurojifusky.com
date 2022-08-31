import Container from "@/components/base/Container"
import BlogItem from "@/components/items/BlogItem"
import HeaderHeroItem from "@/components/items/HeaderHeroItem"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"

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
              slug
              title
              description
              cover {
                data {
                  attributes {
                    url
                    caption
                  }
                }
              }
              blogtype
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

export default function Blog({ articles }: any) {
  const title = "Blog"
  const description =
    "A place where I catalog my progress and my uninteresting life"
  console.log(articles)

  return (
    <Container title={title} description={description}>
      <HeaderHeroItem wrap>
        <h1>Blog</h1>
        <p>A place where I catalog my progress and my uninteresting life</p>
      </HeaderHeroItem>
      <div className="grid grid-cols-3 gap-4 max-w-screen-2xl px-7 pt-7 mx-auto">
        {articles.map((article: any) => (
          <BlogItem
            key={article.attributes.title}
            title={article.attributes.title}
            img={article.attributes.cover.data.attributes.url}
            description={article.attributes.description}
            link={article.attributes.slug}
          />
        ))}
      </div>
    </Container>
  )
}
