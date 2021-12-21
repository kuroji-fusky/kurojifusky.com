import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Discography from "@/pages/Discography.vue"
import Portfolio from "@/pages/Portfolio.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/portfolio", name: "Portfolio", component: Portfolio },
    { path: "/discography", name: "Discography", component: Discography },
  ],
})

createApp(App).use(router).mount("#app")
