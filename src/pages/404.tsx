import styles from "@/styles/NotFound.module.scss"
import baseStyles from "@/styles/Base.module.scss"
import componentStyles from "@/styles/Components.module.scss"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { NavbarContext } from "@/utils/Context"
import { useContext } from "react"

export default function ErrorPage() {
  const { open } = useContext(NavbarContext)

  const isInteractive =
    open === true
      ? baseStyles["not-found-interactive-inactive"].toString()
      : baseStyles["not-found-interactive"].toString()

  return (
    <main className={`${styles.wrapper} ${isInteractive}`}>
      <article className={styles.container}>
        <h1>404</h1>
        <p>
          This website is still under construction. Most of the links you've just
          clicked on doesn't exist... either that, I'm just too lazy to update the
          site lol
        </p>
        <div className={styles["back-to-home"]}>
          <Link href="/">
            <a className={`${styles.button} ${componentStyles.button}`}>
              <FontAwesomeIcon icon={faAngleLeft} />
              <span>Back to home</span>
            </a>
          </Link>
        </div>
      </article>
    </main>
  )
}
