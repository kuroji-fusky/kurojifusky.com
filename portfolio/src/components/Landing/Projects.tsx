"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGsapMediaEffect } from "@/hooks"
import { MOBILE_BREAKPOINT, projects } from "@/constants"
import ProjectItem from "./ProjectItem"
import clsx from "clsx"
import { registerScrollTrigger } from "@/utils/registerScrollTrigger"

registerScrollTrigger()

export default function Projects() {
  const pictureParallaxRef = useRef<HTMLDivElement>(null)

  useGsapMediaEffect(
    MOBILE_BREAKPOINT,
    (self) => {
      const productImgs: NodeListOf<HTMLImageElement> =
        self.selector!("#img-parallax")

      productImgs.forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            scrub: 0.75
          }
        })

        tl.fromTo(
          el,
          { objectPosition: "0% 0%" },
          { objectPosition: "0% 100%" }
        ).reversed()
      })
    },
    pictureParallaxRef
  )

  return (
    <div className="relative px-8">
      <section
        className="mx-auto max-w-screen-2xl grid place-items-center gap-y-9 lg:gap-y-[6rem] xl:gap-y-[9rem]"
        ref={pictureParallaxRef}
      >
        {projects.map((item, index) => (
          <ProjectItem
            key={index}
            className={clsx("m-0", index % 2 ? "xl:ml-32" : "xl:mr-32")}
            slug={item.slug}
            name={item.name}
            year={item.year}
            type={item.type}
            description={item.description}
            imgProduct={item.product}
          />
        ))}
      </section>
    </div>
  )
}
