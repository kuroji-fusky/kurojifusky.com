/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
	swcMinify: true,
	trailingSlash: true,
	images: {
		domains: ["img.youtube.com"]
	},
	compiler: {
		removeConsole: true
	}
}

module.exports = nextConfig
