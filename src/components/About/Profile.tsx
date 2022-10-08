import styles from "./Profile.module.scss"

export function Profile() {
  return (
    <section className={styles.wrapper}>
      <div className={styles["img-wrapper"]}>img</div>
      <h2 className={styles.heading}>Yeet</h2>
      <div className={styles["item-date"]}>DOB & Location</div>
      <div className={styles["item-edu-1"]}>Edu 1</div>
      <div className={styles["item-edu-2"]}>Edu 2</div>
      <div className={styles["item-edu-3"]}>Edu 3</div>
    </section>
  )
}
