import { NavbarScrollContext } from "@/utils/Context"
import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export interface LayoutProps {
  children?: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const [scrolled, isScrolled] = useState<boolean>()
  const NavbarCtxValue = { scrolled, isScrolled }

  return (
    <>
      <NavbarScrollContext.Provider value={NavbarCtxValue}>
        <Navbar />
        {props.children}
      </NavbarScrollContext.Provider>
      <Footer />
    </>
  )
}
