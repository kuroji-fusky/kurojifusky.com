import { useEffect, useState } from "react"
import baseStyles from "@/styles/Base.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import { ILayoutProps } from "@/utils/Interface"
import { NavbarContext } from "@/utils/Context"

export default function Layout({ children }: ILayoutProps) {
  const [open, isOpen] = useState(false)

  if (typeof window !== "undefined") {
    open === true
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto")
  }

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      isOpen(false)
    }

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        isOpen(false)
      }
    })

    return () => {
      window.removeEventListener("resize", () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          isOpen(true)
        }
      })
    }
  }, [isOpen])

  const isInteractive =
    open === true
      ? baseStyles["interactive-inactive"].toString()
      : baseStyles["interactive"].toString()

  return (
    <NavbarContext.Provider value={{ open, isOpen }}>
      <Header />
      <div className={isInteractive}>{children}</div>
      <Footer />
    </NavbarContext.Provider>
  )
}
