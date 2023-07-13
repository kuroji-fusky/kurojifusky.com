import type { BlogPost } from "~/types"
import client from "../contentful"

export default defineEventHandler(async ({ context }) => {
  const { slug } = context.params as { [param: string]: string }

  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  })

  const { fields } = entries.items[0] as unknown as BlogPost

  return {
    title: fields.title,
    description: fields.description,
    banner: `https:${fields.banner.fields.file.url}`,
    content: fields.content,
  }
})
