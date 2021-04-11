const path = require('path');

module.exports = {
    // mode: "development", package.json dan alcam
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        port: 3010,
        watchContentBase: true
    },
}