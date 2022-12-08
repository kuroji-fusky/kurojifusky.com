import { SectionContainer } from "../SectionContainer"
import styles from "./AboutMe.module.scss"
import { cloudinary } from "@/utils/ImgProviders"
import Image from "next/image"
import { LinkUnderline, RoundedBtn } from "@/components/UI"

export function AboutMeSection() {
  return (
    <SectionContainer className={styles["wrapper"]}>
      <div className={styles["content-wrapper"]}>
        <article className={styles["bio-container"]}>
          <p>
            I'm a 20-year-old independent self-taught hobbyist individual in the
            Phlippines with a wide range set of skills, working on modern web
            technologies, UI/UX design. As well as video editing, filmmaking,
            and indie music production.
          </p>
          <p>
            I usually work on my own accord, handle everything on my own and
            rely on other external sources to improve. I have a diverse
            portfolio ranging from my open-source projects, to other forms of
            art like videos and self-produced music all on my own!
          </p>
          <p>
            If there are any questions that you're just curious about, check the{" "}
            <LinkUnderline link="#faqs">FAQs</LinkUnderline> section!
          </p>
          <div className={styles["btn-wrapper"]}>
            <RoundedBtn link="/about">Learn More About Me</RoundedBtn>
            <RoundedBtn link="/character">Character reference</RoundedBtn>
          </div>
        </article>
        <aside className={styles["img-group-proximity"]}>
          <ImgWrapper className={styles["img-main"]} src="Skep3D_bgod2l.png" />
          <ImgWrapper
            className={styles["img-small-1"]}
            src="blushy_virgin_trans_ebbkdj.png"
          />
          <ImgWrapper
            className={styles["img-small-2"]}
            src="JAKEmegaSNAKE_l61xfu.png"
          />
        </aside>
      </div>
    </SectionContainer>
  )
}

interface ImgWrapperProps {
  className: string
  src: string
}

function ImgWrapper(props: ImgWrapperProps) {
  return (
    <div className={props.className}>
      <div className={styles["img-fix"]}>
        <Image
          src={cloudinary({
            rootDir: "fursonas",
            quality: 90,
            fileName: props.src
          })}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  )
}
