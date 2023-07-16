import contentful from "contentful"

const runtime = useRuntimeConfig()

const client = contentful.createClient({
  space: runtime.CONTENTFUL_SPACE_ID,
  accessToken: runtime.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
})

export default client
