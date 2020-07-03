const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",  // 3. Injects styles/css into dom
                    "css-loader",    // 2. Turns css into commonjs
                    "sass-loader"    // 1. turn sass into css
                ]
            }
        ]
    }
};