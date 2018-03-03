const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
