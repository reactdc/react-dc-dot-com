import path from 'path';

export default {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader?{"stage":0,"plugins":["object-assign"]}'
                ]
            }
        ]
    }
};
