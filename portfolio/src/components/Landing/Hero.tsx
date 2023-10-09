"use client"

import { useEffect, useRef, useState } from "react"
import HeroImg from "./HeroImg"
import clsx from "clsx"

export default function Hero() {
  const cldBase =
    "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/c_scale,w_700/fursonas/comms"
  const artworks = [
    {
      url: `${cldBase}/MCM_headshot-comm.png`,
      artist: "MintyChipMocha"
    },
    {
      url: `${cldBase}/IMG_2094.png`,
      artist: "Matcha"
    },
    {
      url: `${cldBase}/nepukamiArts_2000.jpg`,
      artist: "nepukamiArts"
    },
    {
      url: `${cldBase}/IMG-20230728-WA0005.jpg`,
      artist: "Lumyhuh"
    },
    {
      url: `${cldBase}/dougly_Icon2.png`,
      artist: "sadcat16hrz"
    },
    {
      url: `${cldBase}/Icon_sunbaestudios.png`,
      artist: "SamoyedRoseCreations"
    }
  ]

  const [artworkIndex, setArtworkIndex] = useState(4)
  const [artworkPos, setArtworkPos] = useState({
    x: 0,
    y: 0
  })

  const heroRootRef = useRef<HTMLDivElement>(null)
  const testing = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let _trottleState = 0
    const heroSection = heroRootRef.current

    const handleMousePosIndex = ({ x: mouseX }: MouseEvent) => {
      const mouseRelative = mouseX / window.innerWidth
      const computedIndex = Math.round(mouseRelative * (artworks.length - 1))

      if (_trottleState === computedIndex) return
      _trottleState = computedIndex

      setArtworkIndex(computedIndex)
      return
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        heroSection!.addEventListener("mousemove", handleMousePosIndex)
        return
      }
      heroSection!.removeEventListener("mousemove", handleMousePosIndex)
      return
    })

    io.observe(heroSection!)

    return () => {
      heroSection!.removeEventListener("mousemove", handleMousePosIndex)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const heroSection = heroRootRef.current
    const lol = testing.current

    const handleRelativePosition = ({ x: mouseX, y: mouseY }: MouseEvent) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const relX = -1 + (mouseX / windowWidth) * 2
      const relY = -1 + (mouseY / windowHeight) * 2

      setArtworkPos({
        x: relX * 320,
        y: relY * 150
      })
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        heroSection!.addEventListener("mousemove", handleRelativePosition)
        return
      }
      heroSection!.removeEventListener("mousemove", handleRelativePosition)
      return
    })

    io.observe(heroSection!)

    return () => {
      heroSection!.removeEventListener("mousemove", handleRelativePosition)
    }
  }, [])

  return (
    <div className="h-[calc(100dvh-4.75rem)]" ref={heroRootRef}>
      <div
        className="grid absolute inset-0 place-items-center"
        style={
          {
            "--img-size": "18",
            "--computed-size":
              "calc(calc(calc(var(--img-size) / 2) * -1) * 1rem)"
          } as React.CSSProperties
        }
      >
        <div
          className="flex md:block relative left-[var(--computed-size)] top-[var(--computed-size)]"
          ref={testing}
          style={{
            transform: `translate3d(${artworkPos.x}px, ${artworkPos.y}px, 0px)`
          }}
        >
          {artworks.map((item, index) => (
            <span
              key={index}
              className={clsx(
                "contents",
                index === artworkIndex ? "visible" : "invisible"
              )}
            >
              <HeroImg img={item.url} artist={item.artist} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
