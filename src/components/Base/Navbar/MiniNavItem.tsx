import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ItemTypes } from "contents/NavItems"
import Link from "next/link"
import { useRouter } from "next/router"

type MiniNavItemsProps = Omit<ItemTypes, "description">

export function MiniNavItem(props: MiniNavItemsProps) {
  const router = useRouter()

  const lmao = router.pathname !== props.link ? "" : " text-sona-borahae-300"

  return (
    <Link href={props.link}>
      <a
        className={`flex items-center gap-x-2 px-4 py-4 lg:py-2.5 rounded-md transition-colors hover:bg-sona-borahae-600 hover:bg-opacity-50${lmao}`}
      >
        <FontAwesomeIcon icon={props.icon} />
        <span className="hidden lg:block">{props.name}</span>
      </a>
    </Link>
  )
}
