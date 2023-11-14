const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  webpackFinal: (config) => {

    // remove svg from existing rule
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [{
        loader: '@svgr/webpack',
      }],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /.*\.(?:le|c|sc)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
          },
        },
        'less-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias['@styles'] = path.resolve(__dirname, '../shared/styles')
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components/')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../public/images/')
    config.resolve.alias['@api'] = path.resolve(__dirname, '../src/api/')
    config.resolve.alias['@actions'] = path.resolve(__dirname, '../src/redux/actions/')
    config.resolve.alias['@hoc'] = path.resolve(__dirname, '../src/hoc/')
    config.resolve.alias['@helpers'] = path.resolve(__dirname, '../src/helpers/')
    config.resolve.alias['@store'] = path.resolve(__dirname, '../src/store/')
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../src/pages/')
    config.resolve.alias['@stories'] = path.resolve(__dirname, '../src/stories/')


    return config;
  },
}