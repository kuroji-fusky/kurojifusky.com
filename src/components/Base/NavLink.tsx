import { useContext } from "react"
import Link from "next/link"
import styles from "../Links/LinkUnderline.module.scss"
import { DropdownContext } from "@/utils/Context"

interface NavLinkProps {
  link?: string
  name?: string
}

export function NavLink(props: NavLinkProps) {
  const { expand, isExpanded } = useContext(DropdownContext)

  return (
    <Link href={props.link ?? ""} passHref>
      <a className={styles.link} onClick={() => isExpanded(!expand)}>
        {props.name}
      </a>
    </Link>
  )
}
