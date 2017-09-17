'use strict';

module.exports = {
    entry:  __dirname + '/app/scripts/main.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
           // в новом веб паке это можно не использовать
           /* {
                test: /\.json/,
                loader: 'json-loader'
            },*/
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules:true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './public',
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};