import styles from "./Videos.module.scss"

interface VideoItemProps {
  title?: string
  description?: React.ReactElement
  onClick?: () => any | undefined
  active?: boolean
}

export default function VideoItem(props: VideoItemProps) {
  return (
    <button
      className={styles[!props.active ? "item" : "item-selected"]}
      onClick={props.onClick}
    >
      <strong role="heading" aria-level={2}>
        {props.title}
      </strong>
      <p>{props.description}</p>
    </button>
  )
}
