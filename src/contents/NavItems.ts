import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import {
	faBriefcase,
	faCode,
	faFolder,
	faLightbulb,
	faPencil,
	faPenSquare
} from "@fortawesome/free-solid-svg-icons"

interface ItemTypes {
	link: string
	name: string
	description: string
	icon: IconDefinition
}

export interface INavItems {
	summary: ItemTypes[]
	portfolio: Pick<ItemTypes, "name" | "link">[]
	autist: Pick<ItemTypes, "name" | "link">[]
}

const dirParser = (page: string) => {
	const regexParse = page.toLowerCase().replace(/\s/g, "-")

	return {
		link: `/${regexParse}`,
		name: page
	}
}

export const NavItems: INavItems = {
	summary: [
		{
			link: "/about",
			name: "About Me",
			description: "I'm a big idiot",
			icon: faCode
		},
		{
			link: "/portfolio",
			name: "Portfolio",
			description: "My crappy projects",
			icon: faFolder
		},
		{
			link: "/blog",
			name: "Blog",
			description: "Sharing my sad life to people",
			icon: faPencil
		}
		// {
		//   link: "/knowledge",
		//   name: "Knowledge Base",
		//   description: "Stuff I know a thing but interactive",
		//   icon: faLightbulb
		// },
	],
	portfolio: [
		{ link: "#", name: "Projects I've Contributed" },
		{ link: "#", name: "Dev Projects" },
		dirParser("Filmography"),
		dirParser("Discography"),
		{ link: "#", name: "Archived works" }
	],
	autist: [dirParser("Timeline"), { link: "/character", name: "The fox-husky character" }, dirParser("Artworks")]
}

export const NavShortcuts = [
	{ emoji: "📚", link: "/portfolio", name: "Portfolio" },
	{ emoji: "💡", link: "/knowledge-base", name: "Knowledge Base" },
	{ emoji: "📝", link: "/blog", name: "Blog" },
	{ emoji: "🦊", link: "/about", name: "About" }
]
