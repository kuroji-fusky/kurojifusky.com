import { cloudinary, ytImg } from "../utils/ImgProviders"

type Category =
  | "Dev Project"
  | "School Project"
  | "Website"
  | "Film"
  | "Discography"
  | "Others"

interface PortfolioLinks {
  githubLink: string
  websiteLink: string
  youtubeId: string
  soundcloud: string
  itunes: string
  spotify: string
}

export interface PortfolioItemTypes extends Partial<PortfolioLinks> {
  img: string
  link?: string
  title: string
  description: string
  category: Category | Category[]
}

const cImg = (fileName: string) =>
  cloudinary({ dir: "projects", quality: "auto", fileName: fileName })

export const PortfolioItems: PortfolioItemTypes[] = [
  {
    img: cImg("skepfusky-xyz_enbdyq.png"),
    category: "Website",
    title: "skepfusky.xyz",
    description: "Awful website covered with amazing UI"
  },
  {
    img: cImg("paco-drawing-stats_khjf7s.png"),
    category: "Website",
    title: "Paco Drawing Stats",
    description:
      "A data visualization project which shows the number of species and characters drawn by a furry artist - written in Next.js and Python"
  },
  {
    img: cImg("searchpets_jl5uaf.png"),
    category: "Website",
    title: "Searchpets!",
    description:
      "A search engine website for querying chapters, comics, and characters from the Housepets! web comic"
  },
  {
    img: cImg("Biro-Design-Banner_kqbrih.png"),
    category: "Others",
    title: "Biro UI & Design System",
    description:
      "A UI library and a set of design patterns created by skepfusky, heavily inspired by Fandom Wiki, Microsoft, Apple, and Google's Material UI"
  },
  {
    category: "Others",
    img: cImg("majira-vscode_gwtdyv.png"),
    title: "Majira Strawberry VS Code Theme",
    description:
      "The carbon copy of the *SynthWave '84* theme with a mix of red and bright green tints lol"
  },
  {
    img: ytImg("Z2KV_Lag7bE"),
    category: "Discography",
    title: '"A New Beginning"',
    description:
      "A music video for my debut album *Horizon*, filmed in various dates before and during the pandemic"
  },
  {
    img: cloudinary({
      dir: "album-covers",
      fileName: "ALBUM_A-New-Life_bofney.png"
    }),
    category: "Discography",
    title: '"Dreaming"',
    description:
      "Reguarding as one of my favorite single produced, it also appears on track 2 of my second self-published album *A New Life*"
  },
  {
    img: ytImg("5SybfjVntTw"),
    category: "Film",
    title: "DFCIS School Day 2019",
    description:
      "A school highlight film in various dates from the year 2019 - with upbeat music and fastpaced editing style!"
  },
  {
    img: ytImg("480bhKCmTZg"),
    category: "Film",
    title: "DFCIS Field Trip Edit 2019",
    description:
      "Highlights from the school field trip, filmed on April 7, 2019 and shot on a GoPro and a mirrorless Canon camera"
  },
  {
    img: ytImg("1GLQLNG_lpM"),
    category: "Film",
    title: "Jin Woo's Adventure",
    description:
      "A bunch of my then senior collegues promoting the school by sending flyers or cleaning garbage on the streets"
  },
  {
    img: ytImg("8nbMVrNRRCM"),
    category: "School Project",
    title: '"PARANOIA"',
    description:
      "My sister's project that I filmed and edited on August and September 2021"
  },
  {
    img: ytImg("zIPay0PwumY"),
    category: "School Project",
    title: "Tourism Video",
    description: "A video promoting Philippines as a school project in May 2019"
  }
]
