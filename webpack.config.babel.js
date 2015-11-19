import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        // replace instances of requires with specific modules
        alias: {
            'react$': path.join(__dirname, 'node_modules', 'react'),
            'react-dom$': path.join(__dirname, 'node_modules', 'react-dom')
        }
    },
    plugins: [
        // Automatically include modules on usage of variables
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader?{"stage":0,"plugins":["object-assign"]}'
                ]
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loaders: [ 'style', 'css', 'less' ]
            }
        ]
    }
};
