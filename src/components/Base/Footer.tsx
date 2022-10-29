import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Backdrop from "../Backdrop"
import { LinkUnderline } from "../Links"
import MovingGrid from "../MovingGrid"
import socials from "./Socials"

export default function Footer() {
  return (
    <footer className="relative mt-[15rem]">
      <div className="mx-auto max-w-screen-2xl flex md:flex-row justify-between items-center gap-y-5 px-12 z-4 absolute p-6 pb-[4.5rem] bottom-0 left-0 right-0 text-center">
        <div className="text-left flex flex-col gap-3.5">
          <strong className="text-lg font-inter">Stalk my ass here</strong>
          <div role="list" className="flex gap-x-8">
            {socials.map((items, index) => (
              <Link key={index} href={items.link} passHref>
                <a role="listitem" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={items.icon} size="lg" />
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div id="other-shit" className="flex flex-col gap-y-3 items-end">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex gap-4 text-sm">
              <LinkUnderline
                external
                link="https://github.com/skepfusky/skepfusky.xyz"
                name="Website source code"
              />
              <LinkUnderline link="/contact" name="Contact" />
              <span className="flex gap-x-1 items-center text-sm">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>hello@skepfusky.dev</p>
              </span>
            </div>
          </div>
          <span id="copyright" className="text-sm mt-1">
            {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
          </span>
        </div>
      </div>
      <div className="h-[24rem] w-full absolute bottom-0 overflow-hidden">
        <Backdrop className="-bottom-[1rem] -left-4 opacity-10 rotate-4 h-[11rem] w-[60%] bg-sona-skycyan-700" />
        <Backdrop className="-bottom-[2rem] opacity-10 left-[30%] h-[10rem] w-[40%] bg-sona-borahaealt-800" />
        <Backdrop className="-bottom-[1rem] -right-4 opacity-10 -rotate-4 h-[11rem] w-[60%] bg-sona-magenta-800" />
      </div>
      <div className="absolute bottom-0 scrollbar-none">
        <MovingGrid gridState="running" />
      </div>
    </footer>
  )
}
