import client from "./contentful"
import type { BlogPost } from "~/types"

export default defineEventHandler(async (event) => {
  const { category: categoryParam, limit: limitParam } = getQuery(event)

  const entries = await client.getEntries<BlogPost>({
    content_type: "blogPost",
    select: [
      "fields.title",
      "fields.slug",
      "fields.banner",
      "fields.description",
      "fields.content",
      "fields.overridePublishDate",
      "fields.category",
      "sys.createdAt",
    ],
    limit: (limitParam as number) || 20,
  })

  // Get all the entries
  const listedEntries = entries.items.map(({ sys, fields }) => {
    const bannerImg = `https:${(fields.banner as any).fields.file.url}`
    const overridePublishDate = fields.overridePublishDate

    return {
      _categoryLower: (fields.category as string[]).map((c) => c.toLowerCase()),
      datePublished: overridePublishDate
        ? new Date(overridePublishDate).toISOString()
        : sys.createdAt,
      category: fields.category,
      title: fields.title,
      description: fields.description,
      banner: bannerImg,
      slug: fields.slug,
    }
  })

  // Filter entries
  const entriesFilter = listedEntries.filter((blogItems) =>
    blogItems._categoryLower.includes(categoryParam as string)
  )

  // We'll filter the entries if the `category` param is present
  const parsedEntries = categoryParam ? entriesFilter : listedEntries

  // Sort the posts by latest date
  return parsedEntries.sort((a, b) => {
    return (
      (new Date(b.datePublished) as any) - (new Date(a.datePublished) as any)
    )
  })
})
