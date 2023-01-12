/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin", "latin-ext"],
          style: ["normal", "italic"],
        },
      },
    ],
  },
}

module.exports = nextConfig
