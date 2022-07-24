import styles from "@/styles/Hero.module.scss"

export default function HeaderHero() {
  return (
    <main id={styles.hero}>
      <div className={styles.container}>
        <span className={styles.side}>&lt;</span>
        <span className={styles.text}>skepfusky</span>
        <span className={styles.side}>&#47;&gt;</span>
      </div>
    </main>
  )
}
