import { useState, useEffect, useRef, useContext } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePen, faGlasses } from "@fortawesome/free-solid-svg-icons"
import styles from "./Navbar.module.scss"
import { DropdownContext, NavbarScrollContext } from "@/utils/Context"
import { NavLink } from "./NavLink"

export default function Navbar() {
  const [expand, setExpand] = useState(true)

  const { scrolled } = useContext(NavbarScrollContext)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)

  useEffect(() => {
    dropdownRef.current!.style.height = `${height ?? 0}px`

    const scrolledDefault = !scrolled ? 0 : 80
    const currentHeight = dropdownRef.current?.scrollHeight ?? scrolledDefault

    const handleHeight = () => {
      !expand ? setHeight(currentHeight) : setHeight(scrolledDefault)
    }

    handleHeight()

    // Listen to keyboard events and clicking of other elements
    const closeKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (!expand) {
          setExpand(true)
        }
      }
    }

    window.addEventListener("resize", handleHeight)

    document.addEventListener("keydown", closeKeyboard)

    return () => {
      window.removeEventListener("resize", handleHeight)

      document.removeEventListener("keydown", closeKeyboard)
    }
  }, [expand, height, scrolled])

  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <Logo />
        <button
          onClick={() => setExpand(!expand)}
          aria-label="Open/close menu"
          id={styles["menu-btn"]}
          className={styles[!expand ? "open" : "closed"]}
        ></button>
        <div
          ref={dropdownRef}
          className={styles[!expand ? "dd-container" : "dd-container-closed"]}
          style={{ height: "0px" }}
        >
          <div className={styles["logo-wrapper"]}>
            <Logo white />
            <span
              className={styles["keyboard-notice"]}
              aria-label="Press Escape to close menu"
            >
              Tip: Press
              <kbd>ESC</kbd>
              to close menu
            </span>
          </div>
          <nav className={styles["dd-wrapper"]}>
            <DropdownContext.Provider value={{ expand, isExpanded: setExpand }}>
              <section className={styles["dd-col"]}>
                <h2 className={styles["nav-heading"]}>
                  <span id={styles["hot-garbage"]}>Hot Garbage</span>{" "}
                  <span id={styles["gradient-heading"]}>Portfolio</span>
                </h2>
                <div role="list" id={styles["dd-col-list"]}>
                  <NavLink name="Projects I've Contributed" link="#" />
                  <NavLink name="Personal Dev Projects" link="#" />
                  <NavLink name="Discography" link="#" />
                  <NavLink name="Filmography" link="#" />
                  <NavLink name="Archived Works" link="#" />
                </div>
              </section>
              <section className={styles["dd-col"]}>
                <h2 className={styles["nav-heading"]}>
                  <span id={styles["gradient-heading"]}>
                    More about this idiot
                  </span>
                </h2>
                <div role="list" id={styles["dd-col-list"]}>
                  <NavLink name="Fursona" link="/fursona" />
                  <NavLink name="Roadmap" link="/roadmap" />
                  <NavLink name="Artworks" link="#" />
                  <NavLink name="codefusky" link="#" />
                </div>
              </section>
              <section className={styles["dd-col-grid"]}>
                <div id={styles["dd-col-item"]} className={styles["blog-item"]}>
                  <FontAwesomeIcon icon={faFilePen} id={styles["dd-fa-icon"]} />
                  Blog
                </div>
                <Link href="/about" passHref>
                  <a
                    id={styles["dd-col-item"]}
                    className={styles["about-item"]}
                  >
                    <FontAwesomeIcon
                      icon={faGlasses}
                      id={styles["dd-fa-icon"]}
                    />
                    About
                  </a>
                </Link>
              </section>
            </DropdownContext.Provider>
          </nav>
        </div>
      </div>
    </header>
  )
}

export function Logo({ white }: { white?: boolean }) {
  return (
    <Link href="/" passHref>
      <a className={styles[!white ? "logo" : "logo-white"]}>skepfusky</a>
    </Link>
  )
}
