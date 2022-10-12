import { useContext, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { Parallax } from "react-scroll-parallax"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavbarScrollContext } from "@/utils/Context"
import { BtnLink } from "../Buttons"
import { sonas } from "./HeroContents"
import Backdrop from "../Backdrop"
import styles from "./Hero.module.scss"
import bdStyles from "../Backdrop/Backdrop.module.scss"
import { Btn } from "../Buttons/Btn"

// This code makes me want to die
type RandomArtTypes = {
  img?: any
  artist?: string | undefined
  social?: IconDefinition
  socialLink?: string | undefined
} & {}

export default function Hero() {
  const { scrolled, isScrolled } = useContext(NavbarScrollContext)

  const { ref: intersectRef } = useInView({
    rootMargin: "-55px 150px 0px 0px",
    onChange(inView) {
      isScrolled(!inView)
    }
  })

  const [currentArt, setCurrentArt] = useState<RandomArtTypes>(sonas[0])

  const randomArt = () => {
    let randomIndex = Math.floor(Math.random() * sonas.length)
    let cutie = sonas[randomIndex]
    return cutie
  }

	console.warn("I am very aware that there are minified hydration errors on my site xd")

  return (
    <section ref={intersectRef} className={styles["hero-wrapper"]}>
      <Parallax
        disabled={scrolled}
        speed={-250}
        className={styles["parallax-wrapper"]}
      >
        <div className={styles.content}>
          <h2 className={styles["gradient-wm-wrapper"]}>
            Hi, I'm
            <span className={styles["gradient-wm"]}>skepfusky</span>!
          </h2>
          <h3 className={styles.subheading}>
            A 20-year-old self-taught, self-employed, and independent fox-husky
            Filipino hobbyist from the Philippines
          </h3>
          <div className={styles.artwork}>
            <span>
              Art by{" "}
              {currentArt!.social && (
                <FontAwesomeIcon icon={currentArt!.social} />
              )}{" "}
              <strong>{currentArt!.artist}</strong>
            </span>
            <div className="flex gap-4">
              <BtnLink emojiFix ariaList link="/about" name="🦊 About this character" />
              <BtnLink emojiFix ariaList link="/about" name="🤵 About me" />
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <Image
            src={currentArt!.img}
            alt={`Drawn by ${currentArt!.artist}`}
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
