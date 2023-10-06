import Link from "next/link"
import { SiKofi as Kofi } from "react-icons/si"
import {
  FaYoutube as Youtube,
  FaMastodon as Mastodon,
  FaGithub as Github,
  FaTelegram as Telegram
} from "react-icons/fa6"
import { RiTwitterXFill as XTwitter } from "react-icons/ri"

export default function Footer() {
  const socials = [
    {
      link: "www.youtube.com/@kurojifusky",
      icon: Youtube,
      rel: "noreferrer noopenner"
    },
    { link: "furry.engineer/@kurojifusky", icon: Mastodon, rel: "me" },
    {
      link: "github.com/kuroji-fusky",
      icon: Github,
      rel: "noreferrer noopenner"
    },
    {
      link: "telegram.me/kurojifusky",
      icon: Telegram,
      rel: "noreferrer noopenner"
    },
    {
      link: "twitter.com/kurojifusky",
      icon: XTwitter,
      rel: "noreferrer noopenner"
    },
    { link: "ko-fi.com/kuroji_fusky", icon: Kofi, rel: "noreferrer noopenner" }
  ]

  return (
    <footer className="border-t border-kuro-lavender-200 px-12 py-8 flex justify-between items-center text-sm">
      <div className="flex gap-5 items-center">
        <span>
          {"Version "}
          <span className="font-bold bg-gradient-to-br from-kuro-royalblue-400 to-kuro-lavender-500 bg-clip-text text-transparent">
            8
          </span>
        </span>
        <hr className="border-l-2 border-kuro-lavender-200 h-6 opacity-50" />
        <div className="flex gap-x-5 items-center">
          {socials.map((item, index) => (
            <Link
              href={`https://${item.link}`}
              key={index}
              rel={item.rel}
              target="_blank"
            >
              <item.icon size="1.35em" />
            </Link>
          ))}
        </div>
      </div>
      <span>
        {`© 2009-${new Date().getFullYear()} Kerby Keith Aquino / Fusky Labs, LLC`}
      </span>
    </footer>
  )
}
