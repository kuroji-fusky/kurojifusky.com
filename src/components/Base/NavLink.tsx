import { useContext } from "react"
import { DropdownContext } from "@/utils/Context"
import { LinkUnderline } from "../Links"

interface NavLinkProps {
  link: string
  name: string
}

export function NavLink(props: Partial<NavLinkProps>) {
  const { expand, isExpanded } = useContext(DropdownContext)

  return (
    <LinkUnderline link={props.link} onClick={() => isExpanded(!expand)}>
      {props.name}
    </LinkUnderline>
  )
}
