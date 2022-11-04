export interface ICloudinary {
  type?: "image" | "video"
  rootDir?: "sf-website" | "fursonas" | ""
  dir?: string
  fileName?: string
  transform?: {
    width?: number
  }
}

export interface CloudinaryVideoProps extends Pick<ICloudinary, "dir"> {
  size?: string | number
  height?: string | number
  width?: string | number
  src?: string
}