import Image from "next/image"

export default function YouTubeThumbnail({ id, alt }: IYouTubeThumbnailProps) {
  return (
    <Image
      src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
      layout="fill"
      alt={alt}
      loading="lazy"
    />
  )
}
