import { useState } from "react"
import { faClose, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Notification.module.scss"

interface NotificationProps {
  heading: string
  content: NonNullable<React.ReactElement> | undefined
  icon?: "error" | "warning" | "info"
}

export default function Notification(props: NotificationProps) {
  const [hide, setHide] = useState(false)

  return (
    <div id={styles.wrapper} className={!hide ? "" : "hidden"} tabIndex={1}>
      <div className={styles.title}>
        <h2>
          <FontAwesomeIcon icon={faWarning} className="mr-2" />
          {props.heading}
        </h2>
        <button onClick={() => setHide(true)}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <span>{props.content}</span>
    </div>
  )
}
