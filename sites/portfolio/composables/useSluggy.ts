export const useSluggy = (input: string) => {
  const yeetSpecialChars = input.replace("!", "")
  const wsToDashes = yeetSpecialChars.replace(/\s/g, "-")
  return wsToDashes.toLowerCase()
}
