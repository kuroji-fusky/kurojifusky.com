import { HomeSection } from "./HomeSection"
import styles from "./sections.module.scss"

export function AboutMeSection() {
  return (
    <HomeSection
      className="flex flex-col items-center gap-y-16 pt-16 pb-12"
    >
      <h1 className={styles["info-heading"]}>About me</h1>
      TBA
    </HomeSection>
  )
}
