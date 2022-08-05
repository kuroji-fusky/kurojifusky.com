/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: [
      "i3.ytimg.com"
    ]
  }
}

module.exports = nextConfig
