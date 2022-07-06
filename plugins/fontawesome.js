import { library, config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faYoutube,
  faInstagram,
  faTwitter,
  faItunesNote,
  faSoundcloud,
  faSpotify,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false
library.add(
  faChevronLeft,
  faChevronRight,
  faGithub,
  faYoutube,
  faInstagram,
  faTwitter,
  faItunesNote,
  faSoundcloud,
  faSpotify,
  faDiscord
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {})
})
