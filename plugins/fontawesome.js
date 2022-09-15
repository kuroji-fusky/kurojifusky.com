import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false

library.add(fab)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon, {})
})