import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { isMobile } from "react-device-detect"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/HeaderHero.module.scss"
import { socials } from "@/utils/Contents"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

export default function HeaderHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  const fursonaLoaded = () => {
    if (isLoaded !== true) {
      return styles.fursona.toString()
    }

    return styles["fursona-loaded"].toString()
  }

  const bioLoaded = () => {
    if (isLoaded !== true) {
      return styles.bio.toString()
    }

    return styles["bio-loaded"].toString()
  }

  const containerLoaded = () => {
    if (isLoaded !== true) {
      return styles.container.toString()
    }

    return styles["container-loaded"].toString()
  }


  return (
    <ParallaxProvider>
      <section id={styles.hero}>
        <div className={containerLoaded()}>
          <span>&lt;</span>
          <span className={styles.text}>skepfusky</span>
          <span>&#47;&gt;</span>
        </div>
        <article className={bioLoaded()}>
          <p>
            <span className={styles.heading}>
              a 20-year-old hobbyist as a full-stack web developer, aspiring
              filmmaker, video editor, designer, and music producer from the Philippines
            </span>
            <br />
            <span>
              artwork by: <FaIcon icon={faDiscord} /> catastrophe#6282
            </span>
          </p>
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
            speed={-50}
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
      </section>
    </ParallaxProvider>
  )
}
