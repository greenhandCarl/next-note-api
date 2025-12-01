const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const { APP_PATH, RESOLVE_CONFIG, DIST_PATH } = require('./utils')

const webpackBaseConfig = {
  entry: {
    server: path.join(APP_PATH, 'app.js')
  },
  resolve: {
    ...RESOLVE_CONFIG
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_PATH
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = webpackBaseConfig
