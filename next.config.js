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
	}
}

module.exports = nextConfig