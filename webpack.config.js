// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point is your wrapper
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-custom-element.js',
    library: 'MyCustomElement',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Include .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  mode: 'production', // Set the mode to production for optimization
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
