const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CreateStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const StyledComponentsTransformer = CreateStyledComponentsTransformer();

const commonConfig = {
    entry: {
        bundle: './src/index.tsx',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [StyledComponentsTransformer],
                    }),
                },
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '/src/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
};

module.exports = commonConfig;
