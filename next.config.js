/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	experimental: {
		nextScriptWorkers: true,
	},
	images: {
		domains: [
			"res.cloudinary.com"
		]
	}
}

module.exports = nextConfig
