const path = require('path');
const commonConfig = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    ...commonConfig,
    devtool: 'inline-source-map',
    plugins: [
        ...commonConfig.plugins,
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
    },
    mode: 'development',
};
