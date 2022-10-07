import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Backdrop from "../Backdrop"
import backdropStyles from "../Backdrop/Backdrop.module.scss"
import styles from "./Base.module.scss"
import ftStyles from "./Footer.module.scss"
import socials from "./Socials"

export default function Footer() {
  return (
    <footer className={ftStyles.root}>
      <div className={ftStyles["footer-contents"]}>
        <span id={ftStyles.copyright}>
          {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
        </span>
        <div role="list" className={ftStyles["social-row"]}>
          {socials.map((items, index) => (
            <Link key={index} href={items.link} passHref>
              <a role="listitem" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={items.icon} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div id={styles["backdrop-container"]}>
        <Backdrop className={backdropStyles["footer-center"]} />
      </div>
    </footer>
  )
}
