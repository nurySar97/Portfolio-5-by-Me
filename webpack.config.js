const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");

const isDev = true;

const cssLoaders = (text, loader) => {
  return {
    test: text,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false,
        },
      },
      "css-loader",
      ...(!loader ? [] : [loader]),
    ],
  };
};

const config = {
  context: path.resolve(__dirname, "src"),
  mode: isDev ? 'development' : 'production',
  entry: {
    index: "./app/index.js",
    "assets/theme/dark": "./assets/less/dark.less",
    "assets/theme/light": "./assets/less/light.less",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 3000,
  },
  stats: {
    errorDetails: true,
  },
  plugins: [
    new IgnoreEmitPlugin(["light.bundle.js", "dark.bundle.js"]),
    new HtmlWebpackPlugin({
      template: "./index.html",
      excludeChunks: ["assets/theme/dark"],
      minify: !isDev,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./assets/images", to: "./assets/images" }],
    }),
  ],
  module: {
    rules: [
      cssLoaders(/\.css$/),
      cssLoaders(/\.less$/, "less-loader"),
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [],
          },
        },
      },
    ],
  },
};

module.exports = config;
