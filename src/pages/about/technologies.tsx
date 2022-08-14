import Container from "@/components/base/Container"
import Image from "next/image"
import styles from "@/styles/Technologies.module.scss"
import HeaderHeroItem from "@/components/items/HeaderHeroItem"

export default function Technologies() {
  return (
    <Container>
      <HeaderHeroItem wrap>
        <h1>Technologies/Software I use</h1>
      </HeaderHeroItem>
      <section className="max-w-screen-2xl px-8 mx-auto">
        <h2>Programming</h2>
        <h3>Code editors/IDEs</h3>
        <div className={styles["stack-grid"]}>
          <TechItem name="VS Code" />
          <TechItem name="Visual Studio" />
          <TechItem name="PyCharm" />
        </div>
        <h3>Front-end</h3>
        <div className={styles["stack-grid"]}>
          <TechItem name="React" />
          <TechItem name="Next.js" />
          <TechItem name="Vue.js" />
          <TechItem name="Nuxt.js" />
          <TechItem name="Tailwind CSS" />
          <TechItem name="Sass" />
        </div>
      </section>
      <section className="max-w-screen-2xl px-8 mx-auto">
        <h2>Filmmaking/video editing</h2>
        <div className={styles["stack-grid"]}>
          <TechItem name="Photoshop" />
          <TechItem name="Audition" />
          <TechItem name="Premiere Pro" />
          <TechItem name="After Effects" />
          <TechItem name="FL Studio 20" />
          <TechItem name="Avidemux 2.5.6" />
          <TechItem name="CN Levelator" />
        </div>
        <h3>VFX Plugins</h3>
        <div className={styles["stack-grid"]}>
          <TechItem name="Handy Seamless Transitions" />
          <TechItem name="Boris FX Sapphire" />
          <TechItem name="Red Giant Universe" />
        </div>
      </section>
      <section className="max-w-screen-2xl px-8 mx-auto">
        <h2>Music</h2>
        <div className={styles["stack-grid"]}>
          <TechItem name="FL Studio 20" />
          <TechItem name="Audition" />
          <TechItem name="Melodyne" />
        </div>
      </section>
      <section className="max-w-screen-2xl px-8 mx-auto">
        <h2>Design</h2>
        <div className={styles["stack-grid"]}>
          <TechItem name="Figma" />
          <TechItem name="Photoshop" />
          <TechItem name="Illustrator" />
        </div>
      </section>
      <section className="max-w-screen-2xl px-8 mx-auto">
        <h2>Equipment</h2>
        <div className={styles["stack-grid"]}>
          <TechItem name="Canon EOS M50" />
        </div>
      </section>
    </Container>
  )
}

export function TechItem({ name, image = "" }: ITechItemProps) {
  return (
    <div className={styles["stack-item"]}>
      {/* <Image src={image} alt={`Icon for ${name}`} /> */}
      <span>a</span>
      <span className="font-bold">{name}</span>
    </div>
  )
}
