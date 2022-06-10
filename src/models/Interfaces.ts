export interface NavbarProps {
	link: string
	title: string
	img?: string
}

export interface ProjectItemProps {
	projectTitle: string
	description: string
	img?: string
	techIcons: string[]
	pageLink?: string
	repoLink?: string
	extLink?: string
}

export interface VideoItemProps {
	id: string
	title: string
	date: string
	description?: string
}

export interface AlbumItemProps {
	title: string
	albumType: "Album" | "EP" | "Single"
	cover: string
	date: string
}
