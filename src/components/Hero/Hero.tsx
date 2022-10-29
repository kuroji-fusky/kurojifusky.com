import { CLOUDINARY_URL } from "@/utils/global"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { LinkUnderline } from "../Links"
import { HomeSection } from "../Sections"

export default function Hero() {
  return (
    <HomeSection
      id="hero"
      style={{ height: "calc(100vh - 15rem)" }}
      expandContent
    >
      <div className="fixed inset-0 flex flex-row gap-10 items-center justify-center px-10 mx-auto max-w-[90%] 2xl:max-w-[80%]">
        <article className="flex flex-col gap-8">
          <h2 className="text-5xl md:text-6xl 2xl:text-7xl">
            {"Hi, I'm "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600">
              skepfusky
            </span>
            {"!"}
          </h2>
          <h3 className="text-xl lg:texl-2xl 2xl:text-3xl">
            A 20-year-old self-taught, self-employed, and independent fox-husky
            Filipino hobbyist from the Philippines
          </h3>
          <div className="font-jetbrains-mono flex gap-8">
            <LinkUnderline name="Change artwork" link="#" />
            <LinkUnderline name="Projects" link="/projects" />
            <LinkUnderline name="About this cutie" link="/about" />
          </div>
          <span className="font-jetbrains-mono opacity-75 text-sm">
            {"Art by "}
            <FontAwesomeIcon icon={faDiscord} />
            <strong className="font-extrabold">&nbsp;catastrophe#6282</strong>
          </span>
        </article>
        <aside className="w-[750px] xl:w-[800px] 2xl:w-[825px] grid place-items-center relative select-none h-screen">
          <div className="w-full h-full relative">
            <Image
              src={`${CLOUDINARY_URL}/w_720/v1662975456/fursonas/comm_for_davey_g2_i3nmhp.png`}
              alt="Art by catastrophe#6282 on Discord"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </aside>
      </div>
    </HomeSection>
  )
}
