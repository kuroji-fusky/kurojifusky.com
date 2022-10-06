import styles from "./Videos.module.scss"

interface VideoItemProps {
  title?: string
  description?: React.ReactElement
  onClick?: () => any
  active?: boolean
}

export default function VideoItem({
  title,
  description,
  onClick,
  active
}: VideoItemProps) {
  return (
    <button
      id="item"
      className={styles[!active ? "item" : "item-selected"]}
      onClick={onClick}
    >
      <strong role="heading" aria-level={2}>
        {title}
      </strong>
      <p>{description}</p>
    </button>
  )
}
