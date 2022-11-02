export type Components = Partial<{
  children: React.ReactNode
  className: string
  id: string
  style: React.CSSProperties
}>

export type GenericInfo = Partial<{
  title: string
  name: string
  link: string
  description: string
  img: string
}>

export type ChildrenOnly = Pick<Components, "children">

// ======================
// Buttons
export interface SharedBtnProps extends Pick<GenericInfo, "name" | "link"> {
  disabled?: boolean
  onClick?: () => any
}

// ======================
//  Portfolio Item
export enum CategoryTags {
  DevProject = "Dev Project",
  SchoolProject = "School Project",
  Website = "Website",
  Film = "Film",
  Music = "Discography",
  Others = "Others / Miscellaneous"
}

type PortfolioLinks = Partial<{
  // Regular trash type definitions
  githubLink: string
  websiteLink: string
  youtubeId: string
  // Trash music type definitions
  soundcloud: string
  itunes: string
  spotify: string
}>

// prettier-ignore
export interface PortfolioItemTypes extends PortfolioLinks, Omit<GenericInfo, "name"> {
  category: CategoryTags
}
