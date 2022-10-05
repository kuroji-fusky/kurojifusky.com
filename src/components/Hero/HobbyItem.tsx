import LinkGradient from "../Buttons/LinkGradient"
import styles from "./HobbyItem.module.scss"

interface HobbyItemProps {
  title: string
  description: string
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
    <article className="px-5 py-4 border-2 border-sona-borahaealt-500 rounded-md flex flex-col gap-y-1 items-center">
      <h2 className={styles.heading}>
        <span className={styles["heading-inline"]}>{title}</span>
      </h2>
      <p>{description}</p>
      {link && <LinkGradient name={linkName ?? "View this shit"} link="#" />}
    </article>
  )
}
