import type { Options } from "@contentful/rich-text-html-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const ytEmbedString = "[yt-embed]"
const tweetEmbedString = "[tweet-embed]"

const rendererOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, text) => {
      return `<p>${text}</p>`
    },
    [BLOCKS.HEADING_2]: (node, text) => `<h2>${text}</h2>`,
    [BLOCKS.HEADING_3]: (node, text) => `<h3>${text}</h3>`
  }
}

export default rendererOptions
