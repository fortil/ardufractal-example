import merge from 'webpack-merge';

import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';

import commonConfig from './webpack-common.config.js';

var CordovaPlugin = require('webpack-cordova-plugin');

export default merge(commonConfig, {
  debug: false,
  //devtool: "source-map",
  profile: true,
  watch: false,

  plugins: [
    new CleanPlugin(["www"]),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: /\@license|\@preserv/gi,
    }),*/
    function writeWebpackStats() {
      this.plugin("done", function writeStats(stats) {
        require("fs").writeFileSync(
          require('path').join(__dirname, "", "webpack-stats-cordova.json"),
          JSON.stringify(stats.toJson())
        );
      });
    },
    new CordovaPlugin({
      config: 'config.xml',
      src: 'index.html',
      platform: 'android',
      version: true,
    })
  ],
});
