import { SocialTypes } from "@/utils/Types"
import {
  faGithub,
  faGitlab,
  faInstagram,
  faItunesNote,
  faLinkedin,
  faSoundcloud,
  faSpotify,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons"

const socials: SocialTypes[] = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/skepfusky97",
    icon: faYoutube
  },
  { name: "Twitter", link: "https://twitter.com/skepfuskyjs", icon: faTwitter },
  // {
  //   name: "Instagram",
  //   link: "https://instagram.com/skepfusky",
  //   icon: faInstagram
  // },
  { name: "Github", link: "https://github.com/skepfusky", icon: faGithub },
  { name: "GitLab", link: "https://gitlab.com/skepfusky", icon: faGitlab },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kerby-keith-aquino-434037238/",
    icon: faLinkedin
  },
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
]

export default socials
