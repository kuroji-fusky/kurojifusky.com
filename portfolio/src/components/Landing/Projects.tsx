"use client"

import { useRef } from "react"
import Link from "next/link"
import { kebabCase } from "lodash-es"
import { gsap } from "gsap"
import { ArrowUpRightIcon } from "lucide-react"
import clsx from "clsx"
import Image from "next/image"
import { useGsapEffect, useGsapMediaQuery } from "@/hooks"
import { MOBILE_BREAKPOINT } from "@/constants"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const projects = [
    {
      product:
        "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/projects/myfursona-sept-banner.png",
      name: "MyFursona",
      description:
        "A soon-to-be social art platform where users share their characters, commission from artists, purchase adoptables, and much more!",
      type: "Platform",
      year: 2022
    },
    {
      product:
        "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/sf-website/projects/searchpets_jl5uaf.png",
      name: "Searchpets!",
      description:
        "Search engine-type website you can filter and query comic entries from the Housepets! web comic by Rick Griffin.",
      type: "Website",
      year: 2022
    },
    {
      product:
        "https://res.cloudinary.com/kuroji-fusky-s3/image/upload/sf-website/projects/paco-drawing-stats_m0e91x.png",
      name: "Paco Drawing Stats",
      description:
        "A data analysis project and analytics website that collects and parses drawing data from a furry artist and illustrator, Paco Panda.",
      type: "Website",
      year: 2021
    }
  ]

  const pictureParallaxRef = useRef<HTMLDivElement>(null)

  useGsapMediaQuery(
    MOBILE_BREAKPOINT,
    useGsapEffect((self) => {
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
    }, pictureParallaxRef)
  )

  return (
    <div className="relative px-8">
      <div
        className="absolute inset-0 right-unset h-full select-none flex flex-col justify-center pointer-events-none"
        aria-hidden
      >
        <span className="uppercase text-[8.33vw] opacity-[0.33] font-bold [writing-mode:vertical-lr] rotate-180">
          Projects
        </span>
      </div>
      <section
        className="mx-auto max-w-screen-2xl grid place-items-center gap-y-6 lg:gap-y-[6rem] xl:gap-y-[9rem]"
        ref={pictureParallaxRef}
      >
        {projects.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "px-8 select-none w-full lg:w-auto",
              index % 2 ? "mr-32" : "ml-32"
            )}
          >
            {/* Heading */}
            <div className="uppercase flex justify-between items-center my-4">
              <Link
                className="group text-3xl font-bold flex flex-wrap items-center gap-x-2.5"
                href={`/showcase/${kebabCase(item.name)}`}
              >
                <h2
                  className="relative 
                before:absolute before:left-0 before:-bottom-1 before:h-[0.1rem] before:bg-kuro-lavender-500 before:w-0 before:group-hover:w-full before:transition-[width] before:duration-300 before:ease-in-out before:z-10
                after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[0.1rem] after:bg-kuro-violet-800"
                >
                  {item.name}
                </h2>
                <ArrowUpRightIcon
                  size={30}
                  className="transition-transform ease-in-out duration-300 group-hover:rotate-[45deg]"
                />
              </Link>
            </div>
            <div className="text-lg my-5">{item.description}</div>
            {/* Image */}
            <Link
              href={`/showcase/${kebabCase(item.name)}`}
              className="block aspect-[10/5] lg:h-full h-[30rem] xl:h-[35rem] 2xl:h-[40rem] relative group"
            >
              <div className="relative h-full">
                <Image
                  id="img-parallax"
                  src={item.product}
                  alt=""
                  fill
                  quality="80"
                  className="object-cover rounded-xl"
                />
              </div>
              <div id="skeleton" className="h-auto w-full bg-kuro-dark1" />
            </Link>
            {/* Year */}
            <div className="flex justify-end uppercase my-3 text-lg gap-x-3">
              <span>{item.type}</span>
              <span>{item.year}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
