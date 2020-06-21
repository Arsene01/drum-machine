const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app/main.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist", "app")
  },
  module: {
    rules: [{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
