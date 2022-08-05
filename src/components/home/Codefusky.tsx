import styles from "@/styles/Codefusky.module.scss"
import YouTube from "../embeds/YouTube"
import YouTubeThumbnail from "../embeds/YouTubeThumbnail"

export default function Codefusky() {
  return (
    <section id="codefusky" className={styles.divider}>
      <div className={styles.wrapper}>
        <h1 className={styles["section-heading"]}>codefusky</h1>
        <p className={styles["section-heading"]}>
          My channel for web development and/or rambling about nerd shit
        </p>
        <div className="overflow-hidden rounded-xl md:w-[90%] lg:w-[60%] xl:w-[70%] mx-auto">
          <YouTube playlist="UUyATIf6yANiY5mewNjAfKvw" />
        </div>
        <div className={styles["other-videos-section"]}>
          <h2 className={styles.heading}>Other stuff</h2>
          <div className={styles.item}>
            <p>More content coming soon!</p>
          </div>
          <div className={styles.item}>
            <p>More content coming soon!</p>
          </div>
          <div className={styles.item}>
            <p>More content coming soon!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
