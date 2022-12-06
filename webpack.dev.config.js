const path = require("path");
const commonConfig = require("./webpack.config");

module.exports = {
  ...commonConfig,
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
  mode: "development",
};
