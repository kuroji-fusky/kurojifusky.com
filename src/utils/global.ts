const CLOUDINARY_URL =
  "https://res.cloudinary.com/skepfusky-dookie/image/upload"

export const cloudinary = (url: string) => CLOUDINARY_URL + url

export const ytImg = (url: string) =>
  `https://img.youtube.com/vi/${url}/maxresdefault.jpg`
