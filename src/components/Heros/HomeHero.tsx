import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { cloudinary } from "@/utils/ImgProviders"
import { LinkUnderline } from "../Links"
import { HomeSection } from "../Sections"
import {
  faBook,
  faBookAtlas,
  faHandPaper,
  faMugSaucer,
  faPencil,
  faTableCellsLarge
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export function HomeHero() {
  return (
    <HomeSection id="hero" expandContent>
      <div className="h-screen flex flex-col gap-0 items-center justify-center px-1.5 lg:px-10 mx-auto max-w-[90%] 2xl:max-w-[80%]">
        {/* Image container */}
        <aside className="w-full lg:w-[750px] xl:w-[800px] 2xl:w-[810px] grid place-items-center relative select-none h-[27.5rem]">
          <div className="w-full h-full relative">
            <Image
              src={cloudinary({
                rootDir: "fursonas",
                width: 720,
                fileName: "comm_for_davey_g2_i3nmhp.png"
              })}
              alt="Art by catastrophe#6282 on Discord"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </aside>
        {/* info */}
        <article className="flex flex-col gap-5 text-center items-center">
          <h2 className="text-3xl md:text-4xl 2xl:text-[2.85rem] w-[75%] !leading-[3.75rem]">
            {"Hi, I'm "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600">
              Kuroji Fusky
            </span>
            {"! A fox-husky abomination"}
          </h2>
          <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 lg:justify-start gap-4 z-2 relative">
            <HomeHeroItem title="Recent Blog Posts" link="/blog" />
            <HomeHeroItem
              title="Character ref and artworks"
              link="/character"
            />
          </div>
          <span
            className="font-jetbrains-mono opacity-75 text-sm"
            aria-label="Artwork by catastrophe#6282 on Discord"
          >
            {"Art by "}
            <FontAwesomeIcon icon={faDiscord} />
            <strong className="font-extrabold">&nbsp;catastrophe#6282</strong>
          </span>
        </article>
      </div>
    </HomeSection>
  )
}

interface HHIProps {
  title?: string
  link?: string
}

function HomeHeroItem({ title, link }: HHIProps) {
  return (
    <Link href={link ?? "#"}>
      <a
        className="h-full relative rounded-md flex flex-col gap-2 m-0.5 w-full shadow-2xl hover:shadow-sona-royalblue-600
			-z-1 bg-gradient-to-tr from-sona-borahae-500 to-sona-skycyan-700
			before:content-[''] before:absolute before:inset-0 before:hover:opacity-0 before:bg-sona-royalblue-800 before:-z-1 before:rounded-md transition-all duration-300 before:transition-all before:duration-300"
        role="button"
      >
        <div className="bg-borahae-dark px-5 py-2 rounded-md h-full m-[0.1rem] grid place-items-center select-none font-inter">
          {title}
        </div>
      </a>
    </Link>
  )
}
