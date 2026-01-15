import type { APIRoute } from "astro"

const robotsTxt = `
# I allow some AI bots to scrape my personal website, but not the projects I host - I block those. Not gonna get them juicy data and make me go broke.

User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /activity/
Disallow: /api/activity/

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`

export const GET: APIRoute = () => {
  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  })
}
