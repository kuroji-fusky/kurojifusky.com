import { Container } from "@/components/Base"
import { BlogItem } from "@/components/Blog/BlogItem"
import { BlogSection } from "@/components/Blog/BlogSection"
import { Notice } from "@/components/UI"
import styles from "./BlogRoot.module.scss"

export default function BlogMain() {
  const t = "Blog Posts"
  const d = "Sharing my sad, pathetic life to people"
  return (
    <Container title={t} description={d} wrap>
      <header className="my-24 px-12 2xl:px-0 text-center flex flex-col gap-y-4">
        <Notice content="Blog page still under construction - I self-host everything and it takes a while for the juicy content to be shown lol" />
        <h1 className="text-4xl lg:text-5xl">{t}</h1>
        <p className="text-base lg:text-lg">{d}</p>
      </header>
      <div className={styles["container"]}>
        <BlogSection title="Recent Posts" heading>
          <BlogItem heading/>
          <BlogItem />
          <BlogItem />
        </BlogSection>
        <BlogSection title="Tech/Programming">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </BlogSection>
        <BlogSection title="Behind The Scenes">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </BlogSection>
        <BlogSection title="Others">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </BlogSection>
      </div>
    </Container>
  )
}
