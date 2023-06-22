interface _DynamicColor {
  bg?: string
  bgGradPoint?: string
  fg?: string
}

export function useDynamicColor({ bg, bgGradPoint, fg }: _DynamicColor) {
  const $body = document.body.style

  $body.setProperty("--dynamic-bg", bg ?? "")
  $body.setProperty("--dynamic-bg-gradient", bgGradPoint ?? "")
  $body.setProperty("--dynamic-fg", fg ?? "")
}
