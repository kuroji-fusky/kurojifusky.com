import Image from "next/image"
import Button from "../base/Button"
import styles from "@/styles/sections/Projects.module.scss"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import LoadingCube from "../base/LoadingCube"

export default function ProjectItem({
  title,
  description,
  image,
  link,
  repoLink
}: IProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

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
          alt={`Image for ${title}: ${description}`}
          src={`/static/projects/${image}`}
          loading="lazy"
          itemType="https://schema.org/ImageObject"
          onLoadingComplete={() => setIsLoaded(true)}
        />
        <LoadingCube hidden={!isLoaded ? false : true} />
      </div>
      <article className={styles["info-wrapper"]}>
        <h2 itemType="https://schema.org/name">{title}</h2>
        <p itemType="https://schema.org/description">{description}</p>
      </article>
      <div className={styles["btn-wrapper"]}>
        {repoLink && (
          <Button link={`https://github.com/${repoLink}`} newTab>
            <FontAwesomeIcon icon={faGithub} />
            <span>Code</span>
          </Button>
        )}
        {link ? (
          <Button link={link} newTab>
            <FontAwesomeIcon icon={faExternalLink} size="sm" />
            <span>View project</span>
          </Button>
        ) : (
          <Button link="#projects" disabled>
            <FontAwesomeIcon icon={faExternalLink} size="sm" />
            <span>View project</span>
          </Button>
        )}
      </div>
    </div>
  )
}
