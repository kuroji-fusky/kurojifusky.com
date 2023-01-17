import gsap from "gsap"
import { useLayoutEffect, useMemo, useRef } from "react"

export default function useGsapContext<T = undefined>(scope: React.MutableRefObject<T | undefined>) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope])
  return ctx
}
