"use client"

import { useLayoutEffect } from "react"
import { gsap } from "gsap"

export default function useGsapMediaQuery(
  breakpoint: string,
  cb: gsap.ContextFunc
) {
  useLayoutEffect(() => {
    let mm = gsap.matchMedia()
    mm.add(breakpoint, cb)

    return () => mm.revert()
  }, [breakpoint, cb])
}
