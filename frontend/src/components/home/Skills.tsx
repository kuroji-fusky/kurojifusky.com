import styles from "@/styles/sections/Skills.module.scss"
import Link from "next/link"

export default function Skills() {
  return (
    <section id="projects" className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>Skill sets</h1>
        <div className="grid grid-cols-3 w-full gap-3">
          <SkillItem skill="Video and VFX editing" xp={4}>
            I've been editing videos since late-2014, initally used Vegas Pro
            and have transitioned to Premiere and After Effects in 2017.
          </SkillItem>
          <SkillItem skill="Music production" xp={2}>
            In the midst of the diss track scene on YouTube in 2017, I decided
            to tap into making experimental yet indie music in FL Studio. As
            well as mastering my own music too!
          </SkillItem>
          <SkillItem skill="Web development" xp={2}>
            After editing Fandom wikis for over a year now, and knowing my
            creativity can be reached beyond, with some knowledge on CSS - I
            decided to be come a web developer and gaining intermediate back-end
            knowledge.
          </SkillItem>
          <SkillItem skill="Systems programming" xp={1}>
            I have a basic knowledge on computer architecture but I have this
            interest of learning low-level languages like C++, Rust (and
            probably{" "}
            <Link
              href="https://github.com/carbon-language/carbon-lang"
              passHref
            >
              <a className="anchor" target="_blank">
                Carbon
              </a>
            </Link>{" "}
            too once it was released).
          </SkillItem>
          <SkillItem skill="Filmmaking" xp={3}>
            Also in the midst of the YouTube scene in 2017, I've also gotten an
            interest in the editing styles on various vlogging channels. In
            2019, I've gotten into the basics of filmography with content
            creators such as Potato Jet and Cinecom.
          </SkillItem>
          <SkillItem skill="UI design" xp={2}>
            I've had a keen-eye on design, paying attention to specific details
            on the interface since I've gotten exposed to computers; naturally,
            I've read a few sources about design philosophy and psychology.
          </SkillItem>
          <SkillItem skill="Dancer and lead vocalist" xp={2}>
            Not <em>really</em> confident on putting this out there, but yes -
            during at the midst of the 2020 lockdown, looking at freestyle
            dances and exploding vocals have intrigued and finding articles and
            videos to improve on vocals and freestyle dancing
          </SkillItem>
        </div>
      </div>
    </section>
  )
}

interface SkillItemProps {
  skill: string
  children?: React.ReactNode
  xp?: 1 | 2 | 3 | 4
}

export function SkillItem({ skill, children, xp }: SkillItemProps) {
  let xpMsg

  xp === 1
    ? (xpMsg = "Inexperienced")
    : xp === 2
    ? (xpMsg = "Intermediate")
    : xp === 3
    ? (xpMsg = "Advanced")
    : (xpMsg = "Experienced")

  return (
    <article className="bg-neutral-500 p-5 rounded-md">
      <h2>{skill}</h2>
      <strong>{xpMsg}</strong>
      <p>{children}</p>
    </article>
  )
}
