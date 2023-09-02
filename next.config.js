/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/platform',
  images: {
    loader: 'akamai',
    path: '/'
  }
}

module.exports = nextConfig
