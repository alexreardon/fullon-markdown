const path = require('path');
const validate = require('webpack-validator');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDebug = process.env.NODE_ENV !== 'production';

console.log('isProduction:', !isDebug);

const appEntries = [
    './src/polyfills',
    './src/entry',
];

const devEntries = [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
];

const basePlugins = [
    new HtmlWebpackPlugin({
        template: 'fragment.js',
        // putting the file in the assets bucket for production
        // this avoids needing to add a gitignore for index.html in the root
        // webpack with use an in memory version of index.html
        filename: 'index.html',
        inject: true,
    }),
];

const devPlugins = basePlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
]);

const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
    // let libraries know to run in production mode
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
].concat(basePlugins);

module.exports = validate({
    entry: {
        app: isDebug ? devEntries.concat(appEntries) : appEntries,
    },
    devtool: isDebug ? 'cheap-module-eval-source-map' : undefined,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: '/',
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
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.(?:svg|png|jpg)$/,
                loader: 'url-loader?name=[name].[ext]&limit=10000',
            },
        ],
    },
    plugins: isDebug ? devPlugins : prodPlugins,
});
