import Link from "next/link"
import nlStyles from "./NavLink.module.scss"

interface NavLinkProps {
  link?: string
  name?: string
}

export default function NavLink({ link = "", name }: NavLinkProps) {
  return (
    <Link href={link}>
      <a className={nlStyles.link}>
				{name}
			</a>
    </Link>
  )
}
