import React, { useContext } from "react"
import Link from "next/link"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { isExpandedOnly, NavbarContext } from "contexts"
import { NavLink } from "../NavLink"
import styles from "./DropdownListItem.module.scss"

interface DropdownListItemProps {
  name: string
  link: string
  icon: IconDefinition
  description?: string
  gradStart?: string
  gradEnd?: string
  svg?: NonNullable<React.ReactElement>
}

// TEMPLATE
export function DropdownListItem(props: DropdownListItemProps) {
  const router = useRouter()

  const currentDir = router.pathname === props.link

  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly
  return (
    <div role="listitem">
      {props.description ? (
        <Link
          href={props.link}
          passHref
          className={styles["link-wrapper"]}
          onClick={() => isExpanded(true)}
        >
          <div className={styles[!currentDir ? "border" : "border-current"]}>
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className={styles["link-content"]}>
            <strong>{props.name}</strong>
            <span>{props.description}</span>
          </div>
        </Link>
      ) : (
        <NavLink link={props.link} name={props.name} />
      )}
    </div>
  )
}
