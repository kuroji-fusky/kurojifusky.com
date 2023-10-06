"use client"

import { kebabCase } from "lodash-es"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      product: "",
      name: "MyFursona",
      description:
        "A soon-to-be social art platform where users share their characters, commission from artists, purchase adoptables, and much more!",
      type: "Platform",
      year: 2022
    },
    {
      product: "",
      name: "Searchpets!",
      description:
        "A search query website you can filter and query comic entries from the Housepets! web comic by Rick Griffin.",
      type: "Website",
      year: 2022
    },
    {
      product: "",
      name: "Paco Drawing Stats",
      description:
        "An independent data analysis project and website to collect and parse artwork data from a furry artist and illustrator, Paco Panda.",
      type: "Website",
      year: 2021
    }
  ]

  return (
    <div className="px-8">
      <div className="relative">
        <div className="sticky bottom-0 h-full flex justify-end" aria-hidden>
          Projects
        </div>
      </div>
      <section className="mx-auto max-w-screen-2xl grid place-items-center gap-y-[16rem]">
        {projects.map((item, index) => (
          <div key={index} className="px-8 select-none">
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
              <span className="text-2xl">{item.type}</span>
            </div>
            {/* Image */}
            <Link
              href={`/showcase/${kebabCase(item.name)}`}
              className="block aspect-[10/5] h-[40rem] relative group"
            >
              {/* Description */}
              <div className="absolute w-full bottom-0 p-8 text-lg">
                <p>{item.description}</p>
              </div>
              <div id="skeleton" className="h-full w-full bg-kuro-dark1" />
            </Link>
            {/* Year */}
            <div className="flex justify-end uppercase my-3">{item.year}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
