import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { cloudinary } from "@/utils/ImgProviders"
import { HomeSection } from "../Sections"
import Link from "next/link"
import { RoundedBtn } from "../Buttons"

export function HomeHero() {
  return (
    <HomeSection
      id="hero"
      className="h-screen flex flex-col gap-0 items-center justify-center px-1.5 py-10 mx-auto max-w-[90%] 2xl:max-w-[80%]"
      expandContent
    >
      {/* Image container */}
      <div className="w-full lg:w-[750px] xl:w-[800px] 2xl:w-[810px] grid place-items-center relative select-none h-[27.5rem]">
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
      </div>
      {/* info */}
      <article className="flex flex-col gap-5 text-center items-center">
        <h2 className="text-3xl md:text-4xl 2xl:text-[2.85rem] w-[75%] 2xl:!leading-[3.75rem]">
          {"Hi, I'm "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600">
            Kuroji Fusky
          </span>
          {"! A fox-husky abomination"}
        </h2>
        <h3>Suffering from emotional damage</h3>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 lg:justify-start gap-4 z-2 relative">
          <RoundedBtn link="/blog">Recent Blog Posts</RoundedBtn>
          <RoundedBtn link="/character">Character ref and artworks</RoundedBtn>
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
    </HomeSection>
  )
}
