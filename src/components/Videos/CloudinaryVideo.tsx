import { CloudinaryVideoProps } from "@/types/Cloudinary"
import { cloudinary } from "@/utils/global"

export function CloudinaryVideo(props: CloudinaryVideoProps) {
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
