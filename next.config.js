// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isProd = process.env.NODE_ENV === "production";
module.exports = withBundleAnalyzer({
  env: {
    STATIC_URL: isProd ? process.env.STATIC_URL : "",
  },
  assetPrefix: isProd ? process.env.STATIC_URL : "",
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com'
    ],
    formats: ['image/avif', 'image/webp']
  }
})

