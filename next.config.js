/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/platform',
  images: {
    loader: 'akamai',
    path: '/platform'
  }
}

module.exports = nextConfig
