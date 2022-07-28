import styles from "@/styles/Others.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function OtherSection() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles["section-heading"]}>Other stuff I do</h1>
      <ul className={styles["grid-container"]}>
        <OtherItem />
        <OtherItem />
        <OtherItem />
      </ul>
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
              width="100%"
              height="100%"
              alt=""
              quality={82}
            />
          </div>
          <article>
            <h2>Heading</h2>
            <p>Description</p>
          </article>
        </a>
      </Link>
    </li>
  )
}
