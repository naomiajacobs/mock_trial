'use strict'

const path = require('path')
const webpack = require('webpack')
const StatsPlugin = require('stats-webpack-plugin')


const devServerPort = 3808
const production = process.env.NODE_ENV === 'production'
const testing = process.env.NODE_ENV === 'test'

let config = {
  entry: {
    'application': './app/assets/javascripts/application.js',
    'styles': './app/assets/stylesheets/application.css',
    'specs': './app/assets/javascripts/specs.js',
  },

  output: {
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',
    filename: production ? '[name]-[chunkhash].js' : '[name].js'
  },

  resolve: {
    root: path.join(__dirname, '..', 'app', 'assets', 'javascripts'),
    extensions: ['', '.js', '.jsx']
  },

  module: {
   loaders: [
    {
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: /app\/assets\/javascripts/,
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }
  ],

  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app/assets/stylesheets")]
  }
 },

  plugins: [
    new StatsPlugin('manifest.json', {
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true
    })
  ],

  // externals: {
  //   'cheerio': 'window',
  //   'react/addons': true,
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext': true
  // }
}

let plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
]

if (production) {
  config.plugins.push(
    plugins[0],
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compressor: { warnings: false },
      mangle: { keep_fnames: true },
      output: { comments: false }
    })
  )
} else if (testing) {
  config.plugins.push(plugins[0]);
} else {
  config.devServer = {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }

  config.output.publicPath = `//localhost:${devServerPort}/webpack/`
  config.devtool = 'source-map'
}


module.exports = config
