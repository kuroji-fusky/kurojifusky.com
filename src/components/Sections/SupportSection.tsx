import { RoundedBtn } from "../Buttons"
import { SectionContainer } from "./SectionContainer"
import styles from "./SectionContainer.module.scss"

export function SupportSection() {
  return (
    <SectionContainer
      className={styles["info-wrapper"]}
    >
      <h1 className={styles["info-heading"]}>Support</h1>
      <div className="text-center text-base lg:text-xl w-[72.5%] flex flex-col gap-y-4 lg:gap-y-6">
        <p className="leading-8">
          Yes - despite currently being 20 years old, I don't and will refuse to
          have a typical 9-5 job. My only source of income comes from YouTube
          revenue for my crappy YTPs, from music streams (just barely), and Kofi
          donations (usually attached on all of my open-source projects).
        </p>
        <p className="leading-8">
          I'm not asking much at all, but if you are obligated or just to
          generally support my work, doesn't matter if it's either from my
          open-source projects, videos, or music! I'll be using these to pay the
          costs on the infrastructure of my projects (although, saying to afford
          cool stuff is too cliche and boring lol)
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        <RoundedBtn external link="https://ko-fi.com/skepfusky">
          Feed me caffiene
        </RoundedBtn>
        <RoundedBtn external link="https://ko-fi.com/skepfusky">
          Watch my funnies
        </RoundedBtn>
      </div>
    </SectionContainer>
  )
}
