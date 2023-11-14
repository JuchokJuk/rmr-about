// next.config.js
const withTM = require('next-transpile-modules')(['parse5', 'react-hook-form', 'style-parser', 'webp-hero']); // pass the modules you would like to see transpiled

const withLess = require('@zeit/next-less')
const withCSS  = require('@zeit/next-css')
const path     = require('path');
const withPWA = require('next-pwa')

module.exports = withPWA(withTM(withCSS(withLess({
  webpack5: false,
  pwa: {
    dest: 'public/static',
    swSrc: 'service-worker.js',
    disable: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.resolve.alias['@styles'] = path.resolve(__dirname, 'shared/styles')
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components/')
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/images/')
    config.resolve.alias['@data'] = path.resolve(__dirname, 'src/assets/')
    config.resolve.alias['@api'] = path.resolve(__dirname, 'src/api/')
    config.resolve.alias['@actions'] = path.resolve(__dirname, 'src/redux/actions/')
    config.resolve.alias['@hoc'] = path.resolve(__dirname, 'src/hoc/')
    config.resolve.alias['@helpers'] = path.resolve(__dirname, 'src/helpers/')
    config.resolve.alias['@store'] = path.resolve(__dirname, 'src/store/')
    config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages/')
    config.resolve.alias['@stories'] = path.resolve(__dirname, 'src/stories/')


    return config;
  },
  async redirects() {
    return [
      {
        source: '/tags',
        destination: '/',
        permanent: true,
      },
    ]
  },
}))))
