import Link from "next/link"

import { readFileSync, readdirSync } from "fs"
import path from "path"
import matter from "gray-matter"

export default function ShowcasePage() {
  const showcasesDir = "./src/app/showcases"
  const content = readdirSync(path.join(showcasesDir))

  const showcaseItems = content.map((filename) => {
    if (filename == "page.tsx") return

    const contents = readFileSync(
      path.join(showcasesDir, filename, "/page.mdx"),
      "utf-8"
    )

    const { data: frontMatter } = matter(contents)
    const filenameSlug = filename.replace(".mdx", "")

    return {
      meta: frontMatter,
      slug: `/showcases/${filenameSlug}`
    }
  })

  return (
    <div className="mt-20">
      {showcaseItems.map((item, i) => (
        <Link href={`${item?.slug}`} key={i}>
          <h2>{item?.meta.title}</h2>
          <p>{item?.meta.description}</p>
        </Link>
      ))}
    </div>
  )
}
