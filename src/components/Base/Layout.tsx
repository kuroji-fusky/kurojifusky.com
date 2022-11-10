import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { HomeHeroImgContext, NavbarContext } from "@/utils/Context"
import Footer from "./Footer"
import Navbar from "./Navbar"

export function Layout(props: ChildrenOnly) {
  const router = useRouter()

  const [scrolled, isScrolled] = useState(false)
	const [pageName, setPageName] = useState("")
  const NavbarValues = { scrolled, isScrolled, pageName, setPageName }

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

  const HeroImgValue = { loaded, isLoaded }

  return (
    <HomeHeroImgContext.Provider value={HeroImgValue}>
      <NavbarContext.Provider value={NavbarValues}>
        <Navbar />
        {props.children}
      </NavbarContext.Provider>
      <Footer />
    </HomeHeroImgContext.Provider>
  )
}
