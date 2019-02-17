const path = require("path");
module.exports = {
  entry: "./public/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "public/dist/scripts"),
    filename: "App.js"
  }
};
