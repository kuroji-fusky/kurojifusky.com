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
  blogtype
}: {
  title?: string
  description?: string
  link?: string
  blogtype?: string
  img?: string
}) {
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
        <span className={styles.blogtype}>{blogtype?.replace(/_/g, " ")}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button className={styles["read-more"]} link={`/blog/${link}`}>
          Read more <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </article>
    </div>
  )
}
