import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { HeroImgContext, NavbarScrollContext } from "@/utils/Context"
import { ChildrenOnly as LayoutProps } from "@/utils/Types"
import Footer from "./Footer"
import Navbar from "./Navbar"

export function Layout(props: LayoutProps) {
  const router = useRouter()

  const [scrolled, isScrolled] = useState(false)
  const NavbarCtxValue = { scrolled, isScrolled }

  const [loaded, isLoaded] = useState(false)

  useEffect(() => {
    if (router.pathname !== "/") {
      isLoaded(true)
    }
  }, [router.pathname])

  useEffect(() => {
    const handleNavbarScroll = () => {
      window.scrollY > 150 ? isScrolled(true) : isScrolled(false)
    }

    window.addEventListener("scroll", handleNavbarScroll)
    return () => window.removeEventListener("scroll", handleNavbarScroll)
  }, [])

  const HeroImgCtxValue = { loaded, isLoaded }

  return (
    <HeroImgContext.Provider value={HeroImgCtxValue}>
      <NavbarScrollContext.Provider value={NavbarCtxValue}>
        <Navbar />
        {props.children}
      </NavbarScrollContext.Provider>
      <Footer />
    </HeroImgContext.Provider>
  )
}
