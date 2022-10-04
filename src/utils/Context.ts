import { createContext } from "react"

type DropdownContextTypes = {
  expand: boolean
  isExpanded: (expand: boolean) => void
}

export const DropdownContext = createContext<DropdownContextTypes>({
  expand: true,
  isExpanded: () => {}
})
