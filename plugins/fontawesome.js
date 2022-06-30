import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// This is important! We are going to let Nuxt worry about the CSS
config.autoAddCss = false;

library.add(fas);
library.add(fab);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fa-icon", FontAwesomeIcon, {});
});
