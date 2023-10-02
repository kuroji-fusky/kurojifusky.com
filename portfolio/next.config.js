/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment"
  }
}

module.exports = nextConfig
