const fs      = require('fs');
const path    = require('path');
const webpack = require('webpack');

module.exports = () => {
    return {
        mode: 'development',
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            host: '0.0.0.0',
            port: 3000,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(m?js|jsx)$/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: ['css-loader']
                },
                {
                    test: /\.(jpg|png|woff|woff2|eot|ttf|gif|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: '/assets/imgs/[name].[ext]'
                    }
                },
            ]
        }
    }
}