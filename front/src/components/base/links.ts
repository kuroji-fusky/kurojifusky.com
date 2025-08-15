import { GithubIcon, RssIcon, TimeIcon } from "../icons"

interface Links {
  href: string
  text: string
}

type TruncateForFooterLinks = Links & {
  icon: unknown
}

type NavTree = Links & {
  subitems?: Links[]
}

export const navLinks = [
  {
    href: "/portfolio",
    text: "Portfolio",
    subitems: [
      { href: "/portfolio/myartverse", text: "MyArtverse" },
      { href: "/portfolio/omniart", text: "OmniArt" },
      { href: "/portfolio/flinky", text: "Flinky" },
      {
        href: "/portfolio/sponsor-explorer",
        text: "SponsorExplorer"
      }
    ]
  },
  {
    href: "/blog",
    text: "Blog",
    subitems: [
      { href: "/blog/engineering", text: "Engineering" },
      { href: "/blog/ui-and-design", text: "Design" },
      { href: "/blog/others", text: "Others" }
    ]
  },
  {
    href: "/artworks",
    text: "Artworks",
    subitems: [
      { href: "/artworks/kuro", text: "Kuro" },
      { href: "/artworks/kinter", text: "Kinter" },
      {
        href: "/artworks/ref-sheets",
        text: "Reference sheets"
      }
    ]
  },

  {
    href: "/about",
    text: "About",
    subitems: [
      { href: "/credits", text: "Credits" },
      { href: "/about/branding", text: "Branding" },
      {
        href: "/contact",
        text: "Contact",
      },
      { href: "/links", text: "Socials" },
    ]
  }
] satisfies NavTree[]

const sourceRepoUrl =
  "https://github.com/kuroji-fusky/kurojifusky.com"

export const footerLinks = [
  { href: "/sitemap", text: "Sitemap", icon: TimeIcon },
  { href: sourceRepoUrl, text: "Sauce", icon: GithubIcon }
] satisfies TruncateForFooterLinks[]
