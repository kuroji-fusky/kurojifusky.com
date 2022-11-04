import { GenericInfo } from "./Mutations"

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

export interface PortfolioItemTypes
  extends Omit<Partial<GenericInfo>, "name">,
    PortfolioLinks {
  category: CategoryTags
}
