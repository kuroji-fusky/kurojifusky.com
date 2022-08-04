import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/HeaderHero.module.scss"
import { socials } from "@/utils/Contents"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

export default function HeaderHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  const changeLoaded = () => {
    if (isLoaded !== true) {
      return styles.fursona.toString()
    }

    return styles["fursona-loaded"].toString()
  }

  return (
    <ParallaxProvider>
      <section id={styles.hero}>
        <div className={styles.container}>
          <span>&lt;</span>
          <span className={styles.text}>skepfusky</span>
          <span>&#47;&gt;</span>
        </div>
        <div className={styles.bio}>
          <p>
            <span>
              a 20-year-old hobbyist as a full-stack web developer, video
              editor, and music producer
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
        </div>
        <div className={changeLoaded()}>
          <Parallax speed={-50} className={styles["fursona-img-wrapper"]}>
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
