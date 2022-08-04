import styles from "@/styles/Others.module.scss"
import { IOtherCardProps } from "@/utils/Interface"
import Image from "next/image"
import Link from "next/link"

export default function OtherSection() {
  return (
    <section className={styles.divider} aria-label="Here's some stuff I do">
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>Here's some stuff I do</h1>
        <p className={styles["section-heading"]}>I'm a whole package baby</p>
        <ul className={styles["grid-container"]}>
          <OtherItem
            title="Videography"
            description="lmao"
            image="fursonas/01.jpg"
          />
          <OtherItem
            title="UI Design"
            description="lmao"
            image="fursonas/01.jpg"
          />
          <OtherItem
            title="Self-produced music"
            description="lmao"
            image="fursonas/01.jpg"
          />
        </ul>
        <h1>DIAMONDS</h1>
      </div>
    </section>
  )
}

export function OtherItem({ title, description, image }: IOtherCardProps) {
  return (
    <li className={styles.item}>
      <Link href="#">
        <a>
          <div className={styles["img-wrapper"]}>
            <Image
              aria-label={title}
              src={`/static/${image}`}
              layout="fill"
              objectFit="cover"
              alt={title}
              loading="lazy"
              quality={82}
            />
          </div>
          <article className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        </a>
      </Link>
    </li>
  )
}
