var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
       publicPath: '',
       filename: "[name].[hash].js"       // название создаваемого файла
   },
   devServer: {
    historyApiFallback: true,
  },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            },{
                test: /\.html$/,
                loader: 'html-loader'
            }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'polyfills']
      }),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}