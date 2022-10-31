import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { HeroImgContext, NavbarScrollContext } from "@/utils/Context"
import Footer from "./Footer"
import Navbar from "./Navbar"

export interface LayoutProps {
  children?: React.ReactNode
}

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
