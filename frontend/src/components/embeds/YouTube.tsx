import styles from "@/styles/components/YoutubeEmbed.module.scss"

export default function YouTube({ id, playlist, rounded }: IYouTubeProps) {
  return (
    <iframe
      title="YouTube Video Player"
      loading="lazy"
      src={
        playlist
          ? `https://www.youtube-nocookie.com/embed/videoseries?list=${playlist}&cc_load_policy=1`
          : `https://www.youtube-nocookie.com/embed/${id}`
      }
      frameBorder="0"
      allow="accelerometer; encrypted-media;"
      className={
        rounded !== undefined
          ? styles["container-rounded"].toString()
          : styles.container.toString()
      }
    />
  )
}
