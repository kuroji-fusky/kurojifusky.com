import styles from "./YTPlayer.module.scss"

type YTPlayerProps = { link: string } & Pick<Components, "style">

export function YTPlayer(props: YTPlayerProps) {
  return (
    <iframe
      className={styles["container"]}
      style={props.style}
      // prettier-ignore
      src={`https://www.youtube-nocookie.com/embed/${props.link ?? ""}?cc_load_policy=1`}
      loading="lazy"
      allow="encrypted-media"
    ></iframe>
  )
}
