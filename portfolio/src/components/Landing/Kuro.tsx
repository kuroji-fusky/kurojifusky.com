"use client"

import { useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import Link from "next/link"
import { ScrollTrigger } from "gsap/all"
import { MOBILE_BREAKPOINT } from "@/constants"
import { useGsapMediaEffect } from "@/hooks"

gsap.registerPlugin(ScrollTrigger)

export default function Kuro() {
  const peekCutie = useRef<HTMLDivElement>(null)

  useGsapMediaEffect(
    MOBILE_BREAKPOINT,
    (self) => {
      const cutie: HTMLImageElement = self.selector!("img")[0]

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cutie,
          scrub: 0.75,
          end: "bottom"
        }
      })

      tl.fromTo(cutie, { y: "50%" }, { y: "-80%" })
    },
    peekCutie
  )

  return (
    <>
      <div className="min-h-[calc(100dvh-5rem)] flex items-center justify-between max-w-screen-2xl mx-auto px-8">
        <article>
          <h1 className="text-6xl font-bold my-3">It's me, hi</h1>
          <p className="text-lg">I'm the problem it's me</p>
        </article>
        <div
          className="relative before:absolute before:inset-0 before:z-10"
          style={{ height: "25rem", aspectRatio: "1" }}
        >
          <Image
            className="rounded-lg overflow-hidden select-none"
            draggable={false}
            src="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/fursonas/comms/dougly_Icon2.png"
            alt=""
            fill
            sizes="(max-width: 640px) 120px, (max-width: 991px) 200px, 640px"
            quality="90"
            fetchPriority="high"
          />
          <div className="py-3 text-white" style={{ marginTop: "25rem" }}>
            Art by your mum
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <span className="absolute left-12 bottom-8 select-none">
          {"Art by "}
          <Link href="https://www.etsy.com/shop/DionDigitalArt" target="_blank">
            DionDigitalArt
          </Link>
        </span>
        <div
          ref={peekCutie}
          className="relative before:absolute before:inset-0 before:z-10 aspect-[9/13] h-[calc(8.3vw*2.5)] mx-auto"
        >
          <Image
            className="rounded-lg overflow-hidden select-none"
            draggable={false}
            src="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/fursonas/comms/dionart_fusky_062af1.png"
            alt=""
            fill
            sizes="(max-width: 640px) 120px, (max-width: 991px) 200px, 640px"
            quality="90"
            fetchPriority="high"
          />
        </div>
      </div>
    </>
  )
}
