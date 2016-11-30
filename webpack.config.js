var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.min.js"
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}