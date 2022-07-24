import { useContext } from "react"
import Link from "next/link"
import { NavbarContext } from "@/utils/Context"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import styles from "@/styles/Base.module.scss"

export default function Header() {
  const { open, isOpen } = useContext(NavbarContext)

  const navCloset =
    open === true
      ? styles["nav-links-row"].toString()
      : styles["nav-links-row-closed"].toString()

  const backdropToggle =
    open === true
      ? styles.backdrop.toString()
      : styles["backdrop-hidden"].toString()

  return (
    <header className={styles.line}>
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
                <NavItem link="/#projects" name="Projects" />
              </li>
              <li>
                <NavItem link="/blog" name="Blog" />
              </li>
              <li>
                <NavItem link="/about" name="About" />
                <div className={styles.dropdown}>
                  <ul>
                    <li>
                      <NavItem link="/about/fursona" name="Fursona" />
                    </li>
                    <li>
                      <NavItem link="/about/technologies" name="Technologies" />
                    </li>
                    <li>
                      <NavItem link="/archives" name="Archives lol" />
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

export function NavItem({ link, name }: { link: string; name: string }) {
  const { isOpen } = useContext(NavbarContext)
  return (
    <Link href={link}>
      <a onClick={() => isOpen(false)} className={styles["nav-link"]}>
        {name}
      </a>
    </Link>
  )
}
