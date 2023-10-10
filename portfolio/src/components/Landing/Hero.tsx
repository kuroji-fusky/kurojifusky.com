"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import HeroImg from "./HeroImg"
import clsx from "clsx"
import { useGsapMediaEffect } from "@/hooks"
import { MOBILE_BREAKPOINT, artworks } from "@/constants"

export default function Hero() {
  const [artworkIndex, setArtworkIndex] = useState(4)

  const heroRootRef = useRef<HTMLDivElement>(null)
  const picScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let _trottleState = 0
    const heroSection = heroRootRef.current

    const handleMousePosIndex = (e: MouseEvent) => {
      const mouseRelative = e.x / window.innerWidth
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
      const picFrame = picScrollRef.current
      const vars: gsap.TweenVars = { duration: 0.33, ease: "power2" }

      const toX = gsap.quickTo(picFrame, "x", vars)
      const toY = gsap.quickTo(picFrame, "y", vars)

      heroSection!.addEventListener("mousemove", (e) => {
        const relX = -1 + (e.x / window.innerWidth) * 2
        const relY = -1 + (e.y / window.innerHeight) * 2

        toX(relX * 420)
        toY(relY * 125)
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
            "--img-size": "15",
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
