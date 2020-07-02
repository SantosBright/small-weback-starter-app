const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
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