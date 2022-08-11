import styles from "@/styles/NotFound.module.scss"
import componentStyles from "@/styles/Components.module.scss"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import Button from "@/components/base/Button"

export default function ErrorPage() {
  return (
    <main className={styles.wrapper} role="main">
      <article className={styles.container}>
        <h1>404</h1>
        <p>
          This website is still under construction. Most of the links you've
          just clicked on doesn't exist... either that, I'm just too lazy to
          update the site lol
        </p>
        <div className={styles["back-to-home"]}>
          <Button link="/" className={styles.button}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <span>Back to home</span>
          </Button>
        </div>
      </article>
    </main>
  )
}
