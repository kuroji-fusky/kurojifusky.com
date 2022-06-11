/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
  trailingSlash: true,
	images: {
		domains: ["img.youtube.com"]
	}
}

module.exports = nextConfig
