"use client"

import { useRef } from "react"
import gsap from "gsap"
import KuroWordmark from "../Base/kuro_wm.svg"
import { useGsapEffect } from "@/hooks"

export default function HeroScroller() {
  const infiniteScrollRef = useRef<HTMLDivElement>(null)

  useGsapEffect(() => {
    const infiniteScrollEl = infiniteScrollRef.current

    gsap.to(infiniteScrollEl, {
      x: "-100%",
      duration: 21,
      ease: "none",
      repeat: -1
    })
  }, infiniteScrollRef)

  return (
    <div
      className="bg-kuro-yellow-600 absolute -bottom-20 h-16 w-full"
      aria-hidden
    >
      <div className="h-full flex" ref={infiniteScrollRef}>
        {[...Array(2)].map((_, i) => (
          <div className="w-full flex flex-shrink-0" key={i}>
            {[...Array(9)].map((_, i) => (
              <KuroWordmark key={i} role="img" className="h-full py-2 mr-3.5" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
