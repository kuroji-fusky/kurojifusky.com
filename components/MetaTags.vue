<script lang="ts" setup>
interface MetaTagProps {
  title: string
  description: string
}

const props = defineProps<MetaTagProps>()

let u = "https://skepfusky.xyz/"
let i =
  "https://res.cloudinary.com/skepfusky-dookie/image/upload/w_700/v1662975456/comm_for_davey_g2_i3nmhp.png"

useHead({
  title: props.title,
  meta: [
    { name: "description", content: props.description },
    // prettier-ignore
    { name: "keywords", content: ["skepfusky", "skepfuskyjs" ,"Kokoro Husky", "furry", "YTP", "fusky", "kokorohusky"].join(", ") },
    { property: "og:title", content: props.title },
    { property: "og:description", content: props.description },
    { property: "og:url", content: u },
    { property: "og:image", content: i },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: props.title },
    { name: "twitter:image", content: i },
    { name: "twitter:description", content: props.description },
    { name: "twitter:url", content: u },
    { name: "twitter:creator", content: "@skepfuskyjs" },
    { name: "twitter:site", content: "@skepfuskyjs" }
  ],
  link: [{ rel: "canonical", href: u }]
})
</script>
