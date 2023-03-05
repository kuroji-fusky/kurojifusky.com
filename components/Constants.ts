import {
	IconYoutube,
	IconTwitter,
	IconGithub,
	IconLinkedin,
} from "@iconify-prerendered/vue-fa6-brands"

import { IconEllipsis } from "@iconify-prerendered/vue-fa6-solid"

interface FeaturedProjects {
	name: string
	description: string
	type: "Extension" | "Website" | "Library"
	img?: string
	svg?: unknown
	product?: string
	sourceCode: string
	cStart?: string
	cEnd?: string
}

export const featuredProjects: FeaturedProjects[] = [
	{
		name: "MyFursona",
		description:
			"A platform where you create, store, and manage your characters ref sheets, biography, and much more! Built entirely on open source technology from the ground up.",
		type: "Website",
		sourceCode: "MyFursona-Project/MyFursona",
		cStart: "from-purple-500",
		cEnd: "to-blue-500",
	},
	{
		name: "Majira Strawberry VS Code Theme",
		description:
			"Yes, really. I thought that I'd be funny if I made a VS Code theme extension from a popular furry YouTuber, and I figured that if no one's gonna do it, then I'll make one!",
		type: "Extension",
		product:
			"https://marketplace.visualstudio.com/items?itemName=KurojiFusky.majira-strawberry-vscode",
		sourceCode: "kuroji-fusky/majira-strawberry-vscode",
		cStart: "from-red-500",
		cEnd: "to-sona-borahae-400",
	},
	{
		name: "Paco Drawing Stats",
		description:
			"A data visualization project that collects and parses drawing data from a furry artist and illustrator, Paco Panda; source code licensed under GPL-2.0.",
		type: "Website",
		sourceCode: "kuroji-fusky/pandapaco-drawing-stats",
		cStart: "from-green-500",
		cEnd: "to-sona-yellow-400",
	},
	{
		name: "Biro UI",
		description:
			"My home-grown, custom UI framework and design system! Built entirely fom scratch - inspired by various existing design systems such as Material UI, Apple, and Microsoft's Fluent Design System built with simplicity in mind. Used on my personal projects including MyFursona and this website you're on right now!",
		type: "Library",
		sourceCode: "kuroji-fusky/Biro-UI",
		cStart: "from-orange-500",
		cEnd: "to-blue-500",
	},
]

export const socialLinks = [
	{
		text: "YouTube",
		link: "https://www.youtube.com/@kurojifusky",
		icon: IconYoutube,
	},
	{
		text: "Twitter",
		link: "https://twitter.com/@kurojifusky",
		icon: IconTwitter,
	},
	{
		text: "GitHub",
		link: "https://www.github.com/kuroji-fusky",
		icon: IconGithub,
	},
	{
		text: "LinkedIn",
		link: "https://www.linkedin.com/in/kerby-keith-aquino-434037238/",
		icon: IconLinkedin,
	},
	{
		button: true,
		text: "More",
		icon: IconEllipsis,
	},
]
