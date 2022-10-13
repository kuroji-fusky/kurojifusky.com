import { useContext, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavbarScrollContext } from "@/utils/Context"
import { BtnLink } from "../Buttons"
import { Btn } from "../Buttons/Btn"
import { sonas } from "./HeroContents"
import Backdrop from "../Backdrop"
import styles from "./Hero.module.scss"
import bdStyles from "../Backdrop/Backdrop.module.scss"

export default function Hero() {
  const { scrolled, isScrolled } = useContext(NavbarScrollContext)

  const { ref: intersectRef } = useInView({
    rootMargin: "-55px 150px 0px 0px",
    onChange(inView) {
      isScrolled(!inView)
    }
  })

  const [artIndex, setArtIndex] = useState(0)

  const iterateCuties = () => {
    setArtIndex(Math.floor(Math.random() * sonas.length))
  }

  return (
    <section ref={intersectRef} className={styles["hero-wrapper"]}>
      <Parallax
        disabled={scrolled}
        speed={-250}
        className={styles["parallax-wrapper"]}
      >
        <div className={styles.content}>
          <h2 className={styles["gradient-wm-wrapper"]}>
            Hi, I'm&nbsp;
            <span className={styles["gradient-wm"]}>skepfusky</span>!
          </h2>
          <h3 className={styles.subheading}>
            A 20-year-old self-taught, self-employed, and independent fox-husky
            Filipino hobbyist from the Philippines
          </h3>
          <div className={styles.artwork}>
            <span>
              Art by{" "}
              {sonas[artIndex]!.social && (
                <FontAwesomeIcon icon={sonas[artIndex]!.social} />
              )}{" "}
              <strong>{sonas[artIndex]!.artist}</strong>
            </span>
            <div className="flex gap-4">
              <Btn onClick={iterateCuties} name="Change this shit" />
              <BtnLink
                emojiFix
                ariaList
                link="/about"
                name="🦊 About this character"
              />
              <BtnLink emojiFix ariaList link="/about" name="🤵 About me" />
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src={sonas[artIndex]!.img}
            alt={`Drawn by ${sonas[artIndex]!.artist}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Parallax>
      <div className={styles["gradient-transition"]} aria-hidden="true"></div>
      <Backdrop className={bdStyles["heading-left"]} />
      <Backdrop className={bdStyles["heading-right"]} />
    </section>
  )
}
