import { createContext } from "react"

type DropdownTypes = {
  expand: boolean
  isExpanded: (expand: boolean) => void
}

type NavbarScrollProps = {
  scrolled: boolean
  isScrolled: (scrolled: boolean) => void
}

type HeroImgTypes = {
  loaded: boolean
  isLoaded: (loaded: boolean) => void
}

export const DropdownContext = createContext<DropdownTypes>({
  expand: true,
  isExpanded: () => {}
})

export const NavbarScrollContext = createContext<NavbarScrollProps>({
  scrolled: false,
  isScrolled: () => {}
})

export const HeroImgContext = createContext<HeroImgTypes>({
  loaded: false,
  isLoaded: () => {}
})
