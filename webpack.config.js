const webpack = require('webpack');

module.exports = {
    /* Representa a config do projeto.
    Loaders -> config do babel (transpiler para JS)
    DevServer -> deploy
     */
    entry: './ex/index.js',
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './public'
    },
    module:{
        loaders: [{
            test: '/.js?$/',
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query:{
                presets: ['es2015']
            }
        }]
    }
}