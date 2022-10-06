import LinkGradient from "../Buttons/LinkGradient"
import styles from "./HobbyItem.module.scss"

interface HobbyItemProps {
  title: string
  description: React.ReactElement
  link?: string
  linkName?: string
}

export default function HobbyItem({
  title,
  description,
  link,
  linkName
}: HobbyItemProps) {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.heading}>
        <span className={styles["heading-inline"]}>{title}</span>
      </h2>
      <p>{description}</p>

      {link && (
        <>
          <hr className={styles.separator} />
          <LinkGradient name={linkName ?? "View Projects"} link="#" />
        </>
      )}
    </article>
  )
}
