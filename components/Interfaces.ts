import type { Icon } from "lucide-vue-next"

interface ImgGrid {
	subtitle?: string
  img?: string
}

export interface FeaturedProjects {
	name: string
	description: string
	readonly projectType?: "Extension" | "Website" | "Library"
	wip?: boolean
	year?: "21" | "22" | "23"
	product?: string
	sourceCode?: string
	bgColor?: string
	imgGrids?: Partial<[ImgGrid, ImgGrid, ImgGrid]>
	callToAction?: {
		icon?: Icon
		link: string
	}
}
