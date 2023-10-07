"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"
import clsx from "clsx"
import { kebabCase } from "lodash-es"

export default function ProjectItem({
  name,
  description,
  slug,
  imgProduct,
  type,
  year,
  ...className
}: {
  className: string
  name: string
  description: string
  slug?: string
  imgProduct: string
  type: string
  year: number
}) {
  const productLink = `/showcase/${!slug ? kebabCase(name) : slug}`

  return (
    <div
      className={clsx(
        "px-8 select-none w-full xl:w-min grid",
        className.className
      )}
      itemType="http://schema.org/Project"
      itemScope
    >
      {/* Heading */}
      <article className="order-2 lg:order-none">
        <div className="uppercase flex justify-between items-center my-4">
          <Link
            className="group text-3xl xl:text-4xl font-bold flex flex-wrap items-center gap-x-2.5"
            itemType="url"
            href={productLink}
          >
            <h2
              itemType="name"
              className="relative 
                before:absolute before:left-0 before:-bottom-1 before:h-[0.19rem] before:bg-kuro-lavender-500 before:w-0 before:group-hover:w-full before:transition-[width] before:duration-300 before:ease-in-out before:z-10
                after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[0.19rem] after:bg-kuro-violet-800"
            >
              {name}
            </h2>
            <ArrowUpRightIcon
              size={30}
              className="transition-transform ease-in-out duration-300 group-hover:rotate-[45deg]"
            />
          </Link>
        </div>
        <p itemType="description" className="text-lg my-2.5 lg:my-5">
          {description}
        </p>
      </article>

      {/* Image */}
      <Link
        itemType="url"
        href={productLink}
        className="block aspect-[10/5] lg:h-full xl:h-[32rem] 2xl:h-[35rem] relative group"
      >
        <div className="relative h-full">
          <Image
            itemType="image"
            id="img-parallax"
            src={imgProduct}
            alt=""
            fill
            quality="80"
            className="object-cover rounded-xl"
          />
        </div>
        <div id="skeleton" className="h-auto w-full bg-kuro-dark1" />
      </Link>
      {/* Year and type */}
      <div className="flex lg:justify-end uppercase lg:my-3 text-lg gap-x-4 order-last lg:order-none">
        <span>{type}</span>
        <span>{year}</span>
      </div>
    </div>
  )
}
