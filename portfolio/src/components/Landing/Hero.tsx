"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import gsap from "gsap"
import HeroImg from "./HeroImg"
import { useGsapMediaEffect } from "@/hooks"
import { MOBILE_BREAKPOINT, artworks } from "@/constants"

const HeroScroller = dynamic(() => import("./HeroScroller"), { ssr: false })

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const picFrameRef = useRef<HTMLDivElement>(null)

  useGsapMediaEffect(
    MOBILE_BREAKPOINT,
    (self) => {
      const heroSection = heroSectionRef.current
      const picFrame = picFrameRef.current

      const vars: gsap.TweenVars = { duration: 0.33, ease: "power2" }
      const toX = gsap.quickTo(picFrame, "x", vars)
      const toY = gsap.quickTo(picFrame, "y", vars)

      const imgWrapper: NodeListOf<HTMLSpanElement> =
        self.selector!("div.inline-block")

      // Set initial stuff
      const artIndexInitial = 4
      imgWrapper.forEach((image) => (image.style.visibility = "hidden"))
      imgWrapper[artIndexInitial].style.visibility = "visible"

      heroSection!.addEventListener("mousemove", (e) => {
        const mouseRelative = e.x / window.innerWidth
        const computedIndex = Math.round(mouseRelative * (artworks.length - 1))

        imgWrapper.forEach((image, index) => {
          if (computedIndex !== index) {
            image.style.visibility = "hidden"
            return
          }

          image.style.visibility = "visible"
          return
        })

        const relX = -1 + (e.x / window.innerWidth) * 2
        const relY = -1 + (e.y / window.innerHeight) * 2

        toX(relX * 300)
        toY(relY * 125)
      })
    },
    picFrameRef
  )

  return (
    <div className="h-[100dvh] relative mb-20" ref={heroSectionRef}>
      <div
        className="z-10 absolute inset-0 flex flex-col justify-center items-center"
        style={
          {
            "--img-size": "16",
            "--computed-size":
              "calc(calc(calc(var(--img-size) / 2) * -1) * 1.15rem)"
          } as React.CSSProperties
        }
      >
        <div
          className="flex md:block relative left-[var(--computed-size)] top-[var(--computed-size)]"
          ref={picFrameRef}
        >
          {artworks.map((item, i) => (
            <HeroImg key={i} img={item.url} artist={item.artist} />
          ))}
        </div>
      </div>
      <canvas className="absolute inset-0 w-full h-full" />
      <HeroScroller />
    </div>
  )
}
