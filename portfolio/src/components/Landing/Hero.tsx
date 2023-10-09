"use client"

import React, { useEffect, useRef, useState } from "react"
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
        window.addEventListener("mousemove", handleMousePosIndex)
        return
      }
      window.removeEventListener("mousemove", handleMousePosIndex)
      return
    })

    io.observe(heroSection!)

    return () => {
      window.removeEventListener("mousemove", handleMousePosIndex)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="h-[calc(100dvh-4.75rem)]" ref={heroRootRef}>
      <div
        className="grid absolute inset-0 place-items-center"
        style={{ "--img-size": "18.5" } as React.CSSProperties}
      >
        <div
          className="flex md:block relative
          left-[calc(calc(calc(var(--img-size)/2)*-1)*1rem)]
          top-[calc(calc(calc(var(--img-size)/2)*-1)*1rem)]
          "
          ref={testing}
        >
          {artworks.map((item, index) => (
            <div
              key={index}
              className={clsx(index === artworkIndex ? "visible" : "invisible")}
            >
              <HeroImg img={item.url} artist={item.artist} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
