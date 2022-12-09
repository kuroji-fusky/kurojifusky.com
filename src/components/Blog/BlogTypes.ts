interface BlogTypes extends ChildrenOnly {
	title: string
	excerpt: string
	heading?: boolean
	tags: string[]
}

export type BlogItemProps = Omit<BlogTypes, "children">
export type BlogSectionProps = Omit<BlogTypes, "excerpt" | "tags">