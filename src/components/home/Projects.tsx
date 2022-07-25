import ProjectItem from "../cards/ProjectItem"
import styles from "@/styles/Home.module.scss"
import baseStyles from "@/styles/Base.module.scss"

export default function Projects() {
  return (
    <div className={baseStyles["content-wrapper"]}>
      <h1 className={baseStyles["content-heading"]}>Projects</h1>
      <div className={styles["responsive-grid"]}>
        <ProjectItem
          title="Dumbass"
          description="Eat some ass"
          link="https://openfurs.vercel.app"
          repoLink="skepfusky/pacopanda-drawing-stats"
        />
      </div>
    </div>
  )
}
