import Image from "next/image"
import { IProjectCardProps } from "@/utils/Interface"
import Link from "next/link"
import styles from "@/styles/Components.module.scss"

export default function ProjectItem({
  title = "Title",
  description = "Description",
  image = "",
  link = "",
  repoLink = ""
}: IProjectCardProps) {
  return (
    <div
      className={styles["project-card"]}
      itemScope
      itemType="https://schema.org/Project"
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="image" content={image} />
      <Link href={link}>
        <a>
          <Image src={image} alt={title} itemProp="image" />
        </a>
      </Link>
      <article>
        <h2 itemProp="name">{title}</h2>
        <p itemProp="description">{description}</p>
      </article>
      <div className={styles["btn-wrapper"]}>
        <Link href={link}>
          <a className={styles.button} role="button">
            View project
          </a>
        </Link>
        {repoLink && (
          <Link href={`https://github.com/${repoLink}`}>
            <a className={styles.button} role="button">
              Source code
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
