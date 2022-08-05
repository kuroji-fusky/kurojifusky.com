import styles from "@/styles/YoutubeEmbed.module.scss"

export default function YouTube({
  id,
  playlist
}: {
  id?: string
  playlist?: string
}) {
  return (
    <iframe
      title="YouTube Video Player"
      src={
        playlist
          ? `https://www.youtube-nocookie.com/embed/videoseries?list=${playlist}&cc_load_policy=1`
          : `https://www.youtube-nocookie.com/embed/${id}&cc_load_policy=1`
      }
      frameBorder="0"
      allow="accelerometer; encrypted-media; autoplay"
      className={styles.container}
    />
  )
}
