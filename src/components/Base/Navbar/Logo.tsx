import { useContext } from "react"
import Link from "next/link"
import { isExpandedOnly, NavbarContext } from "contexts"

export function Logo({ white }: { white?: boolean }) {
  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly
  const alternateLogos = !white ? "branding" : "branding-white"

  const name = "kurofusky"

  return (
    <Link href="/" passHref>
      <a
        className={alternateLogos}
        onClick={() => isExpanded(true)}
        aria-label={name}
        aria-hidden={!white ? undefined : "true"}
      >
        {name}
      </a>
    </Link>
  )
}
