const path = require('path');

module.exports = {

    entry: './src/gameController.js',
    output: {

        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch:true,
    
    module: {

        rules: [

        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
                test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            
        }
        }
        

    ]
    }
}