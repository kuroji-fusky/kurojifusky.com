import { CLOUDINARY_URL } from "@/utils/global"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { HomeSection } from "../Sections"

export function Hero() {
  return (
    <>
      <style>{`
			img {
			}
			`}</style>
      <HomeSection
        id="hero"
        style={{ height: "calc(100vh - 15rem)" }}
        expandContent
      >
        <div className="fixed inset-0 flex flex-row gap-10 items-center justify-center px-10 mx-auto max-w-[90%] xl:max-w-[80%]">
          <article className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl xl:text-7xl">
              {"Hi, I'm "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sona-borahaealt-600 to-sona-skycyan-700">
                skepfusky
              </span>
              {"!"}
            </h2>
            <h3 className="texl-2xl 2xl:text-3xl">
              A 20-year-old self-taught, self-employed, and independent
              fox-husky Filipino hobbyist from the Philippines
            </h3>
            <span className="font-jetbrains-mono opacity-75 text-sm">
              {"Art by "}
              <FontAwesomeIcon icon={faDiscord} />
              <strong className="font-extrabold">&nbsp;catastrophe#6282</strong>
            </span>
          </article>
          <aside className="w-[800px] grid place-items-center relative select-none h-screen">
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
    </>
  )
}
