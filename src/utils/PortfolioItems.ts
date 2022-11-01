import { PortfolioItemProps } from "@/components/PortfolioItem"
import { cloudinary, ytImg } from "./global"

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
    img: ytImg("Z2KV_Lag7bE"),
    category: "discography",
    title: '"A New Beginning"',
    description:
      "A music video for my debut album *Horizon*, filmed in various dates before and during the pandemic"
  },
  {
    img: cloudinary(
      "/v1666532578/sf-website/album-covers/ALBUM_A-New-Life_bofney.png"
    ),
    category: "discography",
    title: '"Dreaming"',
    description:
      "Reguarding as one of my favorite single produced, it also appears on track 2 of my second self-published album *A New Life*"
  },
  {
    img: ytImg("5SybfjVntTw"),
    category: "film",
    title: "DFCIS School Day 2019",
    description:
      "A school highlight film in various dates from the year 2019 - with upbeat music and fastpaced editing style!"
  },
  {
    img: ytImg("480bhKCmTZg"),
    category: "film",
    title: "DFCIS Field Trip Edit 2019",
    description:
      "Highlights from the school field trip, filmed on April 7, 2019 and shot on a GoPro and a mirrorless Canon camera"
  },
  {
    img: ytImg("1GLQLNG_lpM"),
    category: "film",
    title: "Jin Woo's Adventure",
    description:
      "A bunch of my then senior collegues promoting the school by sending flyers or cleaning garbage on the streets"
  },
  {
    img: ytImg("8nbMVrNRRCM"),
    category: "school project",
    title: '"PARANOIA"',
    description:
      "My sister's project that I filmed and edited on August and September 2021"
  },
  {
    img: ytImg("zIPay0PwumY"),
    category: "school project",
    title: "Tourism Video",
    description: "A video promoting Philippines as a school project in May 2019"
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
