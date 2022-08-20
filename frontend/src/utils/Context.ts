import { createContext } from "react"

export const NavbarMobileContext = createContext<NavbarMobileContextType>({
  open: false,
  isOpen: () => {}
})

export const NavbarScrollContext = createContext<NavbarScrollContextType>({
  scrolled: false,
  isScrolled: () => {}
})