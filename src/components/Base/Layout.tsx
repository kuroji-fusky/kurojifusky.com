import { useState, useEffect } from "react"
import { NavbarContext } from "contexts"
import Footer from "./Footer"
import Navbar from "./Navbar"
import CommandPalette from "../CommandPalette"

export function Layout(props: ChildrenOnly) {
  const [scrolled, isScrolled] = useState(false)
  const [pageName, setPageName] = useState("")
  const NavbarValues = { scrolled, isScrolled, pageName, setPageName }

  useEffect(() => {
    const handleNavbarScroll = () => {
      window.scrollY > 135 ? isScrolled(true) : isScrolled(false)
    }

    window.addEventListener("scroll", handleNavbarScroll)
    return () => window.removeEventListener("scroll", handleNavbarScroll)
  }, [])

  return (
    <>
      <NavbarContext.Provider value={NavbarValues}>
				{/* <CommandPalette /> */}
        <Navbar />
        {props.children}
      </NavbarContext.Provider>
      <Footer />
    </>
  )
}
