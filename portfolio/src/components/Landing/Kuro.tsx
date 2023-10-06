"use client"

import Image from "next/image"

export default function Kuro() {
  return (
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
      <div
        className="py-3 text-white"
        style={{ marginTop: "25rem" }}
      >
        Art by your mum
      </div>
    </div>
  </div>
  )
}
