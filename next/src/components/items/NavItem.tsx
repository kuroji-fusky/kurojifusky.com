import { NavbarMobileContext } from "@/utils/Context"
import Link from "next/link"
import { useContext } from "react"
import styles from "@/styles/base/Navbar.module.scss"

export default function NavItem({ link, name }: INavItemProps) {
  const { isOpen } = useContext(NavbarMobileContext)

  return (
    <Link href={link}>
      <a onClick={() => isOpen(false)} className={styles["nav-link"]}>
        {name}
      </a>
    </Link>
  )
}
