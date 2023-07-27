const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const fs = require('fs');

const appDir = fs.realpathSync(process.cwd());

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(appDir, "public"),
    compress: true,
    hot: true,
    open: true,
  }
})