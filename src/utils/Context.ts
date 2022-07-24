import { createContext } from "react"

export type ContextType = {
  open: boolean
  isOpen: any
}

export const NavbarContext = createContext<ContextType>({
  open: false,
  isOpen: () => {},
})