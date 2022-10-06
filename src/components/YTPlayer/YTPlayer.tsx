import { useState } from "react"
import styles from "./YTPlayer.module.scss"

interface YTPlayerProps {
  link?: string
  style?: React.CSSProperties
  onChange?: () => void
}

export default function YTPlayer({
  link = "n_CeY6DJVi0",
  style,
  onChange
}: YTPlayerProps) {
  return (
    <iframe
      id={styles.embed}
      style={style}
      src={`https://www.youtube-nocookie.com/embed/${link}?cc_load_policy=1`}
      onChange={onChange}
      frameBorder="0"
      loading="lazy"
      allow="encrypted-media"
    ></iframe>
  )
}
