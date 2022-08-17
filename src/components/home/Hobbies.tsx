import styles from "@/styles/sections/Hobbies.module.scss"
import { HobbiesItem } from "../items/HobbiesItem"

export default function Hobbies() {
  return (
    <section className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>What I do</h1>
        <ul className={styles["grid-container"]}>
          <HobbiesItem
            title="Video editing"
            description="I've been editing videos for almost a decade, from Minecraft Let's Plays, SFM animations, vlogs, and... YTPs"
            image="banners/premiere-showcase.png"
          />
          <HobbiesItem
            title="Programming & UI Design"
            description="I rekindled my programming skills since I wrote some code in Visual Basic, .vbs, and .bat files at age 10, crazy right?"
            image="banners/github-showcase.png"
          />
          <HobbiesItem
            title="Producing indie music"
            description="I've gotten into indie music since 2017 with FL Studio and released 2 albums and 3 EPs"
            image="banners/music-showcase.png"
          />
        </ul>
      </div>
    </section>
  )
}
