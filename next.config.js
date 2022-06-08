/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	// I know this option increases the size of the bundle, but whatever lol
	productionBrowserSourceMaps: true
}

module.exports = nextConfig
