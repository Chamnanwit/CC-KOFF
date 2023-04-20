//Import Other module
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlEwbpackPlugin = require('html-webpack-plugin');

//Import Our module
const commonConfig = require('./webpack.config');

//-------------------------------
const devConfig = merge(commonConfig, {
    mode: 'development',

    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].[hash].js',
    //     assetModuleFilename: 'images/[hash][ext][query]',
    // },

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: ['style-loader','css-loader','sass-loader']
            },
        ],
    },

    plugins: [
        new HtmlEwbpackPlugin({
            template: "./src/template/index.html"
        }),
    ],
});

module.exports = devConfig;