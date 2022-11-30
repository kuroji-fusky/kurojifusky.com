import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Backdrop from "../Backdrop"
import { LinkUnderline } from "../Links"
import socials from "../../contents/Socials"
import styles from "./RootFooter.module.scss"

export default function Footer() {
  return (
    <footer className={styles["responsive-root"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["social-wrapper"]}>
          <div role="list" className={styles["container-list"]}>
            {socials.map((items, index) => (
              <Link key={index} href={items.link} passHref>
                <a
                  role="listitem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["icon"]}
                >
                  <FontAwesomeIcon icon={items.icon} size="lg" />
                  <span className={styles["icon-name-mobile"]}>
                    {items.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles["misc-container"]}>
          <div className={styles["link-wrapper"]}>
            <div className={styles["link-container"]}>
              <LinkUnderline
                external
                link="https://github.com/kuroji-fusky/kurofusky.xyz"
                name="Website source code"
              />
              <LinkUnderline
                external
                link="https://ko-fi.com/skepfusky"
                name="Support me on Ko-Fi"
              />
            </div>
          </div>
          <span id={styles["copyright"]}>
            {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
          </span>
        </div>
      </div>
      {/* Backdrop */}
      <div className={styles["bd-wrapper"]} aria-hidden>
        <Backdrop className={styles["bd-1"]} />
        <Backdrop className={styles["bd-2"]} />
        <Backdrop className={styles["bd-3"]} />
      </div>
    </footer>
  )
}
