const path = require('path');
const validate = require('webpack-validator');
const webpack = require('webpack');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = validate({
    entry: {
        app: [
            'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            './src/entry',
        ],
    },
    devtool: isDebug ? 'cheap-module-eval-source-map' : undefined,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.md$/,
                loader: 'raw',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
