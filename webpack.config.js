const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const filename = (ext) => (true ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = (text, loader) => {
  return {
    test: text,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      "css-loader",
      ...(!loader ? [] : [loader]),
    ],
  };
};

const config = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["./app/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[hash].[id].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 3000,
  },
  stats:{
    errorDetails: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",

      minify: {
        collapseWhitespace: false,
      },
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
      chunkFilename: "[id].css",
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
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};

module.exports = config;
