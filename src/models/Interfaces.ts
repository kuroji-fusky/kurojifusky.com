export interface ProjectCardProps {
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
