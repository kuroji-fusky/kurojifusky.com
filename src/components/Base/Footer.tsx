import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Backdrop from "../Backdrop"
import backdropStyles from "../Backdrop/Backdrop.module.scss"
import { LinkUnderline } from "../Links"
import styles from "./Base.module.scss"
import socials from "./Socials"

export default function Footer() {
  return (
    <footer className="relative mt-[15rem]">
      <div className="mx-auto max-w-screen-2xl flex flex-col items-center gap-y-5 z-4 absolute p-6 pb-10 bottom-0 left-0 right-0">
        <div role="list" className="flex gap-x-6">
          {socials.map((items, index) => (
            <Link key={index} href={items.link} passHref>
              <a role="listitem" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={items.icon} />
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <span>
            Built using the Nextwind stack, Next.js with TypeScript and Tailwind
            CSS.
          </span>
          <span className="text-sm">
            <LinkUnderline
              external
              link="https://github.com/skepfusky/skepfusky.xyz"
              name="View source code to this website"
            />
          </span>
        </div>
        <span id="copyright" className="text-sm mt-1">
          {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
        </span>
      </div>
      <div id={styles["backdrop-container"]}>
        <Backdrop className={backdropStyles["footer-center"]} />
      </div>
    </footer>
  )
}
