import { useEffect, useState } from "react"
import { videos } from "./HeroContents"
import YTPlayer from "../YTPlayer"
import VideoItem from "./VideoItem"
import styles from "./Videos.module.scss"

export function Videos() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [videoInfo, setVideoInfo] = useState<{ title: string; desc: string }>()
  const [scrollCSS, setScrollCSS] = useState(styles["vc-visible"])

  useEffect(() => {
    setTimeout(() => {
      setVideoInfo({
        title: videos[activeVideoIndex].videoTitle,
        desc: videos[activeVideoIndex].videoDesc
      })
      setScrollCSS(styles["vc-in"])
    }, 250)

    setTimeout(() => {
      setScrollCSS(styles["vc-visible"])
    }, 350)
  }, [activeVideoIndex])

  return (
    <section className={styles.wrapper}>
      <h1>Videos</h1>
      <div id="video-showcase" className="py-10 flex justify-around gap-10">
        <div
          id="video-list-picker"
          className="px-5 py-6 border rounded-xl flex flex-col gap-y-2.5"
        >
          <article>
            <p>
              After watching YouTube videos since 2010, I've always wanted to
              dabble on editing videos ever since, and I've persued that
              commitment in mid-2014.
            </p>
            <p>
              We all start from somewhere, I started from Minecraft videos in
              2015 to full-on blogs with higher production quality!
            </p>
          </article>
          {videos.map((video, index) => (
            <VideoItem
              key={index}
              title={video.title}
              description={video.description}
              onClick={() => {
                setActiveVideoIndex(index)
                setScrollCSS(styles["vc-out"])

                activeVideoIndex === index
                  ? setScrollCSS(styles["vc-visible"])
                  : setScrollCSS(styles["vc-out"])
              }}
              active={index === activeVideoIndex}
            />
          ))}
        </div>
        <aside>
          <YTPlayer
            link={videos[activeVideoIndex].id}
            style={{ width: "var(--yt-width-responsive, 640px)" }}
          />
          <article id={styles.content} className={scrollCSS}>
            <h2>{videoInfo?.title}</h2>
            <span>{videoInfo?.desc}</span>
          </article>
        </aside>
      </div>
      <p>
        Just please... don't look back at my old Minecraft videos, I can
        guarantee you <em>will</em> lose braincells. It's that bad lol
      </p>
    </section>
  )
}
