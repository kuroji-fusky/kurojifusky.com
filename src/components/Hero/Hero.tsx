import Image from "next/image"
import { BtnLink } from "../Buttons"
import Backdrop from "../Backdrop"
import styles from "./Hero.module.scss"
import backdropStyles from "../Backdrop/Backdrop.module.scss"
import { useInView } from "react-intersection-observer"
import { NavbarScrollContext } from "@/utils/Context"
import { useContext } from "react"

export default function Hero() {
  const { isScrolled } = useContext(NavbarScrollContext)

  const { ref } = useInView({
    rootMargin: "-650px -150px 0px 0px",
    onChange(inView) {
      isScrolled(!inView)
    }
  })

  return (
    <>
      <section ref={ref} id={styles.hero} className={styles["hero-wrapper"]}>
        <Backdrop className={backdropStyles["heading-left"]} />
        <Backdrop className={backdropStyles["heading-right"]} />
        <div className={styles.content}>
          <h2 className={styles["gradient-wm-wrapper"]}>
            Hi, I'm
            <span>
              <span className={styles["gradient-wm"]}>skepfusky</span>!
            </span>
          </h2>
          <h3 className={styles.subheading}>
            A 20-year-old self-taught and self-employed fox-husky Filipino
            hobbyist from the Philippines
          </h3>
          <div role="list" className={styles["btn-row"]}>
            <BtnLink link="/portfolio" name="🗂️ Portfolio" />
            <BtnLink link="/fursona" name="🦊 Fursona" />
            <BtnLink link="/blog" name="📝 Blog Posts" />
            <BtnLink link="#" name="🤵 About me" />
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src="https://res.cloudinary.com/skepfusky-dookie/image/upload/w_1000/v1662975456/comm_for_davey_g2_i3nmhp.png"
            alt="skepfusky"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>
    </>
  )
}
