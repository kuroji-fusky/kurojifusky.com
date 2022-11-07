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

const dirParser = (name: string) => {
  const regexParse = name.toLowerCase().replace(/\s/g, "-")

  return {
    link: `/${regexParse}`,
    name: name
  }
}

export const NavItems: INavItems = {
  summary: [
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
    },
    {
      link: "/resume",
      name: "Resume",
      description: "All my skills and experiences",
      icon: faBriefcase
    },
    // {
    //   link: "/knowledge",
    //   name: "Knowledge Base",
    //   description: "Stuff I know a thing but interactive",
    //   icon: faLightbulb
    // },
    {
      link: "/about",
      name: "About Me",
      description: "I'm a big idiot",
      icon: faCode
    }
  ],
  portfolio: [
    { link: "#", name: "Projects I've Contributed" },
    { link: "#", name: "Dev Projects" },
    dirParser("Filmography"),
    dirParser("Discography"),
    { link: "#", name: "Archived works" }
  ],
  autist: [dirParser("Timeline"), dirParser("Fursona"), dirParser("Artworks")]
}
