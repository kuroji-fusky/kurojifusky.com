"use client"

import { useLayoutEffect } from "react"
import { gsap } from "gsap"

export default function useGsapEffect(
  cb?: gsap.ContextFunc,
  scope?: string | object | Element
): gsap.ContextFunc & void {
  useLayoutEffect(() => {
    const ctx = gsap.context(cb, scope)

    return () => ctx.revert()
  }, [cb, scope])
}
