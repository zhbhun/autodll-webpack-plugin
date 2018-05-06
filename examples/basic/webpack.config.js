const path = require('path');

const AutoDllPlugin = require('../../lib');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new AutoDllPlugin({
      debug: true,
      filename: '[name].dll.js',
      entry: {
        vendor: ['react', 'react-dom'],
      },
    }),
  ],
};
