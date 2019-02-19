const path = require("path");
module.exports = {
  entry: "./public/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "public/dist/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/scripts/"
  }
};
