interface AlbumDetails {
	albumTitle: string
	artist?: string | string[]
	releaseDate: string
	albumCover: string
	albumType: "Album" | "EP" | "Single"
}

interface Slug {
	slug: string
}

interface ProjectMetadata {
	title: string
	dateString: string
	img: string
	excerpt: string
}

interface DiscographyMetadata extends AlbumDetails {
	length: string | number
	year: number
	trackNum: number
}

interface BlogMetadata {
	title: string
	excerpt: string
	dateString: string
	blogType: string
	tags: string[]
}

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
	videoId: string
	videoTitle: string
	releaseDate: string
	description?: string
}

export interface AlbumItemProps extends AlbumDetails {}

export interface ProjectPages extends Slug {
	metadata: ProjectMetadata
}

export interface DiscographyPages extends Slug {
	metadata: DiscographyMetadata
}

export interface BlogPages extends Slug {
	metadata: BlogMetadata
}
