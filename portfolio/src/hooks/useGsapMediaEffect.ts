"use client"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function useGsapMediaEffect(
  breakpoint: string,
  cb: gsap.ContextFunc,
  scope: string | object | Element
) {
  useEffect(() => {
    let mm = gsap.matchMedia()
    mm.add(breakpoint, cb, scope)

    return () => mm.revert()
  }, [breakpoint, cb, scope])
}
