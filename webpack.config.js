const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  entry: "./src/index.js",
  mode: mode,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "custom-pack-blueberry",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  externals: {
    react: "react",
  },
};
