import {
	IconYoutube,
	IconTwitter,
	IconGithub,
	IconLinkedin,
} from "@iconify-prerendered/vue-fa6-brands"

import { IconEllipsis } from "@iconify-prerendered/vue-fa6-solid"
import { FeaturedProjects } from "./Interfaces"

export const featuredProjects: FeaturedProjects[] = [
	{
		name: "MyFursona",
		img: "/img/myfursona.png",
		description:
			"A platform where you create, store, and manage your characters' artworks, ref sheets, biographies, and much more! Built entirely on open source technology from the ground up.",
		projectType: "Website",
		sourceCode: "MyFursona-Project/MyFursona",
		wip: true,
	},
	{
		name: "Paco Drawing Stats",
		img: "/img/paco-pds.jpg",
		description:
			"A data visualization project that collects and parses drawing data from a furry artist and illustrator, Paco Panda; source code licensed under GPL-2.0.",
		projectType: "Website",
		sourceCode: "kuroji-fusky/pacopanda-drawing-stats",
		wip: true,
	},
	{
		name: "Biro UI",
		img: "/img/biro-ui.png",
		description:
			"My home-grown, custom UI framework and design system! Built entirely fom scratch - inspired by various existing design systems such as Material UI, Apple, and Microsoft's Fluent Design System built with simplicity in mind. Used on my personal projects including MyFursona and this website you're on right now!",
		projectType: "Library",
		sourceCode: "kuroji-fusky/Biro-UI",
		wip: true,
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
