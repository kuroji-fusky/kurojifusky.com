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
  tag
}: {
  title?: string
  description?: string
  link?: string
  img?: string
  tag?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={styles.wrapper}>
      <LoadingCube hidden={!isLoaded ? false : true} />
      <Link href="#" passHref>
        <a className="relative h-[250px] rounded-tl-md rounded-tr-md overflow-hidden">
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
        <div className={styles.heading}>
          <h2>{title}</h2>
          <Button className={styles["read-more"]} link={`/blog/${link}`}>
            Read more BINCH <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
        <p>{description}</p>
      </article>
    </div>
  )
}
