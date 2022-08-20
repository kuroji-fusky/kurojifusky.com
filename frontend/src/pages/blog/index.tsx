import Container from "@/components/base/Container"
import BlogItem from "@/components/items/BlogItem"
import HeaderHeroItem from "@/components/items/HeaderHeroItem"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"

export default function Blog({ articles }: any) {
  const title = "Blog"
  const description = "My crappy blog"

  console.log(articles)

  return (
    <Container title={title} description={description}>
      <HeaderHeroItem wrap>
        <h1>Blog</h1>
        <p>A place where I catalog my progress and my uninteresting life</p>
      </HeaderHeroItem>
      <div>{/* Filter by tags */}</div>
      <div className="grid grid-cols-3 gap-4 max-w-screen-2xl px-7 pt-7 mx-auto">
        {articles.map((article: any) => (
          <BlogItem
            key={article.id}
            title={article.attributes.title}
            description={article.attributes.body}
          />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query getArticles {
        articles {
          data {
            attributes {
              createdAt
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              title
              excerpt
              body
            }
          }
        }
      }
    `
  })

  return {
    props: {
      articles: data.articles.data.attributes
    }
  }
}
