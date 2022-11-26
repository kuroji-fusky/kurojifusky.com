import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Backdrop from "../Backdrop"
import { LinkUnderline } from "../Links"
import socials from "./Socials"

export default function Footer() {
  return (
    <footer className="relative mt-[15rem]">
      <div className="mx-auto max-w-screen-2xl flex flex-col lg:flex-row justify-between items-center gap-y-5 px-12 z-4 absolute p-6 pb-[2.75rem] lg:pb-[4.5rem] bottom-0 left-0 right-0 text-center">
        <div className="translate-y-0 opacity-100 transition-all duration-500 text-left flex flex-col gap-3.5">
          <strong className="text-lg font-jetbrains-mono font-extrabold hidden lg:block">
            I'm in these places
          </strong>
          <div role="list" className="flex gap-8 flex-wrap justify-center">
            {socials.map((items, index) => (
              <Link key={index} href={items.link} passHref>
                <a
                  role="listitem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sona-borahae-400"
                >
                  <FontAwesomeIcon icon={items.icon} size="lg" />
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div
          id="other-shit"
          className={`translate-y-0 opacity-100 transition-all duration-500 font-jetbrains-mono flex flex-col gap-y-3 items-center lg:items-end`}
        >
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
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
          <span id="copyright" className="text-sm mt-1">
            {`©  2014-${new Date().getFullYear()} Kerby Keith Aquino`}
          </span>
        </div>
      </div>
      {/* Backdrop */}
      <div className="opacity-100 transition-all duration-1000 h-[24rem] w-full absolute bottom-0 overflow-hidden">
        <Backdrop className="-bottom-[1rem] -left-4 opacity-10 rotate-4 h-[11rem] w-[60%] bg-sona-skycyan-700" />
        <Backdrop className="-bottom-[2rem] opacity-10 left-[30%] h-[10rem] w-[40%] bg-sona-borahaealt-800" />
        <Backdrop className="-bottom-[1rem] -right-4 opacity-10 -rotate-4 h-[11rem] w-[60%] bg-sona-magenta-800" />
      </div>
    </footer>
  )
}
