import styles from "@/styles/Others.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function OtherSection() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>Stuff I do</h1>
        <p className={styles["section-heading"]}>I do extracuricular shit fam</p>
        <ul className={styles["grid-container"]}>
          <OtherItem />
          <OtherItem />
          <OtherItem />
        </ul>
      </div>
    </section>
  )
}

export function OtherItem() {
  return (
    <li className={styles.item}>
      <Link href="#">
        <a>
          <div className={styles["img-wrapper"]}>
            <Image
              src="/static/fursonas/comms/comm_for_davey_g2_catastrophe.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
              quality={82}
            />
          </div>
          <article className={styles.content}>
            <h2>Heading</h2>
            <p>Description</p>
          </article>
        </a>
      </Link>
    </li>
  )
}
