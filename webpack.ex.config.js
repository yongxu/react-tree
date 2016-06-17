var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var postcssImport = require('postcss-import');

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
      loader: "style-loader!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
    }]
  },

  postcss: function () {
    return [
      postcssImport({
        path: [srcPath, path.resolve(srcPath, 'styles')],
        addDependencyTo: webpack
      }),
      autoprefixer,
      precss
    ];
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
