import { YTPlayerContext } from "@/utils/Context"
import Image from "next/image"
import { useContext } from "react"
import styles from "./YTPlayer.module.scss"

interface YTPlayerProps {
  link?: string
  style?: React.CSSProperties
	landingTitle?: string
}

export default function YTPlayer(props: YTPlayerProps) {
  const { loadPlayer, setLoadPlayer } = useContext(YTPlayerContext)

  return !loadPlayer ? (
    <div
      className={styles.preloaded}
      onClick={() => setLoadPlayer(true)}
    >
      <Image
        alt=""
        layout="fill"
        src={`https://img.youtube.com/vi/${props.link ?? ""}/maxresdefault.jpg`}
				loading="lazy"
      />
    </div>
  ) : (
    <iframe
      id={styles.embed}
      style={props.style}
      // prettier-ignore
      src={`https://www.youtube-nocookie.com/embed/${props.link ?? ""}?cc_load_policy=1&autoplay=1`}
      frameBorder="0"
      loading="lazy"
      allow="encrypted-media"
    ></iframe>
  )
}
