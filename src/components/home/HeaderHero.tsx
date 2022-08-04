import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import styles from "@/styles/HeaderHero.module.scss"

export default function HeaderHero() {
  return (
    <ParallaxProvider>
      <section id={styles.hero}>
        <div className={styles.fursona}>
          <Parallax
            speed={-50}
            className={styles["fursona-wrapper"]}
          >
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
        <div>Some stuff here I suppose lol</div>
      </section>
    </ParallaxProvider>
  )
}
