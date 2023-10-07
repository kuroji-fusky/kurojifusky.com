"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import Link from "next/link"
import { MOBILE_BREAKPOINT } from "@/constants"
import { useGsapMediaEffect } from "@/hooks"
import { registerScrollTrigger } from "@/utils/registerScrollTrigger"
import KuroLink from "../KuroLink"

registerScrollTrigger()

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
      <div className="relative">
        <div className="relative my-8 lg:my-0 text-center w-full lg:w-unset lg:text-left lg:absolute lg:left-12 lg:bottom-8 select-none z-10">
          {"Art by "}
          <KuroLink href="https://www.etsy.com/shop/DionDigitalArt" external>
            DionDigitalArt
          </KuroLink>
        </div>
        <div className="relative">
          <div className="absolute inset-0">
            <div />
          </div>
          {/* Cutie peek */}
          <div
            ref={peekCutie}
            className="overflow-hidden relative before:absolute before:inset-0 before:z-10 aspect-[9/13] h-[24rem] xl:h-[calc(8.3vw*2.5)] mx-auto"
          >
            <Image
              className="rounded-lg overflow-hidden select-none"
              draggable={false}
              src="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/fursonas/comms/dionart_fusky_062af1.png"
              alt=""
              fill
              sizes="(max-width: 640px) 120px, (max-width: 991px) 240px, 720px"
              quality="90"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </>
  )
}
