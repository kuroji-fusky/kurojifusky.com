import { useContext } from "react"
import Link from "next/link"
import { NavbarMobileContext, NavbarScrollContext } from "@/utils/Context"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/Navbar.module.scss"
import NavItem from "../items/NavItem"

export default function Navbar() {
  const { scrolled } = useContext(NavbarScrollContext)
  const { open, isOpen } = useContext(NavbarMobileContext)

  const navCloset = () => {
    if (open !== true) return styles["nav-links-row-closed"].toString()
    return styles["nav-links-row"].toString()
  }

  const backdropToggle = () => {
    if (open !== true) return styles["backdrop-hidden"].toString()
    return styles.backdrop.toString()
  }

  const navbarToggle = () => {
    if (scrolled !== true) return styles.opaque.toString()
    return styles.transparent.toString()
  }

  return (
    <header className={navbarToggle()}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logo}>
            <span className={styles.side}>&lt;</span>
            <span className={styles.text}>skepfusky</span>
            <span className={styles.side}>&#47;&gt;</span>
          </a>
        </Link>
        <button
          onClick={() => isOpen(true)}
          className={styles["mobile-btn-toggle"]}
        >
          <FaIcon icon={faBars} />
        </button>
        <div className={styles["nav-wrapper"]}>
          <div id={backdropToggle()} onClick={() => isOpen(false)}></div>
          <nav className={navCloset()}>
            <ul>
              <button
                onClick={() => isOpen(false)}
                className={styles["mobile-btn-exit"]}
              >
                <FaIcon icon={faTimes} />
              </button>
              <li>
                <NavItem link="/#projects" name="Projects" />
              </li>
              <li>
                <NavItem link="/portfolio" name="Portfolio" />
              </li>
              <li>
                <NavItem link="/blog" name="Blog" />
              </li>
              <li>
                <NavItem link="#" name="More" />
                <div className={styles.dropdown.toString()}>
                  <ul>
                    <li>
                      <NavItem link="/about" name="About Me" />
                    </li>
                    <li>
                      <NavItem link="/gallery" name="Artwork Gallery" />
                    </li>
                    <li>
                      <NavItem link="/about/fursona" name="Fursona" />
                    </li>
                    <li>
                      <NavItem link="/about/technologies" name="Technologies" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
