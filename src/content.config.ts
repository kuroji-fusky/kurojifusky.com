import { glob } from "astro/loaders"
import { z, defineCollection } from "astro:content"

const portfolio = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["development", "videos"]),
    isFeatured: z.boolean(),
    excerpt: z.string(),
    year: z.number(),
    sourceUrl: z.string().optional(),
    repo: z.string().optional(),
    category: z.array(z.string())
  })
})

export const collections = { portfolio }
