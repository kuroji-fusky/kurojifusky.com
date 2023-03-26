import {
	IconYoutube,
	IconTwitter,
	IconGithub,
	IconLinkedin,
} from "@iconify-prerendered/vue-fa6-brands"

import { IconEllipsis } from "@iconify-prerendered/vue-fa6-solid"
import { FeaturedProjects } from "./Interfaces"

const currentYear = new Date().getFullYear()
export const copyright = `© 2013-${currentYear} Kerby Keith Aquino`

interface HeadingLinks {
	heading: string
	bypassListRender: boolean
	contents: {
		text: string
		link: string
	}[]
}

export const headingLinks: HeadingLinks[] = [
	{
		heading: "Projects",
		contents: [
			{ text: "MyFursona", link: "/projects/myfursona" },
			{ text: "Panda Paco Drawing Stats", link: "/projects/pds" },
		],
		bypassListRender: false,
	},
	{ heading: "Creative Works", contents: [], bypassListRender: false },
	{ heading: "More", contents: [], bypassListRender: true },
]

export const featuredProjects: FeaturedProjects[] = [
	{
		name: "MyFursona",
		description:
			"An open source platform where you create, store, and manage your characters' artworks, ref sheets, biographies, and much more! Built entirely on open source technology from the ground up.",
		projectType: "Website",
		sourceCode: "MyFursona-Project/MyFursona",
	},
	{
		name: "Art and Biro Site Redesign",
		description:
			"A faithful and lively redesign for the artbirocomic.com website; a web comic series about a raccoon and a fox getting along each other with the bond of friendship.",
		projectType: "Website",
		imgGrids: [],
	},
	{
		name: "School Trips and Highlights",
		description:
			"A collection of videos I've filmed during my 4 years at Disciples for Christ International School.",
		projectType: "Library",
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
