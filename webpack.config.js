const validate = require('webpack-validator');
const path = require('path');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = validate({
    entry: {
        issue: ['./src/entry'],
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
        ],
    },
});
