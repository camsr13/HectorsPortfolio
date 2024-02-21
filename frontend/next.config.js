/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: `/images/vgbsv8ys/**`,
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: false,
  },
}

module.exports = nextConfig
