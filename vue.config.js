const path = require('path')
const WebpackBar = require('webpackbar')

function getpath(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    extract: false,
  },
  lintOnSave: true,
  configureWebpack: {
    plugins: [new WebpackBar()],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', getpath('src'))
  },
}
