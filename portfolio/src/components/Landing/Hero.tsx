"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import HeroImg from "./HeroImg"
import clsx from "clsx"
import { useGsapMediaEffect } from "@/hooks"
import { MOBILE_BREAKPOINT } from "@/constants"

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

  const heroRootRef = useRef<HTMLDivElement>(null)
  const picScrollRef = useRef<HTMLDivElement>(null)

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

    heroSection!.addEventListener("mousemove", handleMousePosIndex)

    return () => {
      heroSection!.removeEventListener("mousemove", handleMousePosIndex)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useGsapMediaEffect(
    MOBILE_BREAKPOINT,
    () => {
      const heroSection = heroRootRef.current

      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const handleRelativePosition = ({ x: mouseX, y: mouseY }: MouseEvent) => {
        const relX = -1 + (mouseX / windowWidth) * 2
        const relY = -1 + (mouseY / windowHeight) * 2
      }

      heroSection!.addEventListener("mousemove", handleRelativePosition)

      gsap.ticker.add(() => {
        const speed = 0.25
        const delta = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())
      })
    },
    picScrollRef
  )

  return (
    <div className="h-[calc(100dvh-4.75rem)]" ref={heroRootRef}>
      <div
        className="absolute inset-0 flex justify-center items-center"
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
          ref={picScrollRef}
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
