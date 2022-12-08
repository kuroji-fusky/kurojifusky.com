import { RoundedBtn } from "../UI"
import { SectionContainer } from "./SectionContainer"
import styles from "./SectionContainer.module.scss"

export default function SupportSection() {
  return (
    <SectionContainer
      className={styles["info-wrapper"]}
      title="I need your help!"
    >
      <div className="text-center text-base lg:text-xl w-[95%] lg:w-[72.5%] flex flex-col gap-y-4 lg:gap-y-6">
        <p>
          I'm currently 20 years old and I don't and never will have a typical
          9-5 job. My only source of income comes from YouTube revenue for my
          crappy YTPs, from music streams (just barely), and Kofi donations
          (usually attached on all of my open-source projects).
        </p>
        <p>
          I'm not asking much at all, but if you are obligated or just to
          generally support my work, doesn't matter if it's either from my
          open-source projects, videos, or music! I'll be using these to pay the
          costs on the infrastructure of my projects (although, saying to afford
          cool stuff is too cliche and boring lol)
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <RoundedBtn external link="https://ko-fi.com/skepfusky">
          I have Ko-Fi lol
        </RoundedBtn>
        <RoundedBtn external link="https://youtu.be/49yExmMiMBM">
          Don't click this
        </RoundedBtn>
      </div>
    </SectionContainer>
  )
}
