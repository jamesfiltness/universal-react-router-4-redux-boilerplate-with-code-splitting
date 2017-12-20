import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { ReactLoadablePlugin } from 'react-loadable/webpack';

module.exports = {
  entry: {
    app: './src/client',
    vendor: ['react', 'react-dom'],
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')(),
                ],
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new ExtractTextPlugin({
     filename: 'styles-[chunkhash].css',
   }),
   new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[chunkhash].js',
    chunkFilename: 'bundle-[chunkhash].js',
  }
}
