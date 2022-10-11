/** @type {import('next').NextConfig} */

module.exports = async (phase) => {
	const withPlugins = require("next-compose-plugins")

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

	const withMDX = require('@next/mdx')({
		extension: /\.mdx?$/,
		options: {
			remarkPlugins: [],
			rehypePlugins: [],
			providerImportSource: "@mdx-js/react",
		},
	})

	const defaultConfig = {}
	return withPlugins([withMDX({
		pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	})], nextConfig)(phase, { defaultConfig });
}