import {
	IconYoutube,
	IconTwitter,
	IconGithub,
	IconLinkedin,
} from "@iconify-prerendered/vue-fa6-brands"

import { ShowcaseItem } from "./Interfaces"

const currentYear = new Date().getFullYear()

export const copyright = `© 2013-${currentYear} Kerby Keith Aquino`
export const MOBILE_SCREEN = "(min-width: 768px)"

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
			{ text: "Searchpets!", link: "/projects/searchpets" },
			{ text: "Biro UI", link: "/projects/biro-ui" },
			{ text: "Panda Paco Drawing Stats", link: "/projects/pds" },
			{ text: "Majira VS Code Theme", link: "/projects/majira-vscode" },
			{ text: "The Foxington Vault", link: "/projects/foxington-vault" },
		],
		bypassListRender: false,
	},
	{
		heading: "Creative Works",
		contents: [
			{ link: "/works/discography", text: "Discography" },
			{ link: "/works/filmography", text: "Filmography" },
			{ link: "/archives", text: "Archives" },
		],
		bypassListRender: false,
	},
	{ heading: "More", contents: [], bypassListRender: true },
]

export const featuredProjects: Partial<ShowcaseItem>[] = [
	{
		name: "MyFursona",
		description:
			"An open source platform where you create, store, and manage your characters' artworks, ref sheets, biographies, and much more! Built entirely on open source technology from the ground up.",
		projectType: "Website",
		sourceCode: "MyFursona-Project/MyFursona",
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
]
