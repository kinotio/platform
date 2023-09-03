/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NEXT_PUBLIC_APP_ENV === 'development'

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  output: 'export',

  basePath: isDevelopment ? '' : '/platform',
  assetPrefix: isDevelopment ? '' : '/platform/'
}

module.exports = nextConfig
