/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/',
  images: {
    loader: 'akamai',
    path: '/'
  }
}

module.exports = nextConfig
