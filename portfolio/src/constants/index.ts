export const MOBILE_BREAKPOINT = "(min-width: 1024px)"

const cldBase = "https://res.cloudinary.com/kuroji-fusky-s3/image/upload"
const fursonaUrl = `${cldBase}/c_scale,w_700/fursonas/comms`

// TODO Temporary placeholders, replace these with the MDX sutff from the `showcase` route
export const projects = [
  {
    product: `${cldBase}/projects/myfursona-sept-banner.png`,
    name: "MyFursona",
    slug: "myfursona",
    description:
      "A soon-to-be social art platform where users share their characters, commission from artists, purchase adoptables, and much more!",
    type: "Platform",
    year: 2022
  },
  {
    product: `${cldBase}/sf-website/projects/searchpets_jl5uaf.png`,
    name: "Searchpets!",
    description:
      "Search engine-type website you can filter and query comic entries from the Housepets! web comic by Rick Griffin.",
    type: "Website",
    year: 2022
  },
  {
    product: `${cldBase}/sf-website/projects/paco-drawing-stats_m0e91x.png`,
    name: "Paco Drawing Stats",
    description:
      "A data analysis project and analytics website that collects and parses drawing data from a furry artist and illustrator, Paco Panda.",
    type: "Website",
    year: 2021
  }
]

export const artworks = [
  {
    url: `${fursonaUrl}/MCM_headshot-comm.png`,
    artist: "MintyChipMocha"
  },
  {
    url: `${fursonaUrl}/IMG_2094.png`,
    artist: "Matcha"
  },
  {
    url: `${fursonaUrl}/nepukamiArts_2000.jpg`,
    artist: "nepukamiArts"
  },
  {
    url: `${fursonaUrl}/IMG-20230728-WA0005.jpg`,
    artist: "Lumyhuh"
  },
  {
    url: `${fursonaUrl}/dougly_Icon2.png`,
    artist: "sadcat16hrz"
  },
  {
    url: `${fursonaUrl}/Icon_sunbaestudios.png`,
    artist: "SamoyedRoseCreations"
  }
]
