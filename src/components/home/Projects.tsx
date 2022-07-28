import ProjectItem from "../cards/ProjectItem"
import styles from "@/styles/Projects.module.scss"

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles["section-heading"]}>Projects</h1>
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
