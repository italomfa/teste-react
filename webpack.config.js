const webpack = require("webpack");

module.exports = {
    /* Representa a config do webpack.    

    entry -> todo o conteúdo relacionado aqui (index.js), fará parte do build
    path -> diretório do output    
    output -> saída, gerado a partir do index.js (se não for criado manualmente, é gerado automaticamente)        
    module loaders -> config do babel (transpiler para JS), além de outros.
    devServer -> local para onde o servidor irá direcionar a leitura da saída (recurso exclusivo para dev e próprio do webpack)

     */
    entry: "./ex/index.js",
    output:{
        path: __dirname + "/public",
        filename: "./bundle.js"
    },
    devServer:{
        port: 8090,
        contentBase: "./public" /*diretório base de tudo que será carregado*/
    },
    module:{
        loaders: [{
            /*
            test -> tipo de arquivo será carregado (expressão regular) pelo loader
            loader -> qual será o loader utilizado para carregar os arquivos js
            exclude -> o que não deve ser lido pelo loader
            query presets -> o que eu quero que o loader faça ou interprete.
            query plugins -> plugins do loader

            */
            test: /.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query:{
                presets: ["es2015"],
                plugins: ["transform-object-rest-spread"]
            }
        }]
    }
}