import { HomeSection } from "./HomeSection"
import styles from "./sections.module.scss"

export function TechStackSection() {
  return (
    <HomeSection
      className={styles["info-wrapper"]}
    >
      <div className="text-center text-base lg:text-xl w-[72.5%] flex flex-col gap-y-4 lg:gap-y-6">
        Made with: Your mom
      </div>
    </HomeSection>
  )
}
