import styles from "./YTPlayer.module.scss"

interface YTPlayerProps {
  link?: string
  style?: React.CSSProperties
}

export default function YTPlayer(props: YTPlayerProps) {
  return (
    <iframe
      id={styles.embed}
      style={props.style}
      // prettier-ignore
      src={`https://www.youtube-nocookie.com/embed/${props.link ?? "n_CeY6DJVi0"}?cc_load_policy=1`}
      frameBorder="0"
      loading="lazy"
      allow="encrypted-media"
    ></iframe>
  )
}
