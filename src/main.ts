import { createApp } from 'vue'
import App from './App.vue'
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)
dom.watch()

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
