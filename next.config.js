/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
	productionBrowserSourceMaps: true,
	images: {
		domains: ["img.youtube.com"]
	}
}

module.exports = nextConfig
