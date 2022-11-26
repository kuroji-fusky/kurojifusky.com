import { SectionContainer } from "./SectionContainer"
import styles from "./SectionContainer.module.scss"

export function AboutMeSection() {
  return (
    <SectionContainer
      className="flex flex-col items-center gap-y-16 pt-16 pb-12"
    >
      <h1 className={styles["info-heading"]}>About me</h1>
      TBA
    </SectionContainer>
  )
}
