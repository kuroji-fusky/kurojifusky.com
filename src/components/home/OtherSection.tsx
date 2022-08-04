import styles from "@/styles/Others.module.scss"
import { IOtherCardProps } from "@/utils/Interface"
import Image from "next/image"
import Link from "next/link"

export default function OtherSection() {
  return (
    <section className={styles.divider} aria-label="Here's some stuff I do">
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>Here's some stuff I do</h1>
        <ul className={styles["grid-container"]}>
          <OtherItem
            title="Videography"
            description="I've been editing videos for almost a decade, from Minecraft videos, SFM animations, vlogs, and... YTPs lol"
            image="fursonas/08.png"
          />
          <OtherItem
            title="Programming & UI Design"
            description="This is where I rekindled my passing ever since I wrote some code in Visual Basic, .vbs, and .bat files at age 10"
            image="fursonas/09.png"
          />
          <OtherItem
            title="Indie music production"
            description="Getting into self-produced music since 2017 with FL Studio and released 2 albums and 3 EPs"
            image="fursonas/08.png"
          />
        </ul>
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
