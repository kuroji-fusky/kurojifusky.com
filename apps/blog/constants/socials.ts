// !!! TODO - make this a shared component
import {
  IconYoutube,
  IconInstagram,
  IconGithub,
  IconMastodon,
  IconTelegram,
  IconSpotify,
  IconSoundcloud,
  IconXTwitter,
} from "@iconify-prerendered/vue-fa6-brands"

export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    icon: IconYoutube,
    link: "https://www.youtube.com/@kurojifusky",
  },
  { name: "GitHub", icon: IconGithub, link: "https://github.com/kuroji-fusky" },
  {
    name: "Mastodon",
    icon: IconMastodon,
    link: "https://furry.engineer/@kurojifusky",
  },
  {
    name: "Twitter",
    icon: IconXTwitter,
    link: "https://x.com/kurojifusky",
  },
  {
    name: "Instagram",
    icon: IconInstagram,
    link: "https://www.instagram.com/kuroji_fusky/",
  },
  { name: "Telegram", icon: IconTelegram, link: "https://t.me/kurojifusky" },
  {
    name: "SoundCloud",
    icon: IconSoundcloud,
    link: "https://soundcloud.com/kuroji-fusky/",
  },
  {
    name: "Spotify",
    icon: IconSpotify,
    link: "https://soundcloud.com/kuroji-fusky/",
  },
]
