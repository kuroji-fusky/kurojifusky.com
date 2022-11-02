import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"

export type Components = {
  children: React.ReactNode
  style: React.CSSProperties
  className: string
  id: string
}

export type GenericInfo = {
  title: string
  name: string
  link: string
  description: string
  img: string
}

// ======================
// Type mutations
export type ChildrenOnly = Pick<Partial<Components>, "children">
export type NameLinkOnly = Pick<GenericInfo, "name" | "link">
export type ContainerAlias = Pick<Partial<GenericInfo>, "title" | "description"> & Omit<Partial<Components>, "id">

// ======================
// Buttons & Links
export interface SharedBtnProps extends Partial<NameLinkOnly> {
  disabled?: boolean
  onClick?: () => any
}

// ======================
// Social crap
export interface SocialTypes extends NameLinkOnly {
  icon: IconDefinition
}

// ======================
// Portfolio Item
enum CategoryTags {
  DevProject = "Dev Project",
  SchoolProject = "School Project",
  Website = "Website",
  Film = "Film",
  Music = "Discography",
  Others = "Others / Miscellaneous",
	All = ""
}

export { CategoryTags as C }

type PortfolioLinks = Partial<{
  githubLink: string
  websiteLink: string
  youtubeId: string
  soundcloud: string
  itunes: string
  spotify: string
}>

export interface PortfolioItemTypes extends Omit<Partial<GenericInfo>, "name">, PortfolioLinks {
  category: CategoryTags
}
