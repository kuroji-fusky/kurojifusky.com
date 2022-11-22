/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compress: true,
	images: {
		domains: [
			"res.cloudinary.com",
			"img.youtube.com"
		],
	},
	async redirects() {
		return [
			{
				source: '/fursona',
				destination: '/about/fursona',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig