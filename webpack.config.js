const path = require('path');

  module.exports = {
    entry: './src/utils.js',
    output: {
      path: path.resolve(__dirname, 'dist/lib'),
      filename: 'libqrmlvis.js',
      libraryTarget: 'var',
      library: 'QrmlVisEntryPoint'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
};