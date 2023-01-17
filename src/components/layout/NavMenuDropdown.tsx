import { useCallback, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect"

export default function NavMenuDropdown({ state }: { state: boolean }) {
  // 1. add ref to hook the html
  const elementRoot = useRef<HTMLDivElement>(null)
  const [tl, setTl] = useState<gsap.core.Timeline>()

  // 2. Init GSAP timeline
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      setTl(tl)
    })

    return () => ctx.revert()
  }, [])

  // !!! ISOLATE HOOK - useGsapTlCallback
  const addAnimation = useCallback(
    (animation: gsap.core.Tween, index: number) => {
      tl && tl.add(animation, index * 0.1)
    },
    [tl]
  )
  // !!! ISOLATE HOOK
  useIsomorphicLayoutEffect(() => {
    tl && tl.reversed(state)
  }, [state, tl])

  // 3. add animation
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animation = gsap.to(elementRoot.current, { height: "100vh" })

      addAnimation(animation, 0)
    })

    return () => ctx.revert()
  }, [addAnimation])

  return (
    <div ref={elementRoot} className="fixed top-0 left-0 right-0 bg-red-700">
      <div></div>
    </div>
  )
}
