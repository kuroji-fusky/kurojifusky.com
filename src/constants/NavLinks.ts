import {
  faCodepen,
  faGithub,
  faItunesNote,
  faLinkedin,
  faSoundcloud,
  faSpotify,
  faSteam,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface IFooterLink {
  heading: string
  links: Array<{
    link: string
    text: string
    icon?: IconDefinition
  }>
}

export const FooterLinks: IFooterLink[] = [
  {
    heading: "Explore My Trash",
    links: [
      { link: "", text: "Portfolio" },
      { link: "", text: "Blog Posts" },
      { link: "", text: "Fanart" },
      { link: "", text: "Roadmap" },
      { link: "", text: "FAQs" },
      { link: "", text: "About this idiot" },
    ],
  },
  // {
  //   heading: "Portfolio",
  //   links: [
  //     { link: "", text: "Projects" },
  //     { link: "", text: "Playground" },
  //     { link: "", text: "Discography" },
  //     { link: "", text: "Other works" },
  //   ],
  // },
  // {
  //   heading: "About Me",
  //   links: [
  //     { link: "", text: "FAQ" },
  //     { link: "", text: "Blog Posts" },
  //     { link: "", text: "Fursona + Artworks" },
  //     { link: "", text: "Autobiography" },
  //     { link: "", text: "Roadmap" },
  //   ],
  // },
  {
    heading: "Socials & Platforms",
    links: [
      { link: "", icon: faYoutube, text: "@kurojifusky" },
      { link: "", icon: faYoutube, text: "@kurojicodes" },
      { link: "", icon: faTwitter, text: "Twitter" },
      { link: "", icon: faGithub, text: "GitHub" },
      { link: "", icon: faSteam, text: "Steam" },
      { link: "", icon: faCodepen, text: "CodePen" },
      { link: "", icon: faLinkedin, text: "LinkedIn" },
      { link: "", icon: faSoundcloud, text: "SoundCloud" },
      { link: "", icon: faSpotify, text: "Spotify" },
      { link: "", icon: faItunesNote, text: "Apple Music" },
    ],
  },
]
