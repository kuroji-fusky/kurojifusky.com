import { useState } from "react"
import Image from "next/image"

interface ImgLoadingProps {
  src: string
  alt?: string
  cover?: boolean
  className?: string
  priority?: boolean
  lazy?: boolean
  objectFit?: "cover" | "contain"
}

export default function LazyImg(props: ImgLoadingProps) {
  const [loaded, setLoaded] = useState(false)

  const classNameDetect = props.className ?? ""

  const isLoaded = !loaded
    ? "animate-pulse opacity-100"
    : " animate-none opacity-0"

  return (
    <>
      <div
        className={`absolute inset-0 bg-sona-borahaealt-600 ${isLoaded} ${classNameDetect}`}
        aria-hidden
      ></div>
      <Image
        src={props.src}
        alt={props.alt ?? undefined}
        className={props.className ?? undefined}
        layout="fill"
        objectFit={props.objectFit ?? undefined}
        loading={props.lazy ? "lazy" : undefined}
        onLoadingComplete={() => setLoaded(true)}
        priority={props.priority ?? undefined}
      />
    </>
  )
}
