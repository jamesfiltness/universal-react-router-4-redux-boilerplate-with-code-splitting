const path = require("path");
import { ReactLoadablePlugin } from 'react-loadable/webpack';

module.exports = {
  entry: './src/client',
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      }
    ],

  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
  }
}
