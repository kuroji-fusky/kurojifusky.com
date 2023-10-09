import Image from "next/image"

export default function HeroImg({
  img,
  artist
}: {
  img: string
  artist: string
}) {
  return (
    <div className="inline-block absolute" draggable={false}>
      <div className="relative before:absolute before:inset-0 before:z-10 h-[calc(1vw*var(--img-size))] aspect-square">
        <Image
          className="rounded-lg overflow-hidden select-none"
          draggable={false}
          src={img}
          alt=""
          fill
          sizes="(max-width: 640px) 120px, (max-width: 991px) 200px, 640px"
          quality="90"
          fetchPriority="high"
        />
      </div>
      <div className="py-1.5 text-white/75 pointer-events-none">
        {"Art by "}
        <strong>{artist}</strong>
      </div>
    </div>
  )
}
