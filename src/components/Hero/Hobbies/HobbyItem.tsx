import Image from "next/image"
import { LinkGradient } from "../../Links/LinkGradient"
import styles from "./HobbyItem.module.scss"
import ReactMarkdown from "react-markdown"
import { useInView } from "react-intersection-observer"

interface HobbyItemProps {
  title?: string
  subtitle?: string
  description: string
  link?: string
  linkName?: string
  img?: string
  imgAlt?: string
}

export default function HobbyItem(props: HobbyItemProps) {
  const defaults = {
    img: "https://res.cloudinary.com/skepfusky-dookie/image/upload/v1665156812/sample.jpg",
    imgAlt: "Placeholder image"
  }

  const { ref, inView } = useInView({
    rootMargin: "0px 0px -420px 0px",
		triggerOnce: true,
  })

  return (
    <section ref={ref} id={styles[!inView ? "section-hidden" : "section"]}>
      <figure className={styles["hs-container"]}>
        <div className={styles["hs-img-wrapper"]}>
          <div className={styles["blend-on-hover"]}></div>
          <Image
            src={props.img ?? defaults.img}
            layout="fill"
            objectFit="cover"
            alt={props.imgAlt ?? "Placeholder image"}
            loading="lazy"
          />
        </div>
        <figcaption className={styles.caption}>
          <ReactMarkdown>{props.imgAlt ?? defaults.imgAlt}</ReactMarkdown>
        </figcaption>
        <div className={styles["gradient-border"]}></div>
      </figure>
      <article className={styles.wrapper}>
        <h2 className={styles.heading}>
          <span className={styles["heading-inline"]}>{props.title}</span>
        </h2>
        <ReactMarkdown className={styles.subheading}>
          {props.subtitle ?? ""}
        </ReactMarkdown>
        <ReactMarkdown>{props.description}</ReactMarkdown>
        {props.link && (
          <>
            <hr className={styles.separator} />
            <LinkGradient name={props.linkName ?? "View Projects"} link="#" />
          </>
        )}
      </article>
    </section>
  )
}
