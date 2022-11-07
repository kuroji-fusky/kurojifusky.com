export interface ICloudinary {
  type?: "image" | "video"
  rootDir?: "sf-website" | "fursonas" | ""
  dir?: string
  fileName?: string
  quality?: "auto" | string | number
  width?: number
}

export const cloudinary = ({
  type = "image",
  rootDir = "sf-website",
  dir = "",
  fileName,
  width,
  quality
}: ICloudinary) => {
  const baseUrl = "https://res.cloudinary.com"
  const cloudName = "skepfusky-dookie"

  const transforms = [
    quality
      ? `q_${quality}${type === "video" ? ",ac_none,vc_vp9" : ""}`
      : undefined,
    width ? `w_${width}` : undefined,
  ].filter((e) => e !== undefined)

  const parseUrl = [baseUrl, cloudName, type, "upload", ...transforms, rootDir]

  const withDir = [...parseUrl, dir, fileName]
  const withoutDir = [...parseUrl, fileName]

  if (dir !== "") return withDir.join("/")
  return withoutDir.join("/")
}

export const ytImg = (url: string) =>
  `https://img.youtube.com/vi/${url}/maxresdefault.jpg`
