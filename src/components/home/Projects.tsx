import styles from "@/styles/Projects.module.scss"
import { IProjectCardProps } from "@/utils/Interface"
import Image from "next/image"
import compStyles from "@/styles/Components.module.scss"
import Link from "next/link"
import { CringeProjects } from "@/utils/Contents"

export default function Projects() {
  return (
    <section id="projects" aria-label="Recent Projects">
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>Recent Projects</h1>
        <div className={styles.container}>
          {CringeProjects.map((projects) => (
            <ProjectItem
              key={projects.name}
              title={projects.name}
              description={projects.description}
              image={projects.image}
              repoLink={projects.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectItem({ title, description, image }: IProjectCardProps) {
  return (
    <div className={styles.item}>
      <div className={styles["img-wrapper"]}>
        <Image
          objectFit="cover"
          layout="fill"
          alt=""
          src={`/static/projects/${image}`}
          loading="lazy"
        />
      </div>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </div>
  )
}
