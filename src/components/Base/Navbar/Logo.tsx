import { useContext } from "react"
import Link from "next/link"
import { DropdownContext } from "@/utils/Context"

export function Logo({ white }: { white?: boolean }) {
  const { isExpanded } = useContext(DropdownContext)
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
