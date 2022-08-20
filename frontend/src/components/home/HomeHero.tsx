import { useContext, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NavbarScrollContext } from "@/utils/Context"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { isMobile } from "react-device-detect"
import { InView } from "react-intersection-observer"
import { socials } from "@/utils/Contents"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import styles from "@/styles/sections/HomeHero.module.scss"
import Button from "../base/Button"
import LoadingCube from "../base/LoadingCube"

export default function HomeHero() {
  const { isScrolled } = useContext(NavbarScrollContext)
  const [isLoaded, setIsLoaded] = useState(false)

  const fursonaLoaded = () => {
    if (!isLoaded) return styles.fursona.toString()
    return styles["fursona-loaded"].toString()
  }

  const bioLoaded = () => {
    if (!isLoaded) return styles.bio.toString()
    return styles["bio-loaded"].toString()
  }

  const containerLoaded = () => {
    if (!isLoaded) return styles.container.toString()
    return styles["container-loaded"].toString()
  }

  return (
    <ParallaxProvider>
      <InView
        as="section"
        id={styles.hero}
        onChange={(inView) => isScrolled(inView)}
        rootMargin="-120px 0px 0px 0px"
      >
        <div className={containerLoaded()}>
          <span>&lt;</span>
          <span className={styles.text}>skepfusky</span>
          <span>&#47;&gt;</span>
        </div>
        <LoadingCube hidden={!isLoaded ? false : true} />
        <article className={bioLoaded()}>
          <p>
            <span className={styles.heading}>
              A 20-year-old hobbyist as a full-stack web developer, aspiring
              filmmaker, video editor, designer, and music producer from the
              Philippines
            </span>
            <br />
            <span>
              artwork by: <FaIcon icon={faDiscord} /> catastrophe#6282
            </span>
          </p>
          <div className={styles.buttons}>
            <Button className={styles["btn-item"]} link="#projects">
              Projects
            </Button>
            <Button className={styles["btn-item"]} link="/resume">
              Resume
            </Button>
            <Button className={styles["btn-item"]} link="/blog">
              Blog
            </Button>
            <Button className={styles["btn-item"]} link="/artworks">
              Gallery
            </Button>
          </div>
          <div className={styles.socials}>
            {socials.map(({ icon, link }) => (
              <Link key={link} href={link} passHref>
                <a target="_blank">
                  <FaIcon icon={icon} size="lg" />
                </a>
              </Link>
            ))}
          </div>
        </article>
        <div className={fursonaLoaded()}>
          <Parallax
            speed={-150}
            disabled={isMobile}
            className={styles["fursona-img-wrapper"]}
          >
            <Image
              src="/static/fursonas/comms/comm_for_davey_g2.png"
              layout="fill"
              objectFit="cover"
              alt="skepfusky commission"
              quality={69}
              onLoadingComplete={() => setIsLoaded(true)}
              priority
            />
          </Parallax>
        </div>
      </InView>
    </ParallaxProvider>
  )
}
