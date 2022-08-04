import styles from "@/styles/Others.module.scss"
import { IOtherCardProps } from "@/utils/Interface"
import Image from "next/image"
import Link from "next/link"

export default function OtherSection() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>Stuff I do</h1>
        <p className={styles["section-heading"]}>
          I do extracuricular shit fam
        </p>
        <ul className={styles["grid-container"]}>
          <OtherItem
            title="Video editing"
            description="lmao"
            image="fursonas/01.jpg"
          />
          <OtherItem
            title="Photography"
            description="lmao"
            image="fursonas/01.jpg"
          />
          <OtherItem
            title="Dance lol"
            description="lmao"
            image="fursonas/01.jpg"
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
              src={`/static/${image}`}
              layout="fill"
              objectFit="cover"
              alt=""
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
