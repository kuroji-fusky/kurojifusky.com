// Import garbage
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";

// Add FortniteAwesome
library.add(fab);
library.add(fas);
library.add(far);
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

createApp(App).use(router).mount('#app')
