/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  }
}

module.exports = nextConfig
