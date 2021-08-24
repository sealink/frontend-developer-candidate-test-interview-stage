const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/entry.js",
  watchOptions: {
    poll: true,
    ignored: "/node_modules/",
  },
  output: {
    path: path.resolve(__dirname, "./app/dist"),
    filename: "app.js",
  },
  devServer: {
    // liveReload: true,
    contentBase: "./app",
    publicPath: "./app/",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
};
