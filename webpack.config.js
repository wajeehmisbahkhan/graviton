const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './www/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'www/js/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}