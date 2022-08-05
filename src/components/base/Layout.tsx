import { useEffect, useState } from "react"
import { NavbarMobileContext, NavbarScrollContext } from "@/utils/Context"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }: ILayoutProps) {
  const [open, isOpen] = useState(false)
  const [scrolled, isScrolled] = useState(true)

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

  return (
    <NavbarScrollContext.Provider value={{ scrolled, isScrolled }}>
      <NavbarMobileContext.Provider value={{ open, isOpen }}>
        <Navbar />
        {children}
        <Footer />
      </NavbarMobileContext.Provider>
    </NavbarScrollContext.Provider>
  )
}
