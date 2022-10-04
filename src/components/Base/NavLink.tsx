import { useContext } from "react"
import Link from "next/link"
import nlStyles from "./NavLink.module.scss"
import { DropdownContext } from "@/utils/Context"

interface NavLinkProps {
  link?: string
  name?: string
}

export function NavLink({ link = "", name }: NavLinkProps) {
  const { expand, isExpanded } = useContext(DropdownContext)

  return (
    <Link href={link}>
      <a className={nlStyles.link} onClick={() => isExpanded(!expand)}>
        {name}
      </a>
    </Link>
  )
}
