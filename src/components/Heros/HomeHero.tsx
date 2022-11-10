import { useContext } from "react"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { cloudinary } from "@/utils/ImgProviders"
import { LinkUnderline } from "../Links"
import { HomeSection } from "../Sections"
import { HomeHeroImgContext } from "@/utils/Context"

export function HomeHero() {
  const { loaded, isLoaded } = useContext(HomeHeroImgContext)

  const loadingIndicator = !loaded ? "block" : "hidden"
  const img = !loaded ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"

  return (
    <HomeSection
      id="hero"
      style={{ height: "calc(100vh - 15rem" }}
      expandContent
    >
      <div
        className={`${loadingIndicator} absolute inset-0 grid place-items-center font-jetbrains-mono text-2xl w-screen h-screen`}
      >
        Loading...
      </div>
      <div
        className={`${img} transition-all duration-500 fixed inset-0 flex flex-col-reverse lg:flex-row gap-0 lg:gap-10 items-center justify-center px-1.5 lg:px-10 mx-auto max-w-[90%] 2xl:max-w-[80%]`}
      >
        {/* Pointless info */}
        <article className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-5xl md:text-6xl 2xl:text-7xl">
            {"Hi, I'm "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sona-magenta-700 to-sona-skycyan-600">
              skepfusky
            </span>
            {"!"}
          </h2>
          <h3 className="text-xl xl:text-2xl 2xl:text-3xl">
            A 20-year-old self-taught, self-employed, and independent fox-husky
            Filipino hobbyist from the Philippines
          </h3>
          <div className="font-jetbrains-mono flex justify-center lg:justify-start gap-8 gap-y-4 flex-wrap">
            <LinkUnderline
              name="Change artwork"
              link="#"
              onClick={() =>
                alert(
                  "I'm lazy to make things work, writing a website from scratch with code is definitely not the easiest thing to achieve lol"
                )
              }
            />
            <LinkUnderline name="Portfolio" link="/portfolio" />
            <LinkUnderline name="About Me" link="/about" />
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
        {/* Image container */}
        <aside className="w-full lg:w-[750px] xl:w-[800px] 2xl:w-[825px] grid place-items-center relative select-none h-[45%] lg:h-screen">
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
              onLoadingComplete={() => isLoaded(true)}
            />
          </div>
        </aside>
      </div>
    </HomeSection>
  )
}
