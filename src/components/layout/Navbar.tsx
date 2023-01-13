import { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "../ui"
import style from "./Navbar.module.scss"

import { gsap } from "gsap/dist/gsap"
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect"

export default function Navbar() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div ref={rootRef}>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-8 z-5">
        <Link href="/" className={style["nav-wordmark"]}>
          <span role="img">Kuroji Fusky</span>
        </Link>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-[3.25rem] h-[3.25rem]"
        >
          <AnimatedBurger state={isExpanded} />
        </Button>
      </header>
      <div
        aria-hidden
        id="blur-toggle-handler"
        className="fixed inset-0 pointer-events-none z-4"
      ></div>
    </div>
  )
}

function AnimatedBurger({ state }: { state: boolean }) {
  const svgRoot = useRef<SVGSVGElement>(null)
  const tl = useRef(null)

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
			// tl.current && tl.current.progress(0).kill()
		}, svgRoot)

    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={svgRoot}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      viewBox="0 0 512 512"
      aria-hidden
      className="absolute inset-0"
      role="img"
      fill="none"
    >
      <g>
        {/* Burger normal */}
        <line
          className="burger-line"
          x1="59.5"
          y1="125"
          x2="452.5"
          y2="125"
          stroke="white"
          strokeWidth={!state ? "16" : "20"}
        />
        <line
          className="burger-line"
          x1="59.5"
          y1="243.195"
          x2="452.5"
          y2="243.195"
          stroke="white"
          strokeWidth={!state ? "16" : "20"}
        />
        <line
          className="burger-line"
          x1="59.5"
          y1="371"
          x2="452.5"
          y2="371"
          stroke="white"
          strokeWidth={!state ? "16" : "20"}
        />

        {/* X button */}
        {/* <line x1="122.657" y1="111.343" x2="400.55" y2="389.236" stroke="white" strokeWidth="16"/> */}
        {/* <line x1="111.45" y1="389.343" x2="389.343" y2="111.45" stroke="white" strokeWidth="16"/> */}
      </g>
    </svg>
  )
}
