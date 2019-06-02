const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty'
  },
  module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  modules: true,
                },
              }
          ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            },
          }
        ],
      }]
  }
};
