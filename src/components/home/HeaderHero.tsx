
import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/HeaderHero.module.scss"
import { socials } from "@/utils/Contents"
import Link from "next/link"

export default function HeaderHero() {
  return (
    <ParallaxProvider>
      <section id={styles.hero}>
        <div className={styles.fursona}>
          <Parallax speed={-50} className={styles["fursona-wrapper"]}>
            <Image
              src="/static/fursonas/comms/comm_for_davey_g2.png"
              layout="fill"
              objectFit="cover"
              alt="skepfusky commission"
              quality={69}
            />
          </Parallax>
        </div>
        <div className={styles.container}>
          <span>&lt;</span>
          <span className={styles.text}>skepfusky</span>
          <span>&#47;&gt;</span>
        </div>
        <div className={styles.bio}>
          <p>a 20-year-old hobbyist as a full-stack web developer, video editor, and music producer</p>
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
      </section>
    </ParallaxProvider>
  )
}
