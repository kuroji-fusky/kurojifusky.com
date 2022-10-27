import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Backdrop from "../Backdrop"
import backdropStyles from "../Backdrop/Backdrop.module.scss"
import { LinkUnderline } from "../Links"
import MovingGrid from "../MovingGrid"
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
          <span>Built using the Nextwind stack, Next.js and Tailwind CSS.</span>
          <span className="text-sm">
            <LinkUnderline
              external
              link="https://github.com/skepfusky/skepfusky.xyz"
              name="View source code to this god-awful website"
            />
          </span>
        </div>
        <span id="copyright" className="text-sm mt-1">
          {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
        </span>
      </div>
      <div className="h-[24rem] w-full absolute bottom-0 overflow-hidden">
        <Backdrop className="-bottom-[1rem] -left-4 opacity-25 rotate-4 h-[11rem] w-[60%] bg-sona-royalblue-700" />
        <Backdrop className="-bottom-[2rem] opacity-50 left-[30%] h-[10rem] w-[40%] bg-sona-borahaealt-800" />
        <Backdrop className="-bottom-[1rem] -right-4 opacity-25 -rotate-4 h-[11rem] w-[60%] bg-sona-skycyan-800" />
			</div>
      <div className="absolute bottom-0 scrollbar-none">
        <MovingGrid />
      </div>
    </footer>
  )
}
