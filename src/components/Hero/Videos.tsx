import { useEffect, useState } from "react"
import { videos } from "./HeroContents"
import YTPlayer from "../YTPlayer"
import VideoItem from "./VideoItem"
import styles from "./Videos.module.scss"
import { YTPlayerContext } from "@/utils/Context"
import { InView, useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

interface VideoInfoProps {
  title: string
  videoTitle?: string
  desc: string
  id: string
}

export function Videos() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [videoInfo, setVideoInfo] = useState<VideoInfoProps>()
  const [scrollCSS, setScrollCSS] = useState(styles["vc-visible"])

  const [loadPlayer, setLoadPlayer] = useState(false)

  const videoHandler = (input: number) => {
    setActiveVideoIndex(input)
    setScrollCSS(styles["vc-out"])

    activeVideoIndex !== input
      ? setScrollCSS(styles["vc-out"])
      : setScrollCSS(styles["vc-visible"])
  }

  useEffect(() => {
    /**
     * Whenever a user clicks an items, it will set a 250ms delay
     * in order to create a seamless transition, then show the content
     * for additional 150ms later.
     */
    setTimeout(() => {
      // Revert to showing thumbnail when item changes to save network and performance.
      setLoadPlayer(false)
      setVideoInfo({
        title: videos[activeVideoIndex].cardTitle,
        videoTitle: videos[activeVideoIndex].videoTitle,
        desc: videos[activeVideoIndex].cardDesc,
        id: videos[activeVideoIndex].id
      })
      setScrollCSS(styles["vc-in"])
    }, 250)

    setTimeout(() => {
      setScrollCSS(styles["vc-visible"])
    }, 350)
  }, [activeVideoIndex])

  const { ref } = useInView({
    rootMargin: "-55px 150px 0px 0px",
    onChange(inView) {
      setLoadPlayer(false)
    }
  })

  return (
    <section className={styles.wrapper}>
      <YTPlayerContext.Provider value={{ loadPlayer, setLoadPlayer }}>
        <div className={styles["content-wrapper"]}>
          <article>
            <h1>Videos</h1>
            <p>
              After watching YouTube videos since 2010, I've always wanted to
              dabble on editing videos ever since, and I've persued that
              commitment in mid-2014.
            </p>
            <p>
              We all start from somewhere, I started from Minecraft videos in
              2015 to full-on blogs with higher production quality!
            </p>
            <p>
              Just please... don't look back at my old Minecraft videos, I can
              guarantee you <em>will</em> lose braincells. It's that bad lol
            </p>
          </article>
          <div className={styles.list}>
            {videos.map((video, index) => (
              <VideoItem
                key={index}
                title={video.title}
                description={video.description}
                onClick={() => videoHandler(index)}
                active={index === activeVideoIndex}
              />
            ))}
          </div>
        </div>
        <aside
          ref={ref}
          id={styles["yt-player-section"]}
          className={scrollCSS}
          style={{
            width: "calc(100% * var(--player-width-responsive, 1.025))"
          }}
          data-player-loaded={!loadPlayer ? undefined : "true"}
        >
          <YTPlayer link={videoInfo?.id} style={{ width: "100%" }} />
          <strong
            className={styles["play-notice"]}
            onClick={() => setLoadPlayer(true)}
          >
            <FontAwesomeIcon icon={faPlay} />
            Clicc to play
          </strong>
          <article id={styles.content}>
            <h2>{videoInfo?.title}</h2>
            <p>{videoInfo?.desc}</p>
          </article>
        </aside>
      </YTPlayerContext.Provider>
    </section>
  )
}
