import {
  faGithub,
  faItunesNote,
  faSoundcloud,
  faSpotify,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

import type { IconDefinition } from "@fortawesome/free-brands-svg-icons"

export interface SocialTypes {
	name: string
	link: string
	icon: IconDefinition
}

const socials = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/skepfusky97",
    icon: faYoutube
  },
  { name: "Twitter", link: "https://twitter.com/skepfuskyjs", icon: faTwitter },
  { name: "Github", link: "https://github.com/skepfusky", icon: faGithub },
  {
    name: "SoundCloud",
    link: "https://soundcloud.com/kokoro-husky-mixtapes",
    icon: faSoundcloud
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/artist/3fouosCOFa1ykd6j9DZkWl",
    icon: faSpotify
  },
  {
    name: "Apple Music",
    link: "https://music.apple.com/us/artist/kokoro-husky/1521326000",
    icon: faItunesNote
  }
] as SocialTypes[]

export default socials
