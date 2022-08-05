import styles from "@/styles/Projects.module.scss"
import Image from "next/image"
import compStyles from "@/styles/Components.module.scss"
import Link from "next/link"
import { CringeProjects } from "@/utils/Contents"
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleLeft,
  faAngleRight,
  faExternalLink
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
        <h1 className={styles["section-heading"]}>Open Source Projects on GitHub</h1>
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
          <button className={compStyles.button} onClick={scrollLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className={compStyles.button} onClick={scrollRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  )
}

export function ProjectItem({
  title,
  description,
  image,
  link,
  repoLink
}: IProjectCardProps) {
  return (
    <div
      className={styles.item}
      itemScope
      itemType="https://schema.org/Project"
    >
      <div className={styles["img-wrapper"]}>
        <Image
          objectFit="cover"
          layout="fill"
          alt=""
          src={`/static/projects/${image}`}
          loading="lazy"
          itemType="https://schema.org/ImageObject"
        />
      </div>
      <article className={styles["info-wrapper"]}>
        <h2 itemType="https://schema.org/name">{title}</h2>
        <p itemType="https://schema.org/description">{description}</p>
      </article>
      <div className={styles["btn-wrapper"]}>
        {repoLink && (
          <Link href={`https://github.com/${repoLink}`}>
            <a className={compStyles.button} role="button" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <span>Code</span>
            </a>
          </Link>
        )}
        {link ? (
          <Link href={link}>
            <a className={compStyles.button} role="button" target="_blank">
              <FontAwesomeIcon icon={faExternalLink} size="sm" />
              <span>View project</span>
            </a>
          </Link>
        ) : (
          <a
            className={compStyles["button-disabled"]}
            aria-disabled="true"
            role="button"
            target="_blank"
          >
            <FontAwesomeIcon icon={faExternalLink} size="sm" />
            <span>View project</span>
          </a>
        )}
      </div>
    </div>
  )
}
