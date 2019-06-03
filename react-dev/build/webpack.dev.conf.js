const merge = require("webpack-merge")
const webpack = require("webpack")
const baseConfig = require("./webpack.base.conf.js")
const API = require('../api')
require("dotenv").config()

module.exports = merge(baseConfig, {
  mode:      "development",
  devtool:   "cheap-module-source-map",
  devServer: {
    contentBase: "./dist",
    compress:    true,
    port:        process.env.PORT,
    host:        process.env.HOST,
    proxy: {
      '/img': {
        target: API['img'],
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
