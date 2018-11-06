const webpack = require('webpack');

module.exports = {
    entry: './ex/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8091,
        contentBase: './public'
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[{            
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node-modules/,
            query:{
                presets: ['es2015', 'react', 'es2016']
            }
        }]
    }
}