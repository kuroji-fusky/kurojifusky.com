import baseStyles from "@/styles/Base.module.scss"
import styles from "@/styles/Home.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function OtherShit() {
  return (
    <section className={baseStyles["content-wrapper"]}>
      <h1 className={baseStyles["content-heading"]}>Other stuff I do</h1>
      <div className={styles["other-items-grid"]}>
        <OtherItem />
        <OtherItem />
        <OtherItem />
      </div>
    </section>
  )
}

export function OtherItem() {
  return (
    <Link href="#">
      <a className={styles.item}>
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
          <h2>Music lol</h2>
          <p>
            yeah yeah, alright, you done tho, i told you mans not hot, my girl
            say take off your jacket - i say hims, mans not hot
          </p>
        </article>
      </a>
    </Link>
  )
}
