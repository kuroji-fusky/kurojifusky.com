import { useEffect } from "react"

export default function useAppendHTMLClass(...className: string[]): void {
  useEffect(() => {
    const htmlRoot = document.documentElement
    htmlRoot.classList.add(...className)
  }, [])
}
