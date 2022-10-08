import { LinkGradient } from "../Links/LinkGradient"
import styles from "./HobbyItem.module.scss"

interface HobbyItemProps {
  title: string
  subtitle?: string
  description: React.ReactElement
  link?: string
  linkName?: string
}

export default function HobbyItem(props: HobbyItemProps) {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.heading}>
        <span className={styles["heading-inline"]}>{props.title}</span>
      </h2>
      <p className="!leading-[1.25rem] !text-base uppercase text-neutral-200 opacity-75 pt-1">{props.subtitle}</p>
      <p>{props.description}</p>
      {props.link && (
        <>
          <hr className={styles.separator} />
          <LinkGradient name={props.linkName ?? "View Projects"} link="#" />
        </>
      )}
    </article>
  )
}
