// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
