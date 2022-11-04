import { cloudinary, ICloudinary } from "@/utils/ImgProviders"

interface CldVideoProps extends Pick<ICloudinary, "dir"> {
  size?: string | number
  height?: string | number
  width?: string | number
  src: string
}

export function CldVideo(props: CldVideoProps) {
  return (
    <video
      height={props.height ?? props.size}
      width={props.width ?? props.size}
      muted
      autoPlay
      loop
    >
      <source
        src={cloudinary({
          type: "video",
          dir: props.dir ?? "",
          fileName: props.src
        })}
      />
    </video>
  )
}
