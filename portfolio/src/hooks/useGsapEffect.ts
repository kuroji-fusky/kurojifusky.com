"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export default function useGsapEffect(
  cb: gsap.ContextFunc,
  scope?: string | object | Element
): gsap.ContextFunc & void {
  useEffect(() => {
    const ctx = gsap.context(cb, scope)

    return () => ctx.revert()
  }, [cb, scope])
}
