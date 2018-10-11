const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
    },  { 
      test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      use: "url-loader?limit=100000"
  }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "http://localhost:3000/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../src/public"),
    port: 3000,
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};