import { useContext } from "react"
import { DropdownContext } from "@/utils/Context"
import { LinkUnderline } from "../Links"
import { NameLinkOnly } from "@/types/Mutations"

export function NavLink(props: NameLinkOnly) {
  const { expand, isExpanded } = useContext(DropdownContext)

  return (
    <LinkUnderline link={props.link} onClick={() => isExpanded(!expand)}>
      {props.name}
    </LinkUnderline>
  )
}
