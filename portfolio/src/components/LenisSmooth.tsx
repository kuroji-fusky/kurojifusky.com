"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ReactLenis } from "@studio-freight/react-lenis"

export default function LenisSmooth({
  children
}: {
  children?: React.ReactNode
}) {
  const lenisRef = useRef<any>()

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  })

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        duration: 0.75
      }}
    >
      {children}
    </ReactLenis>
  )
}
