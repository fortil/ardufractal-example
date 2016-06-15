import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let name = 'ardufractal';

let vendorModules = /(node_modules|bower_components)/;

export default {
  target: "web",
  entry: {
    app: './app/index.js',
    //vendor: require("./app/vendor.js"),
  },

  output: {
    path: "./build",
    filename: "[name].js",//"[name]-[hash].js",
    // pathinfo: true,
    // publicPath: "http://localhost:3000/",
  },

  module: {
    preLoaders: [
      // {test: /\.jsx?$/, loader: "eslint-loader", exclude: vendorModules},
    ],
    loaders: [
      {
        test: /\.js/,
        exclude: vendorModules,
        loader: "babel",
        query: {
          optional: [
            "runtime",
            // "validation.undeclaredVariableCheck",
            "optimisation.react.constantElements",
          ],
          env: {
            development: {
              plugins: [
                "typecheck",
                "closure-elimination",
              ],
            },
          },
          // jsxPragma: "hJSX",
          stage: 0,
        },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9]|\?[a-z0-9]+)?$/, loader: 'url-loader' },
      { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" },
      { test: /\.bmp$/, loader: "url-loader?mimetype=image/bmp" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
    ],
  },

  plugins: [
    /*new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'vendor-[chunkhash].js', Infinity
    ),*/
    new webpack.optimize.CommonsChunkPlugin('init.js'),
    new HtmlWebpackPlugin({
      title: name,
      minify: process.env.NODE_ENV === 'production' ? {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        preventAttributesEscaping: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      } : false,
      template: './app/index.ejs',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
