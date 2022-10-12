import { LinkGradient } from "../Links/LinkGradient"
import styles from "./HobbyItem.module.scss"
import ReactMarkdown from "react-markdown"

interface HobbyItemProps {
  title: string
  subtitle?: string
  description: string
  link?: string
  linkName?: string
}

export default function HobbyItem(props: HobbyItemProps) {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.heading}>
        <span className={styles["heading-inline"]}>{props.title}</span>
      </h2>
      <ReactMarkdown className={styles.subheading}>
        {props.subtitle ?? ""}
      </ReactMarkdown>
      <hr className={styles.separator} />
      <ReactMarkdown>{props.description}</ReactMarkdown>
      {props.link && (
        <>
          <hr className={styles.separator} />
          <LinkGradient name={props.linkName ?? "View Projects"} link="#" />
        </>
      )}
    </article>
  )
}
