import { cloudinary, ICloudinary } from "@/utils/ImgProviders"

interface CldVideoProps extends Pick<ICloudinary, "dir"> {
  ref?: React.LegacyRef<HTMLVideoElement>
  size?: string | number
  height?: string | number
  width?: string | number
  src: string
}

export function CldVideo(props: CldVideoProps) {
  return (
    <video
      ref={props.ref}
      height={props.height ?? props.size}
      width={props.width ?? props.size}
      className="aspect-video"
      muted
      autoPlay
      loop
      src={cloudinary({
        type: "video",
        quality: "auto",
        dir: props.dir ?? "",
        fileName: props.src
      })}
    ></video>
  )
}
