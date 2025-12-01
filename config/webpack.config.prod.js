const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const TerserPlugin = require("terser-webpack-plugin");

const webpackProdConfig = merge(
  webpackBaseConfig,
  {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              dead_code: true,
              drop_debugger: true,
              drop_console: false
            },
            output: {
              comments: false,
              beautify: false,
            },
            mangle: true,
            sourceMap: false,
          },
          parallel: true,
        })
      ]
    }
  }
)

module.exports = webpackProdConfig
