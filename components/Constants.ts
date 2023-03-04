import {
	IconYoutube,
	IconTwitter,
	IconGithub,
	IconLinkedin,
} from "@iconify-prerendered/vue-fa6-brands"

interface FeaturedProjects {
	name: string
	description: string
	type: "Extension" | "Website" | "Library"
	img?: string
	svg?: unknown
	product?: string
	sourceCode: string
}

export const featuredProjects: FeaturedProjects[] = [
	{
		name: "MyFursona",
		description:
			"A platform where you create, store, and manage your characters ref sheets, biography, and much more! Built entirely on open source technology from the ground up.",
		type: "Website",
		sourceCode: "MyFursona-Project/MyFursona",
	},
	{
		name: "Paco Drawing Stats",
		description:
			"A data visualization project that collects and parses drawing data from a furry artist and illustrator. Paco Panda; source code licensed under GPL-2.0.",
		type: "Website",
		sourceCode: "kuroji-fusky/pandapaco-drawing-stats",
	},
	{
		name: "Biro UI",
		description:
			"My home-grown, custom UI framework and design system! Built entirely fom scratch - inspired by various existing design systems such as Material UI, Apple, and Microsoft's Fluent Design System built with simplicity in mind.",
		type: "Library",
		sourceCode: "kuroji-fusky/Biro-UI",
	},
	{
		name: "Majira Strawberry VS Code Theme",
		description:
			"Yes, really. This has got to be one of my dumbest projects I've ever made lmao",
		type: "Extension",
		product:
			"https://marketplace.visualstudio.com/items?itemName=KurojiFusky.majira-strawberry-vscode",
		sourceCode: "kuroji-fusky/majira-strawberry-vscode",
	},
]

export const footerLinks = [
	{ name: "YouTube", link: "#", icon: IconYoutube },
	{ name: "Twitter", link: "#", icon: IconTwitter },
	{ name: "GitHub", link: "#", icon: IconGithub },
	{ name: "LinkedIn", link: "#", icon: IconLinkedin },
]
