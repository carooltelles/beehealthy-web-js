const { resolve } = require('path')

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output:{
        path: resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module:{
        rules:[ 
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }

}