import { useContext } from "react"
import { DropdownContext } from "@/utils/Context"
import { LinkUnderline } from "../../Links"

export function NavLink(props: Omit<ISharedBtnProps, "onClick">) {
  const { isExpanded } = useContext(DropdownContext)

  return (
    <LinkUnderline link={props.link} onClick={() => isExpanded(true)}>
      {props.name}
    </LinkUnderline>
  )
}
