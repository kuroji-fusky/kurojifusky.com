import { ICloudinary } from "@/types/Cloudinary"

const CLOUDINARY_IMG =
  "https://res.cloudinary.com/skepfusky-dookie/image/upload"

export const cloudinaryImg = (url: string) => CLOUDINARY_IMG + url

export const cloudinary = ({
  type = "image",
  rootDir = "sf-website",
  dir = "",
  fileName,
  transform
}: ICloudinary) => {
  const baseUrl = "https://res.cloudinary.com"
  const cloudName = "skepfusky-dookie"

  const transforms = [transform?.width ? `w_${transform.width}` : undefined]

  const parser = [baseUrl, cloudName, type, "upload", ...transforms, rootDir]

  const withDir = [...parser, dir, fileName]
  const withoutDir = [...parser, fileName]

  if (dir !== "") {
    return withDir.join("/")
  }

  return withoutDir.join("/")
}

export const ytImg = (url: string) =>
  `https://img.youtube.com/vi/${url}/maxresdefault.jpg`
