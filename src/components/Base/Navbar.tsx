import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { fa0, faFilePen, faGlasses } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import styles from "./Navbar.module.scss"
import NavLink from "./NavLink"

export default function Navbar() {
  const [expand, setExpand] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>skepfusky</a>
        </Link>
        <button
          onClick={() => setExpand(!expand)}
          id={styles["menu-btn"]}
          className={styles[!expand ? "closed" : "open"]}
        ></button>
        <div
          className={styles[!expand ? "dd-container" : "dd-container-closed"]}
        >
          <nav className={styles["dd-wrapper"]}>
            <div className={styles["dd-col"]}>
              <h2 className={styles["nav-heading"]}>
                <span id={styles["hot-garbage"]}>Hot Garbage</span>{" "}
                <span id={styles["gradient-heading"]}>Portfolio</span>
              </h2>
              <div
                role="list"
                className="grid gap-2 grid-cols-1 lg:grid-cols-2"
              >
                <NavLink name="Projects I've Contributed" link="#" />
                <NavLink name="Personal Dev Projects" link="#" />
                <NavLink name="Discography" link="#" />
                <NavLink name="Filmography" link="#" />
                <NavLink name="Archived Works" link="#" />
              </div>
            </div>
            <div className={styles["dd-col"]}>
              <h2 className={styles["nav-heading"]}>
                <span id={styles["gradient-heading"]}>
                  More about this idiot
                </span>
              </h2>
              <div
                role="list"
                className="grid gap-2 grid-cols-1 lg:grid-cols-2"
              >
                <NavLink name="Fursona" link="#" />
                <NavLink name="Milestones" link="#" />
                <NavLink name="Artworks" link="#" />
                <NavLink name="codefusky" link="#" />
              </div>
            </div>
            <div className={styles["dd-col-grid"]}>
              <div id={styles["dd-col-item"]} className={styles["blog-item"]}>
                <FontAwesomeIcon icon={faFilePen} id={styles["dd-fa-icon"]} />
                Blog
              </div>
              <div id={styles["dd-col-item"]} className={styles["about-item"]}>
                <FontAwesomeIcon icon={faGlasses} id={styles["dd-fa-icon"]} />
                About
              </div>
              <div className={styles["lower-third"]}>
                <ul className="flex gap-x-2">
                  <li>
                    <Link href="#">
                      <a target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    </Link>
                  </li>
                </ul>
                <span>
                  Site written in{" "}
                  <NavLink name="Next.js" link="https://nextjs.org" />!
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
