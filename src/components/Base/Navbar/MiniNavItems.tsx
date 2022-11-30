import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ItemTypes } from "contents/NavItems"
import Link from "next/link"

type MiniNavItemsProps = Omit<ItemTypes, "description">

export function MiniNavItems(props: MiniNavItemsProps) {
  return (
    <Link href={props.link}>
      <a className="flex items-center gap-x-2 px-4 py-4 md:py-2.5 rounded-md transition-colors hover:bg-sona-borahae-600 hover:bg-opacity-50">
        <FontAwesomeIcon icon={props.icon} />
        <span className="hidden md:block">{props.name}</span>
      </a>
    </Link>
  )
}
