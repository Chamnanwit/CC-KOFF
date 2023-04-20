//Import Other module
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlEwbpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

//Import Our module
const commonConfig = require('./webpack.config');

//-------------------------------
const devConfig = merge(commonConfig, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[hash].min.js',//.min = minify == remove all code comment and white spaces
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlEwbpackPlugin({
            template: "./src/template/index.html"
        }),
    ],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new HtmlEwbpackPlugin({
                template: './src/template/index.html',
                filename: 'index.min.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
});

module.exports = devConfig;
