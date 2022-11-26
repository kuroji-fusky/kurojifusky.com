import React, { useContext } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { isExpandedOnly, NavbarContext } from "contexts"
import { NavLink } from "../NavLink"
import { useRouter } from "next/router"
import { DropdownListItemProps } from "./DropdownSection"

// TEMPLATE
export function DropdownListItem(props: DropdownListItemProps) {
  const router = useRouter()

  const currentDir = router.pathname === props.link

  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly
  return (
    <div role="listitem">
      {props.description ? (
        <Link href={props.link} passHref>
          <a
            className="group flex items-center gap-4 rounded-md pl-5 pr-3 py-3"
            onClick={() => isExpanded(true)}
          >
            <div
              className={`border-2 rounded-md p-4 aspect-square w-[3.5rem] grid place-items-center group-hover:border-sona-borahae-200 ${
                currentDir && "!border-sona-borahae-400"
              }`}
            >
              <FontAwesomeIcon icon={props.icon} />
            </div>
            <div>
              <strong>{props.name}</strong>
              <div className="text-sm">{props.description}</div>
            </div>
          </a>
        </Link>
      ) : (
        <NavLink link={props.link} name={props.name} />
      )}
    </div>
  )
}
