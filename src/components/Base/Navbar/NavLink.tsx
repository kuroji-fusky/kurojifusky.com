import { useContext } from "react"
import { isExpandedOnly, NavbarContext } from "contexts"
import { LinkUnderline } from "@/components/UI"

export function NavLink(props: Omit<ISharedBtnProps, "onClick">) {
  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly

  return (
    <LinkUnderline link={props.link} onClick={() => isExpanded(true)}>
      {props.name}
    </LinkUnderline>
  )
}
