import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Backdrop from "../Backdrop"
import backdropStyles from "../Backdrop/Backdrop.module.scss"
import styles from "./Base.module.scss"
import socials from "./Socials"

export default function Footer() {
  return (
    <footer className="relative mt-[11.5rem]">
      <div className={styles["footer-contents"]}>
        <span id="copyright" className="text-sm">
          {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
        </span>
        <div role="list" className="flex gap-x-6">
          {socials.map((items, i) => (
            <Link key={i} href={items.link} passHref>
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
