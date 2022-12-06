const commonConfig = require("./webpack.config");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  ...commonConfig,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
