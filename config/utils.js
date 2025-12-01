const path = require('path')

exports.APP_PATH = path.join(__dirname, '../src')
exports.DIST_PATH = path.join(__dirname, '../dist')
exports.RESOLVE_CONFIG = {
  modules: [exports.APP_PATH, "node_modules"],
  extensions: ['.js', '.json'],
  alias: {
    "@": exports.APP_PATH
  }
}