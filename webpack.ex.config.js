var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'examples/dynamic.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      'react-tree': 'src'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    },
    {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  devServer: {
    contentBase: '.',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};
