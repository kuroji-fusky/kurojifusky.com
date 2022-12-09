import styles from "./BlogSection.module.scss"
import { BlogSectionProps } from "./BlogTypes"

export function BlogSection(props: BlogSectionProps) {
  return (
    <div className={styles["section-wrapper"]}>
      <h1 className={styles["heading"]}>{props.title}</h1>
			<div className={styles[!props.heading ? "contents-row" : "contents-heading"]}>
      {props.children}
			</div>
    </div>
  )
}
