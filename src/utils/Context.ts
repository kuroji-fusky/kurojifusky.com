import { createContext } from "react"

type DropdownTypes = {
  expand: boolean
  isExpanded: (expand: boolean) => void
}

export const DropdownContext = createContext<DropdownTypes>({
  expand: true,
  isExpanded: () => {}
})

type NavbarScrollProps = {
  scrolled?: boolean
  isScrolled: (scrolled: boolean) => void
}

export const NavbarScrollContext = createContext<NavbarScrollProps>({
  scrolled: false,
  isScrolled: () => {}
})
