export const useSluggy = (input: string) => {
  const wsToDashes = input.replace(" ", "-")
  const yeetSpecialChars = wsToDashes.replace("!", "")
  return yeetSpecialChars.toLowerCase()
}
