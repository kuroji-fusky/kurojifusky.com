"use client"
import Link from "next/link"
import { useRef } from "react"
import { SiKofi as Kofi } from "react-icons/si"
import {
  FaYoutube as Youtube,
  FaMastodon as Mastodon,
  FaGithub as Github,
  FaTelegram as Telegram
} from "react-icons/fa6"
import { RiTwitterXFill as XTwitter } from "react-icons/ri"
import Image from "next/image"
import gsap from "gsap"
import { MOBILE_BREAKPOINT } from "@/constants"
import { useGsapMediaEffect } from "@/hooks"
import { registerScrollTrigger } from "@/utils/registerScrollTrigger"
import KuroLink from "../KuroLink"

registerScrollTrigger()

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

  const peekCutie = useRef<HTMLDivElement>(null)

  useGsapMediaEffect(
    MOBILE_BREAKPOINT,
    (self) => {
      const cutie: HTMLImageElement = self.selector!("img")[0]
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cutie,
          scrub: 0.75,
          end: "bottom"
        }
      })

      tl.fromTo(cutie, { y: "50%" }, { y: "-78%" })
    },
    peekCutie
  )

  return (
    <footer>
      <div className="relative">
        <div className="relative my-8 lg:my-0 text-center w-full lg:w-unset lg:text-left lg:absolute lg:left-12 lg:bottom-8 select-none z-10">
          {"Art by "}
          <KuroLink href="https://www.etsy.com/shop/DionDigitalArt" external>
            DionDigitalArt
          </KuroLink>
        </div>
        <div className="relative">
          <div
            ref={peekCutie}
            className="overflow-hidden relative before:absolute before:inset-0 before:z-10 aspect-[9/13] h-[24rem] xl:h-[calc(8.3vw*2.5)] mx-auto"
          >
            <Image
              className="rounded-lg overflow-hidden select-none"
              draggable={false}
              src="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/fursonas/comms/dionart_fusky_062af1.png"
              alt=""
              fill
              sizes="(max-width: 640px) 120px, (max-width: 991px) 240px, 720px"
              quality="90"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-kuro-lavender-200 px-12 py-8 flex justify-between items-center text-sm">
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
      </div>
    </footer>
  )
}
