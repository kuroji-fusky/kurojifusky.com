import { useContext, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { Parallax } from "react-scroll-parallax"
import { NavbarScrollContext } from "@/utils/Context"
import { BtnLink } from "../Buttons"
import { sonas } from "./HeroContents"
import Backdrop from "../Backdrop"
import styles from "./Hero.module.scss"
import bdStyles from "../Backdrop/Backdrop.module.scss"

// This code makes me want to die
type RandomArtTypes = {
  img?: any
  artist?: string | undefined
  social?: IconDefinition | undefined
  socialLink?: string | undefined
} & {}

export default function Hero() {
  const { isScrolled } = useContext(NavbarScrollContext)

  const { ref: intersectRef } = useInView({
    rootMargin: "-150px 250px 0px 0px",
    onChange(inView) {
      isScrolled(!inView)
    }
  })

  const [currentArt, setCurrentArt] = useState<RandomArtTypes>({})

  const randomArt = () => {
    let randomIndex = Math.floor(Math.random() * sonas.length)
    let cutie = sonas[randomIndex]
    return cutie
  }

  useEffect(() => {
    setCurrentArt(randomArt)
  }, [])

  return (
    <section ref={intersectRef} className={styles["hero-wrapper"]}>
      <Backdrop className={bdStyles["heading-left"]} />
      <Backdrop className={bdStyles["heading-right"]} />
      <Parallax speed={-250} className={styles["hero-parallax-wrapper"]}>
        <div className={styles.content}>
          <h2 className={styles["gradient-wm-wrapper"]}>
            Hi, I'm
            <span className={styles["gradient-wm"]}>skepfusky</span>!
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
          <span>Art by {currentArt!.artist}</span>
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
    </section>
  )
}
