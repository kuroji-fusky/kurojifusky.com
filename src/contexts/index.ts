import { createContext } from "react"

type PickRequired<T, K extends keyof T> = Required<Pick<T, K>>

type NavbarContextTypes = {
  expand: boolean
  scrolled: boolean
  pageName: string
  isScrolled: (scrolled: boolean) => void
  isExpanded: (expand: boolean) => void
  setPageName: (pageName: string) => void
}

export type isExpandedOnly = PickRequired<NavbarContextTypes, "isExpanded">
export type setPageNameOnly = PickRequired<NavbarContextTypes, "setPageName">

export const NavbarContext = createContext<Partial<NavbarContextTypes>>({
  expand: true,
  scrolled: false,
  pageName: "",
  isExpanded: () => {},
  isScrolled: () => {},
  setPageName: () => {}
})