import { BlogMetadata, DiscographyMetadata, ProjectMetadata } from "./Metadata"

export interface ProjectPages {
	slug: string
	metadata: ProjectMetadata
}

export interface DiscographyPages {
	slug: string
	metadata: DiscographyMetadata
}

export interface BlogPages {
	slug: string
	metadata: BlogMetadata
}
