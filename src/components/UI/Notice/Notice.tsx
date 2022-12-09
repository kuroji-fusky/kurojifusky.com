import {
  faInfoCircle,
  faTimesCircle,
  faWarning
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Notice.module.scss"

interface NoticeProps {
  title?: string
  content?: string
  type?: "warning" | "error"
}

export function Notice(props: NoticeProps) {
  const states = () => {
    const statesObj = {
      info: {
        CSS: styles["info"],
        icon: faInfoCircle
      },
      warning: {
        CSS: styles["warn"],
        icon: faWarning
      },
      error: {
        CSS: styles["error"],
        icon: faTimesCircle
      }
    }

    return statesObj[props.type ?? "info"]
  }

  return (
    <div id={styles["wrapper"]} className={states().CSS}>
      <FontAwesomeIcon
        icon={states().icon}
        size={props.title !== undefined ? "xl" : undefined}
      />
      <div id={styles["content"]}>
        {props.title && <strong>{props.title}</strong>}
        <span>{props.content}</span>
      </div>
    </div>
  )
}
