import { PortfolioItemProps } from "@/components/PortfolioItem"
import { cloudinary } from "./global"

export const PortfolioItems: PortfolioItemProps[] = [
  {
    img: cloudinary(
      "/v1667239374/sf-website/projects/paco-drawing-stats_khjf7s.png"
    ),
    category: "dev project",
    title: "Paco Drawing Stats",
    description:
      "A data visualization project which shows the number of species and characters drawn by a furry artist - written in TypeScript and Python"
  },
  {
    img: cloudinary("/v1667239416/sf-website/projects/searchpets_jl5uaf.png"),
    category: "dev project",
    title: "Searchpets!",
    description:
      "A search engine website for querying chapters, comics, and characters from the Housepets! web comic"
  },
  {
    category: "others",
    img: cloudinary(
      "/v1667239838/sf-website/projects/majira-vscode_gwtdyv.png"
    ),
    title: "Majira Strawberry VS Code Theme",
    description:
      "The carbon copy of the *SynthWave '84* theme with a mix of red and bright green tints lol"
  }
  // {
  //   category: "others",
  //   title: "Biro UI & Design System",
  //   description:
  //     "A UI library and a set of design patterns created by skepfusky, heavily inspired by Fandom, Microsoft,and Google's Material UI"
  // }
]
