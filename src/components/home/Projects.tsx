import styles from "@/styles/Projects.module.scss"
import { CringeProjects } from "@/utils/Contents"
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Button from "../base/Button"
import ProjectItem from "../items/ProjectItem"

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    const node = carouselRef.current
    if (node) {
      node.scrollBy({
        left: -350,
        behavior: "smooth"
      })
    }
  }

  const scrollRight = () => {
    const node = carouselRef.current
    if (node) {
      carouselRef.current.scrollBy({
        left: 350,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>
          Open Source Projects on GitHub
        </h1>
        <div className={styles["card-carousel"]} ref={carouselRef}>
          {CringeProjects.map((projects) => (
            <ProjectItem
              key={projects.name}
              title={projects.name}
              description={projects.description}
              image={projects.image}
              link={projects.link}
              repoLink={projects.repoLink}
            />
          ))}
        </div>
        <div className={styles["nav-button-container"]}>
          <Button link="/portfolio" className={styles["project-btn"]}>
            View portfolio
          </Button>
          <Button onClick={scrollLeft} className={styles["project-btn"]}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button onClick={scrollRight} className={styles["project-btn"]}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </section>
  )
}
