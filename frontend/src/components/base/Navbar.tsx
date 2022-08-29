import { useContext } from "react"
import Link from "next/link"
import { NavbarMobileContext, NavbarScrollContext } from "@/utils/Context"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/base/Navbar.module.scss"
import NavItem from "../items/NavItem"

export default function Navbar() {
  const { scrolled } = useContext(NavbarScrollContext)
  const { open, isOpen } = useContext(NavbarMobileContext)

  const navCloset =
    open !== true
      ? styles["nav-links-row-closed"].toString()
      : styles["nav-links-row"].toString()

  const backdropToggle =
    open !== true
      ? styles["backdrop-hidden"].toString()
      : styles.backdrop.toString()

  const navbarToggle =
    scrolled !== true ? styles.opaque.toString() : styles.transparent.toString()

  return (
    <header className={navbarToggle}>
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
          <div id={backdropToggle} onClick={() => isOpen(false)}></div>
          <nav className={navCloset}>
            <ul>
              <button
                onClick={() => isOpen(false)}
                className={styles["mobile-btn-exit"]}
              >
                <FaIcon icon={faTimes} />
              </button>
              <li>
                <NavItem link="/blog" name="Blog" />
              </li>
              <li>
                <NavItem link="/portfolio" name="Portfolio" />
                <div className={styles.dropdown.toString()}>
                  <ul>
                    <li>
                      <NavItem link="/projects" name="Open source projects" />
                    </li>
                    <li>
                      <NavItem link="/discography" name="Music" />
                    </li>
                    <li>
                      <NavItem link="/films" name="Filmography" />
                    </li>
                    <li>
                      <NavItem link="/gallery" name="Gallery" />
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavItem link="#" name="About" />
                <div className={styles.dropdown.toString()}>
                  <ul>
                    <li>
                      <NavItem link="/about/fursona" name="Fursona" />
                    </li>
                    <li>
                      <NavItem link="/about/roadmap" name="Roadmap" />
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
