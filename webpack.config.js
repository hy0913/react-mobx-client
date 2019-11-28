const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports=  {
    mode:"production",
    entry : './index.js',
    output:{
        path:path.join(__dirname + '/dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}