import { useState } from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import Button from "../base/Button"
import LoadingCube from "../base/LoadingCube"
import styles from "@/styles/components/BlogItem.module.scss"

export default function BlogItem({
  title,
  description,
  link,
  img = "",
  blogtype,
  date
}: IBlogItemProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={styles.wrapper}
      data-blogtype={blogtype?.replace(/_/g, "-")}
    >
      <Link href={`/blog/${link}`} passHref>
        <a className={styles["img-link"]}>
          <div className={styles["cube-wrapper"]}>
            <LoadingCube hidden={!isLoaded ? false : true} />
          </div>
          <Image
            src={img}
            alt={`Thumbnail for ${title}: ${description}`}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </a>
      </Link>
      <article className={styles["info-container"]}>
        <div className={styles.header}>
          <span>{blogtype?.replace(/_/g, " ")}</span>
          <span className={styles["blog-date"]}>{date}</span>
        </div>
        <h3>
          <Link href={`/blog/${link}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </article>
    </div>
  )
}
