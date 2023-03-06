export interface FeaturedProjects {
	name: string
	description: string
	readonly projectType: "Extension" | "Website" | "Library"
	img: string
  	wip?: boolean
	product?: string
	sourceCode: string
	gradientStart: string
	gradientEnd: string
	bgColor?: string
}
