/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains:['']
  }
}


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})