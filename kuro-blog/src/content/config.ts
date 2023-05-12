import { z, defineCollection } from "astro:content"

export const collections = {
	archives: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			image: z.string().optional(),
			tags: z.array(z.string()),
		}),
	}),
	"dream-journal": defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
		}),
	}),
}
