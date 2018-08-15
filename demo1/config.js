const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                use:'babel-loader'
            },

        ]
    }
}