import { useContext } from "react"
import { isExpandedOnly, NavbarContext } from "@/utils/Context"
import { LinkUnderline } from "../../Links"

export function NavLink(props: Omit<ISharedBtnProps, "onClick">) {
  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly

  return (
    <LinkUnderline link={props.link} onClick={() => isExpanded(true)}>
      {props.name}
    </LinkUnderline>
  )
}
