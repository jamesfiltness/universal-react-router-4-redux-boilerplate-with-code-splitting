module.exports = {
  entry: './src/client.js',
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0', 'react']
        }
      }
    ]
  },
  output: {
    filename: './dist/bundle.js'
  }
}
