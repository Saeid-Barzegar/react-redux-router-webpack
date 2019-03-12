const path = require('path')

module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s(c|a)ss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        port: 3000,
        contentBase: './public',
        inline: true
    }
}