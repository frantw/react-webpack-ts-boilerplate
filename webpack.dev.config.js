const commonConfig = require("./webpack.config");

module.exports = {
  ...commonConfig,
  devServer: {
    hot: true,
  },
  mode: "development",
};
