import Container from "@/components/base/Container"
import BlogItem from "@/components/items/BlogItem"
import HeaderHeroItem from "@/components/items/HeaderHeroItem"

export default function Blog() {
  const title="Blog"
  const description="My crappy blog"
  
  return (
    <Container title={title} description={description}>
      <HeaderHeroItem wrap>
        <h1>Blog</h1>
        <p>A place where I catalog my progress and my uninteresting life</p>
      </HeaderHeroItem>
      <div>
        {/* Filter by tags */}
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-screen-2xl px-7 pt-7 mx-auto">
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
        <BlogItem title="title" description="description lorem" />
      </div>
    </Container>
  )
}

