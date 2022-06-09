/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compress: true,
	// I know this option increases the size of the bundle, but whatever lol
	productionBrowserSourceMaps: true,
	images: {
		domains: ["img.youtube.com"]
	}
}

module.exports = nextConfig
