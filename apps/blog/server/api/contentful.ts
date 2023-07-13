import contentful from "contentful"

const runtime = useRuntimeConfig()

const client = contentful.createClient({
  space: runtime.CONTENTFUL_SPACE_ID,
  accessToken: runtime.CONTENTFUL_DELIVERY_TOKEN,
})

export default client
