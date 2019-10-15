const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode   : 'development',
    entry  : './src/index.js',
    output : {
        path    : path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                } 
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    plugins: [
        new CopyWebpackPlugin([{ from: './*.html' }]),
    ]
}