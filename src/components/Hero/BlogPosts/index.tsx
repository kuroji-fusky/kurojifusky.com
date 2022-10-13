import styles from "./BlogPosts.module.scss"
import WIPFiller from "../WIPFiller"

export function BlogPost() {
  return (
    <section className={styles.wrapper}>
      <h2>Blogs</h2>
      <WIPFiller />
    </section>
  )
}
