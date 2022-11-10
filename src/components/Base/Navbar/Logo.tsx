import { useContext } from "react"
import Link from "next/link"
import { isExpandedOnly, NavbarContext } from "@/utils/Context"

export function Logo({ white }: { white?: boolean }) {
  const { isExpanded } = useContext(NavbarContext) as isExpandedOnly
  const alternateLogos = !white ? "branding" : "branding-white"

  return (
    <Link href="/" passHref>
      <a
        className={alternateLogos}
        onClick={() => isExpanded(true)}
        aria-label="skepfusky"
        aria-hidden={!white ? undefined : "true"}
      >
        skepfusky
      </a>
    </Link>
  )
}
